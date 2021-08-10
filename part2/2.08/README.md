General: 
- Pre-populated SQLite used in the earlier exercises was replaced by PostgreSQL (+ some minor improvements)
- Data is retained as long as long as the cluster is up i.e. pods can get re-created but cluster not.
- See, the picture

Cluster initialization:
k3d cluster delete
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
kubectl create namespace todo

Commands: 
./2.08/postgre
kubectl create secret generic todopw --from-file=/usr/src/app/todopw -n todo
kubectl apply -f manifests/persistentvolume.yaml -n todo
kubectl apply -f manifests/postgre-statefulset.yaml -n todo
kubectl apply -f manifests/postgresql-service.yaml -n todo
kubectl apply -f manifests/postgresql-configmap.yaml -n todo

./2.08/backend
kubectl apply -f manifests/deployment.yaml -n todo
kubectl apply -f manifests/service.yaml -n todo

./2.08/frontend
kubectl apply -f manifests/deployment.yaml -n todo
kubectl apply -f manifests/service.yaml -n todo

./2.08:
kubectl apply -f manifests/ingress.yaml -n todo

/usr/src/app/todopw: 
  POSTGRES_PASSWORD=todo

ConfigMap: 
  POSTGRES_DB: tododb
  POSTGRES_USER: todo
  POSTGRES_PASSWORD: todo
  PGDATA: /data/pgdata

Host:'postgres-db-lb'  


Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:208backend
docker push epylkkan/training_kubernetes_devops:208backend
docker build . -t epylkkan/training_kubernetes_devops:208frontend
docker push epylkkan/training_kubernetes_devops:208frontend




