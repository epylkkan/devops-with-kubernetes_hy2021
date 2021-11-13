General: 
<h2>General</h2>

See, the picture for the end user view


<h4>Cluster initialization</h4>

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace random-pong


<h4>./2.06/reader_revised</h4>

kubectl create configmap node-configmap --from-file=/usr/src/app/.env -n random-pong

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./2.06/pingpong_revised</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/service.yaml -n random-pong


<h4>./2.06</h4>

kubectl apply -f manifests/ingress.yaml -n random-pong


<h4>/usr/src/app/.env  (application has a different directory path)</h4>
MESSAGE=Hello









