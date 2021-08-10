1) 
k3d cluster delete
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

2) Go first to directory  ~/1.01 ...
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml

...and then to ~/1.09
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml
kubectl apply -f manifests/ingress.yaml

3) test 

http://localhost:8081/pingpong
http://localhost:8081/random 

4) see, the pics in the directory ~/1.09


