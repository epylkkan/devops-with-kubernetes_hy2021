General: 
See, the picture for the end user view

Cluster initialization:
gcloud config set account epylkkan@gmail.com
gcloud config set project dwk-kubernetes
#gcloud config list account --format "value(core.account)"
gcloud auth list
gcloud auth login --no-launch-browser
#gcloud auth login epylkkan@gmail.com

Console: enable service:container.googleapis.com -Kubernetes Engined API
gcloud container clusters create dwk-kube --zone=europe-north1-c --project=dwk-kubernetes
or
gcloud container clusters delete dwk-kube --zone=europe-north1-c --project=dwk-kubernetes

kubectl create namespace todo
kubectl get nodes --output wide



Commands: 

kubectl create secret generic todopw --from-file=/usr/src/app/todopw -n todo

./3.03/postgre:  kubectl apply -k .
./3.03/backend:  kubectl apply -k .
./3.03/frontend:  kubectl apply -k .
./3.03/wiki:  kubectl apply -k .
./3.03:  kubectl apply -f manifests/loadbalancer.yaml -n todo


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

-----------
git add .
git commit -m "update n"
git push origin main

