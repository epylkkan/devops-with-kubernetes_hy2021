
k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl apply -f manifests/service.yaml

kubectl apply -f manifests/ingress.yaml

kubectl apply -f manifests/deployment.yaml

kubectl get svc

kubectl get ing

See, the picture


