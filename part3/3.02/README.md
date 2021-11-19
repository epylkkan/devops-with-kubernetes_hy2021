<h2>GENERAL</h2>

See, the pictures for the end user view


Cluster initialization:

See, 3.01 README.md

kubectl get nodes --output wide


<h2>COMMANDS</h2>

<h4>./3.01/postgre</h4>

See, 3.01 README.md


<h4>./3.01/backend</h4>

See, 3.01 README.md


<h4>./3.02/pingpong/frontend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

#kubectl apply -f manifests/service.yaml -n random-pong

kubectl apply -f manifests/nodeport.yaml -n random-pong


<h4>./3.02/random</h4>

kubectl apply -f manifests/node-configmap -n random-pong

kubectl apply -f manifests/deployment.yaml -n random-pong

kubectl apply -f manifests/nodeport.yaml -n random-pong


<h4>./3.02:</h4>

kubectl apply -f manifests/ingress.yaml -n random-pong



<h4>Copy-paste helpers to minimize a need for typing:</h4>

docker build . -t epylkkan/training_kubernetes_devops:302-15reader

docker push epylkkan/training_kubernetes_devops:302-15reader

docker build . -t epylkkan/training_kubernetes_devops:302-1frontend

docker push epylkkan/training_kubernetes_devops:302-1frontend


k exec -it random-66d68cc57f-7qs49 sh -n random-pong





