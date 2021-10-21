k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

k apply -f manifests/deployment.yaml

kubectl port-forward todo-6b6574c9f9-xtvx5 3000:8080

localhost:3000 

See, the picture


------

Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:105todo

docker push epylkkan/training_kubernetes_devops:105todo
