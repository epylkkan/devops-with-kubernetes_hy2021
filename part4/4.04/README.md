<h2>GENERAL</h2>

See, the picture 

deployment.yaml replaced by rollout.yaml in frontend and backend

analysistemplate.yaml added


Cluster initialization:

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create namespace todo

kubectl get nodes --output wide


kubectl create namespace prometheus

helm install prometheus-community/kube-prometheus-stack --generate-name --namespace prometheus

kubectl get po -n prometheus

k -n prometheus port-forward prometheus-kube-prometheus-stack-1629-prometheus-0 9090:9090


kubectl -n prometheus port-forward kube-prometheus-stack-1628017570-grafana-85699c56d4-pg8dn 9090:3000

http://localhost:3000 -> admin / prom-operator


kubectl create namespace argo-rollouts

kubectl apply -n argo-rollouts -f https://raw.githubusercontent.com/argoproj/argo-rollouts/stable/manifests/install.yaml



<h2>COMMANDS</h2>

<h4>./4.02/postgre</h4>

kubectl apply -k .


<h4>./4.04/backend</h4>

kubectl apply -k .


<h4>./4.04/frontend</h4>

kubectl apply -k .


<h4>./4.02/wiki</h4>

kubectl apply -k .


<h4>./4.04</h4>

kubectl apply -f manifests/ingress.yaml -n todo

kubectl apply -f manifests/analysistemplate.yaml -n todo

