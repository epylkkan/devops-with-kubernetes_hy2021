General: 
See, the picture for the end user view

Cluster initialization:
k3d cluster delete
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
kubectl create namespace random-pong

./2.06/reader_revised
kubectl create configmap node-configmap --from-file=/usr/src/app/.env -n random-pong
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./2.06/pingpong_revised
kubectl apply -f manifests/deployment.yaml -n random-pong
kubectl apply -f manifests/service.yaml -n random-pong

./2.06
kubectl apply -f manifests/ingress.yaml -n random-pong


/usr/src/app/.env  (application has a different directory path):
MESSAGE=Hello









