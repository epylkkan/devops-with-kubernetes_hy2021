<h2>General: </h2>

See, the pictures


<h2>Cluster initialization:</h2>

k3d cluster delete

k3d cluster create -p 8081:80@loadbalancer --agents 2



<h4>./reader_revised</h4>

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml



<h4>./pingpong_revised</h4>

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml


<h4>
./ </h4>
kubectl apply -f manifests/ingress.yaml 


Copy-paste helpers to minimize a need for typing:

docker build . -t epylkkan/training_kubernetes_devops:21randompingpong

docker push epylkkan/training_kubernetes_devops:21randompingpong