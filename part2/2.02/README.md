<h2>GENERAL</h2>

SQLite is used as a database.

Axios was taken into use to facilitate communication between frontend and backend. 

Code was adjusted accordingly. 

See, the picture.


<h2>COMMANDS</h2>

k3d cluster delete

k3d cluster create -p 8081:80@loadbalancer --agents 2


<h4>./frontend</h4>

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml


<h4>./backend</h4>

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml

<h4>./</h4>

kubectl apply -f manifests/ingress.yaml 



<h4>Copy-paste helpers to minimize a need for typing</h4>

docker build . -t epylkkan/training_kubernetes_devops:202backend

docker build . -t epylkkan/training_kubernetes_devops:202frontend

docker push epylkkan/training_kubernetes_devops:202backend

docker push epylkkan/training_kubernetes_devops:202frontend


