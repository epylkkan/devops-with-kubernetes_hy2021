const getStringNow = () => {

  console.log(new Date(Date.now()).toISOString() + ": " +randomString)

  setTimeout(getStringNow, 5000)
}

const randomString = Math.random().toString(36).substr(2,10)
getStringNow()