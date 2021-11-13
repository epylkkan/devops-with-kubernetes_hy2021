
<h4> General </h4> 

See, the pictures before and after shutting down pods


Cluster initialization:

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace random-pong


<h4>Commands</h4>

<h4>./2.07/postgre</h4>

echo -n 'pong' | base64 results to 'cG9uZw=='   # db password is 'pong' which you can read from here :-)

kubectl apply -f manifests/dbpw.yaml -n random-pong

kubectl apply -f manifests/persistentvolume.yaml -n random-pong

kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong

kubectl apply -f manifests/postgresql-service.yaml -n random-pong

kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong


<h4>./2.07/backend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./2.07/frontend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./2.07</h4>

kubectl apply -f manifests/ingress.yaml -n random-pong


Host:'postgres-db-lb'  


<h4>Copy-paste helpers to minimize a need for typing</h4>

docker build . -t epylkkan/training_kubernetes_devops:207-1backend

docker push epylkkan/training_kubernetes_devops:207backend

docker build . -t epylkkan/training_kubernetes_devops:207-1frontend

docker push epylkkan/training_kubernetes_devops:207frontend





