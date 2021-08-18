
Resource limits added to all the deployment.yaml-files
horizontalpodautoscalere.yaml-files were added as described below under the Commands-section
New frontend image ...309reader created due to the IP-address change compared to the exercise 3.02
See, the picture for the end user view

----------------

Commands (note, postgre and pingpong backend are the same as in the exercise 3.01)
./3.01/postgre
kubectl create secret generic dbpw --from-file=/usr/src/app/dbpw -n random-pong
kubectl apply -f manifests/persistentvolume.yaml -n random-pong
kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong
kubectl apply -f manifests/postgresql-service.yaml -n random-pong
kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong

./3.09/backend
kubectl apply -f manifests/deployment.yaml -n random-pong  
kubectl apply -f manifests/service.yaml -n random-pong
kubectl apply -f manifests/horizontalpodautoscaler.yaml -n random-pong

./3.09/pingpong/frontend
kubectl apply -f manifests/deployment.yaml -n random-pong
#kubectl apply -f manifests/service.yaml -n random-pong
kubectl apply -f manifests/nodeport.yaml -n random-pong
kubectl apply -f manifests/horizontalpodautoscaler.yaml -n random-pong

./3.09/random 
kubectl create configmap node-configmap --from-file=/usr/src/app/.env -n random-pong
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/nodeport.yaml -n random-pong
kubectl apply -f manifests/horizontalpodautoscaler.yaml -n random-pong

./3.09:
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

docker build . -t epylkkan/training_kubernetes_devops:309reader
docker push epylkkan/training_kubernetes_devops:309reader




