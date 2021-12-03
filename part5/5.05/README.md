<h2>GENERAL</h2>

k3d cluster delete

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2 --k3s-server-arg '--no-deploy=traefik'


<h2>COMMANDS</h2>

kubectl create namespace random-pong



<h4>./5.05/postgre</h4>

echo -n 'pong' | base64 results to 'cG9uZw=='   # db password is 'pong'

kubectl apply -f manifests/dbpw.yaml -n random-pong

kubectl apply -f manifests/persistentvolume.yaml -n random-pong

kubectl apply -f manifests/postgre-statefulset.yaml -n random-pong

kubectl apply -f manifests/postgresql-service.yaml -n random-pong

kubectl apply -f manifests/postgresql-configmap.yaml -n random-pong



<h4>./5.05/frontend</h4>

kubectl apply -f manifests/knative-pingpong-svc.yaml -n random-pong

Check: curl -H "Host: pong-svc.random-pong.example.com" http://localhost:8081



<h4>Knative installation</h4> 

Sources: 

https://knative.dev/docs/admin/install/

https://knative.dev/docs/getting-started/



<h4>Knative serving</h4>

kubectl apply -f https://github.com/knative/serving/releases/download/v0.26.0/serving-crds.yaml

kubectl apply -f https://github.com/knative/serving/releases/download/v0.26.0/serving-core.yaml



<h4>Contour</h4>

kubectl apply -f https://github.com/knative/net-contour/releases/download/v0.26.0/contour.yaml

kubectl apply -f https://github.com/knative/net-contour/releases/download/v0.26.0/net-contour.yaml

kubectl patch configmap/config-network   --namespace knative-serving   --type merge   --patch '{"data":{"ingress.class":"contour.ingress.networking.knative.dev"}}'

Check: kubectl get pods -n knative-serving



<h4>Helpers</h4>

docker build . -t epylkkan/training_kubernetes_devops:505pingpong-front

docker push epylkkan/training_kubernetes_devops:505pingpong-front
