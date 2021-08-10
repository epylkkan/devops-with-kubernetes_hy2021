General: 
Axios was taken into use to facilitate communication between frontend and backend. 
Code was adjusted accordingly. 

Commands: 
k3d cluster delete
k3d cluster create -p 8081:80@loadbalancer --agents 2

./frontend
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml

./backend
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml

./
kubectl apply -f manifests/ingress.yaml 


Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:202backend
docker build . -t epylkkan/training_kubernetes_devops:202frontend
docker push epylkkan/training_kubernetes_devops:202backend
docker push epylkkan/training_kubernetes_devops:202frontend


