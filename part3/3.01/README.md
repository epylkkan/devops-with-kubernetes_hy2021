General: 
See, the pictures before and after shutting down pods


Cluster initialization:
gcloud config set account epylkkan@gmail.com
gcloud config set project dwk-gke
gcloud config list account --format "value(core.account)"
gcloud auth list
gcloud auth login --no-launch-browser
gcloud auth login epylkkan@gmail.com

Console: enable service:container.googleapis.com
gcloud container clusters create dwk-cluster --zone=europe-north1-b --project=dwk-gke-321909

gcloud container clusters delete dwk-cluster --zone=europe-north1-b --project=dwk-gke-321909

kubectl create namespace random-pong

Commands: 
./3.01/postgre
kubectl create secret generic dbpw --from-file=/usr/src/app/dbpw -n random-pong
kubectl apply -f manifests/persistentvolume.yaml -n random-pong
kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong
kubectl apply -f manifests/postgresql-service.yaml -n random-pong
kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong

./3.01/backend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./3.01/frontend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./3.01:
kubectl apply -f manifests/loadbalancer.yaml -n random-pong

/usr/src/app/dbpw: 
- POSTGRES_PASSWORD=pong

ConfigMap: 
- POSTGRES_DB: pongdb
- POSTGRES_USER: pong
- POSTGRES_PASSWORD: pong
- PGDATA: /data/pgdata

Host:'postgres-db-lb'  
