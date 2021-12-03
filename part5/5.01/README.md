
<h2>GENERAL</h2>

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2


<h2>COMMANDS</h2>

k apply -k .

k apply -f manifests/dummyResource.yaml

kubectl logs $(kubectl get pod -l app=controller -o=name) controller

kubectl port-forward $(kubectl get pod -l app=controller -o=name) 8080


<h4>Copy-paste helpers to minimize a need for typing</h4>

docker build . -t epylkkan/training_kubernetes_devops:501controller

docker push epylkkan/training_kubernetes_devops:501controller

