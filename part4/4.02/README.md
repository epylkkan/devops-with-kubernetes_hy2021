<h2>GENERAL</h2> 

See, the picture (backend pod before and after creating a secret with pw)

Added 

- healthz-routine to server.js (backend) and front.js (frontend)

- Readiness- and Liveness-probe definitions  to the respective deployment.yaml -files


Cluster initialization:

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace todo

kubectl get nodes --output wide


<h2>COMMANDS</h2>

echo -n 'todo' | base64 results to 'dG9kbw=='   # db password is 'todo'

echo -n 'falsepw' | base64 results to 'ZmFsc2Vwdw=='   # false password is 'falsepw'


<h4> Scenario 1</h4>

create first: k apply -f ./postgre/manifests/todopw.yaml

after that delete it and then 

create: k apply -f ./backend/manifests/falsepw.yaml and then

deploy backend 

See, the picture devops_kubernetes_backend-pod_before_correct_password_to_access_db_4.02


delete falsepw and then 

re-create todopw and then 

re-deploy backend 

See, the picture devops_kubernetes_backend-pod_after_correct_password_to_access_db_4.02


<h4> Scenario 2</h4>

Deploy everything else except for backend

See, the picture devops_kubernetes_frontend_before_launching_backend


Deploy backend

See, the picture devops_kubernetes_frontend_after_launching_backend


<h4>./4.02/postgre</h4>

kubectl apply -k .


<h4>./4.02/backend</h4>

kubectl apply -k .


<h4>./4.02/frontend</h4>

kubectl apply -k .


<h4>./4.02/wiki</h4>

kubectl apply -k .


<h4>./4.02</h4>

kubectl apply -f manifests/ingress.yaml -n todo



<h4>Copy-paste helpers to minimize a need for typing</h4>

docker build . -t epylkkan/training_kubernetes_devops:402todofront

docker push epylkkan/training_kubernetes_devops:402todofront

docker build . -t epylkkan/training_kubernetes_devops:402-1todoback

docker push epylkkan/training_kubernetes_devops:402-1todoback

docker build . -t epylkkan/training_kubernetes_devops:402wiki

docker push epylkkan/training_kubernetes_devops:402wiki
