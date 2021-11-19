<h2>GENERAL</h2>

See, the pictures before and after shutting down pods

Cluster initialization:

gcloud config set account epylkkan@gmail.com

gcloud config set project dwk-kubernetes

gcloud config list account --format "value(core.account)"

gcloud auth list

gcloud auth login --no-launch-browser

gcloud auth login epylkkan@gmail.com

Console: enable service:container.googleapis.com
or gcloud services enable container.googleapis.com

(gcloud container clusters create dwk-cluster --zone=europe-north1-b --project=dwk-gke-321909)

gcloud container clusters create dwk-cluster --zone=europe-north1-b --release-channel=rapid --cluster-version=1.22

(gcloud container clusters delete dwk-cluster --zone=europe-north1-b --project=dwk-gke-321909)

gcloud container clusters delete dwk-cluster --zone=europe-north1-b --release-channel=rapid --cluster-version=1.22

(gcloud container clusters get-credentials dwk-cluster --zone=europe-north1-b)

kubectl create namespace random-pong


<h2>COMMANDS</h2>

<h4>./3.01/postgre</h4>

echo -n 'pong' | base64 results to 'cG9uZw=='   # db password is 'pong' 

kubectl apply -f manifests/dbpw.yaml -n random-pong

kubectl apply -f manifests/persistentvolume.yaml -n random-pong

kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong

kubectl apply -f manifests/postgresql-service.yaml -n random-pong

kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong


<h4>./3.01/backend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./3.01/frontend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./3.01</h4>

kubectl apply -f manifests/loadbalancer.yaml -n random-pong

