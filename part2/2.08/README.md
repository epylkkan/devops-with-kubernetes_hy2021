<h2>GENERAL</h2>

- Pre-populated SQLite used in the earlier exercises was replaced by PostgreSQL (+ some minor improvements)

- Data is retained as long as long as the cluster is up i.e. pods can get re-created but cluster not.

- See, the picture


Cluster initialization:

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace todo


<h2>COMMANDS</h2>

<h4>./2.08/postgre</h4>

echo -n 'todo' | base64 results to 'dG9kbw=='   # db password is 'todo' which you can read from here :-)

kubectl apply -f manifests/todopw.yaml -n todo

kubectl apply -f manifests/persistentvolume.yaml -n todo

kubectl apply -f manifests/postgre-statefulset.yaml -n todo

kubectl apply -f manifests/postgresql-service.yaml -n todo

kubectl apply -f manifests/postgresql-configmap.yaml -n todo


<h4>./2.08/backend</h4>

kubectl apply -f manifests/deployment.yaml -n todo

kubectl apply -f manifests/service.yaml -n todo


<h4>./2.08/frontend</h4>

kubectl apply -f manifests/deployment.yaml -n todo

kubectl apply -f manifests/service.yaml -n todo


<h4>./2.08</h4>

kubectl apply -f manifests/ingress.yaml -n todo



<h4>Copy-paste helpers to minimize a need for typing</h4>

docker build . -t epylkkan/training_kubernetes_devops:208-2backend

docker push epylkkan/training_kubernetes_devops:208-2backend

docker build . -t epylkkan/training_kubernetes_devops:208frontend

docker push epylkkan/training_kubernetes_devops:208frontend




