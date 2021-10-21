k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl apply -f manifests/service.yaml

kubectl apply -f manifests/ingress.yaml

kubectl apply -f manifests/deployment.yaml

kubectl get po,deploy,svc,ing

See, the picture

------

Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:107random

docker push epylkkan/training_kubernetes_devops:107random