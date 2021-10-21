# nodejs-todoList

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

k apply -f manifests/deployment.yaml

k apply -f manifests/service.yaml

See, the picture