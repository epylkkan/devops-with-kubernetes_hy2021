<h2>General</h2>

SQLite is used as a database


<h4>Commands</h4> 

k3d cluster delete

k3d cluster create -p 3000:80@loadbalancer --agents 2

docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube

kubectl apply -f manifests/persistentvolume.yaml

kubectl apply -f manifests/persistentvolumeclaim.yaml

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml

kubectl apply -f manifests/ingress.yaml 



<h4> Copy-paste helpers to minimize a need for typing: </h4> 

docker build . -t epylkkan/training_kubernetes_devops:112-113

docker push epylkkan/training_kubernetes_devops:112-113

docker exec -it k3d-k3s-default-agent-0 bash

