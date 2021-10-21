k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube

$ docker exec -it k3d-k3s-default-agent-0 bash



<h2> Commands: </h2> 

./1.11

kubectl apply -f manifests/persistentvolume.yaml

kubectl apply -f manifests/persistentvolumeclaim.yaml


./1.11/pingpong_revised: 

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml


./1.11

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml

kubectl apply -f manifests/ingress.yaml 



<h2> Copy-paste helpers to minimize a need for typing: </h2> 

docker build . -t epylkkan/training_kubernetes_devops:111pingpong

docker push epylkkan/training_kubernetes_devops:111pingpong

docker build . -t epylkkan/training_kubernetes_devops:111reader

docker push epylkkan/training_kubernetes_devops:111reader

Entering pod with 2 containers:

$ kubectl exec -it random-vol-76b5588895-4f6td -c random-reader

