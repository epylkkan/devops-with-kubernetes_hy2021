const fsPromises = require("fs").promises;
const k8s = require("@kubernetes/client-node");
const scrape = require("website-scraper");


const validateUrl = (url) => {
  try {
    const { href, hostname } = new URL(url);
    return { href, hostname };
  } catch (error) {
    console.error(`❌ ERROR: "${url}" is not a valid URL!`);
    return { href: "error", hostname: "N/A" };
  }
};

const deleteFolderIfExists = async (path) => {
  try {
    await fsPromises.stat(path);
    await fsPromises.rmdir(path, { recursive: true });
  } catch (error) {}
};


const scrapeWebsite = async (url, subfolder) => {
  const options = {
    urls: [url],
    directory: `${__dirname}/data/${subfolder}`,
    // /usr/src/app/data in container
  };

  const { urls, directory } = options;
  try {
    await deleteFolderIfExists(directory);
    const result = await scrape(options);
    console.log(`"${urls[0]}" scraped to ${directory}`);

    return { result, directory, successful: true };
  } catch (error) {
    console.error(`❌ ERROR: could not scrape "${urls[0]}" to ${directory}`);
    console.error(`Reason: ${error.message}`);

    return {
      result: [{ text: "error" }],
      directory: "N/A",
      successful: false,
    };
  }
};

function simpleStringify(object) {
  var simpleObject = {};
  for (var prop in object) {
    if (!object.hasOwnProperty(prop)) {
      continue;
    }
    if (typeof object[prop] == "object") {
      continue;
    }
    if (typeof object[prop] == "function") {
      continue;
    }
    simpleObject[prop] = object[prop];
  }
  return JSON.stringify(simpleObject); 
}

const kc = new k8s.KubeConfig();

process.env.NODE_ENV === "development"
  ? kc.loadFromDefault()
  : kc.loadFromCluster();

const client = kc.makeApiClient(k8s.CustomObjectsApi);
const watch = new k8s.Watch(kc);


(async () => {
  console.log(`Controller launched`);

  watch.watch(
    "/apis/stable.dwk/v1/dummysites",
    {
      allowWatchBookmarks: true,
    },
  
    async (type, apiObj) => {
      if (type === "ADDED" || type === "MODIFIED") {
        const websiteUrlFromRessource = apiObj.spec?.website_url;
        const { href, hostname } = validateUrl(websiteUrlFromRessource);

        const { result, directory, successful } = await scrapeWebsite(
          href, 
          hostname 
        );

        const text = JSON.parse(simpleStringify(result[0]))?.text;

        const { name, namespace } = apiObj.metadata;

        try {
          const newApiObject = {
            ...apiObj,
            spec: {
              ...apiObj.spec,
              successful,
              html: text,
              path_in_pod: directory,
            },
          };

          const patchOptions = {
            headers: {
              "Content-type": "application/merge-patch+json",
            },
          };

          await client.patchNamespacedCustomObject(
            "stable.dwk", 
            "v1", 
            namespace, 
            "dummysites", 
            name, 
            newApiObject, 
            undefined, 
            undefined, 
            undefined, 
            patchOptions 
          );
        } catch (error) {
           
        }
        
      } else if (type === "DELETED") {
        console.log(`☸️ the k8s object "${apiObj.metadata?.name}" was deleted`);
      }
    },
    (err) => {
      console.error("❌ ERROR: could not watch for k8s objects");
      console.error(`Reason: ${err}`);
    }
  );
})();