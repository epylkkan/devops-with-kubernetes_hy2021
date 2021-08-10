General: 
See, the picture for the end user view

Cluster initialization:
gcloud config set account epylkkan@gmail.com
gcloud config set project dwk-gke
gcloud config list account --format "value(core.account)"
gcloud auth list
gcloud auth login --no-launch-browser
#gcloud auth login epylkkan@gmail.com

Console: enable service:container.googleapis.com
gcloud container clusters create dwk-cluster --zone=europe-north1-c --project=dwk-gke-321909
or
gcloud container clusters delete dwk-cluster --zone=europe-north1-c --project=dwk-gke-321909

kubectl create namespace random-pong
kubectl get nodes --output wide


Command (note, postgre and pingpong backend are the same as in the exercise 3.01)
./3.01/postgre
kubectl create secret generic dbpw --from-file=/usr/src/app/dbpw -n random-pong
kubectl apply -f manifests/persistentvolume.yaml -n random-pong
kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong
kubectl apply -f manifests/postgresql-service.yaml -n random-pong
kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong

./3.01/backend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./3.02/pingpong/frontend
kubectl apply -f manifests/deployment.yaml -n random-pong
#kubectl apply -f manifests/service.yaml -n random-pong
kubectl apply -f manifests/nodeport.yaml -n random-pong

./3.02/random 
kubectl create configmap node-configmap --from-file=/usr/src/app/.env -n random-pong
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/nodeport.yaml -n random-pong

./3.02:
kubectl apply -f manifests/ingress.yaml -n random-pong


/usr/src/app/.env  (application has a different directory path):
MESSAGE=Hello


/usr/src/app/dbpw: 
- POSTGRES_PASSWORD=pong

ConfigMap: 
- POSTGRES_DB: pongdb
- POSTGRES_USER: pong
- POSTGRES_PASSWORD: pong
- PGDATA: /data/pgdata

Host:'postgres-db-lb'  

----------------

Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:302-10reader
docker push epylkkan/training_kubernetes_devops:302-10reader

docker build . -t epylkkan/training_kubernetes_devops:302-1frontend
docker push epylkkan/training_kubernetes_devops:302-1frontend



k exec -it random-66d68cc57f-7qs49 sh -n random-pong





