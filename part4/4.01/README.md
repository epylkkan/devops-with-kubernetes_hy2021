<h2>GENERAL</h2>

See, the pictures.

Added 

- healthz-routine to server.js (backend) and index.js (random string)

- Readiness-probe definition to the respective deployment.yaml -files


Cluster initialization:

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace random-pong

kubectl get nodes --output wide



<h2>COMMANDS</h2>

<h4>./4.01/postgre</h4>

echo -n 'pong' | base64 results to 'cG9uZw=='   # db password is 'pong' which you can read from here :-)

kubectl apply -f manifests/dbpw.yaml -n random-pong

kubectl apply -f manifests/persistentvolume.yaml -n random-pong

kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong

kubectl apply -f manifests/postgresql-service.yaml -n random-pong

kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong


<h4>./4.01/pingpong/backend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./4.01/pingpong/frontend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./4.01/random</h4>

kubectl apply -f manifests/node-configmap.yaml-n random-pong

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./4.01</h4>

kubectl apply -f manifests/ingress.yaml -n random-pong



<h4>Copy-paste helpers to minimize a need for typing</h4>

docker build . -t epylkkan/training_kubernetes_devops:401reader

docker push epylkkan/training_kubernetes_devops:401reader

docker build . -t epylkkan/training_kubernetes_devops:401-12pingpongbackend

docker push epylkkan/training_kubernetes_devops:401-12pingpongbackend






