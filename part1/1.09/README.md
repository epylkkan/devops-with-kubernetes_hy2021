<h2> Initialize cluster  </h2> 

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2


<h2>  Go first to directory  ~/1.01 ... </h2> 

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml

<h2> ...and then to ~/1.09 </h2> 

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml

kubectl apply -f manifests/ingress.yaml


<h2>  test </h2> 

http://localhost:8081/pingpong

http://localhost:8081/random 


<h2>  see, the pics in the directory ~/1.09 </h2> 


