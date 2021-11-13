<h2>GENERAL</h2>

In the picture the frequency for auto-populating the Wikipedia entries was faster than reflected in the finanl cronjob.yaml


Cluster initialization:

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace todo


<h2>COMMAND</h2>

<h2>./2.09/wiki</h2>

kubectl apply -f manifests/deployment.yaml -n todo

kubectl apply -f manifests/service.yaml -n todo

kubectl apply -f manifests/cronjob.yaml -n todo


<h2>./2.09</h2>

kubectl apply -f manifests/ingress.yaml -n todo

+ steps defined in the exercise 2.8 except for ingress



<h2>Copy-paste helpers to minimize a need for typing</h2>

docker build . -t epylkkan/training_kubernetes_devops:209wiki

docker push epylkkan/training_kubernetes_devops:209wiki





