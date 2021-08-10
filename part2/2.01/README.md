General: 
See, the pictures

Cluster initialization:
k3d cluster delete
k3d cluster create -p 8081:80@loadbalancer --agents 2

./reader_revised
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml

./pingpong_revised
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml

./
kubectl apply -f manifests/ingress.yaml 


Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:21randompingpong
docker push epylkkan/training_kubernetes_devops:21randompingpong