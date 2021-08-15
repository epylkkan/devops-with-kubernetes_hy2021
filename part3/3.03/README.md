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

kubectl create namespace todo
kubectl get nodes --output wide


Commands (note, postgre and pingpong backend are the same as in the exercise 2.10)

./2.10/postgre
kubectl create secret generic dbpw --from-file=/usr/src/app/dbpw -n random-pong
kubectl apply -f manifests/persistentvolume.yaml -n random-pong
kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong
kubectl apply -f manifests/postgresql-service.yaml -n random-pong
kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong

./2.10/backend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./3.03/frontend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/nodeport.yaml -n random-pong

./2.10/wiki/
kubectl apply -f manifests/deployment.yaml -n todo
kubectl apply -f manifests/service.yaml -n todo
kubectl apply -f manifests/cronjob.yaml -n todo

./3.03:
kubectl apply -f manifests/loadbalancer.yaml -n todo


/usr/src/app/todopw: 
  POSTGRES_PASSWORD=todo

ConfigMap: 
  POSTGRES_DB: tododb
  POSTGRES_USER: todo
  POSTGRES_PASSWORD: todo
  PGDATA: /data/pgdata

Host:'postgres-db-lb'  


----------------

Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:303frontend
docker push epylkkan/training_kubernetes_devops:303frontend

