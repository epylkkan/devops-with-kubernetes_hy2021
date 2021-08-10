General: 
See, the pictures before and after shutting down pods


Cluster initialization:
k3d cluster delete
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
kubectl create namespace random-pong

Commands: 
./2.07/postgre
kubectl create secret generic dbpw --from-file=/usr/src/app/dbpw -n random-pong
kubectl apply -f manifests/persistentvolume.yaml -n random-pong
kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong
kubectl apply -f manifests/postgresql-service.yaml -n random-pong
kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong

./2.07/backend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./2.07/frontend
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./2.07:
kubectl apply -f manifests/ingress.yaml -n random-pong

/usr/src/app/dbpw: 
- POSTGRES_PASSWORD=pong

ConfigMap: 
- POSTGRES_DB: pongdb
- POSTGRES_USER: pong
- POSTGRES_PASSWORD: pong
- PGDATA: /data/pgdata

Host:'postgres-db-lb'  

Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:207backend
docker push epylkkan/training_kubernetes_devops:207backend
docker build . -t epylkkan/training_kubernetes_devops:207frontend
docker push epylkkan/training_kubernetes_devops:207frontend




