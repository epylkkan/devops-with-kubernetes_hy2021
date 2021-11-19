<h2>GENERAL</h2>

Resource limits added to all the deployment.yaml-files

horizontalpodautoscalere.yaml-files were added as described below under the Commands-section

See, the picture for the end user view


<h2>COMMANDS</h2>

(note, postgre and pingpong backend are the same as in the exercise 3.01)


<h4>./3.01/postgre</h4>

See, 3.01 README.md


<h4>./3.09/pingpong/backend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong  

kubectl apply -f manifests/service.yaml -n random-pong (same as in 3.02)

kubectl apply -f manifests/horizontalpodautoscaler.yaml -n random-pong


<h4>./3.09/pingpong/frontend</h4>

kubectl apply -f manifests/deployment.yaml -n random-pong

#kubectl apply -f manifests/service.yaml -n random-pong (same as in 3.02)

kubectl apply -f manifests/nodeport.yaml -n random-pong (same as in 3.02)

kubectl apply -f manifests/horizontalpodautoscaler.yaml -n random-pong


<h4>./3.09/random</h4>

kubectl apply -f manifests/node-configmap -n random-pong (same as in 3.02)

kubectl apply -f manifests/deployment.yaml -n random-pong  

kubectl apply -f manifests/nodeport.yaml -n random-pong (same as in 3.02)

kubectl apply -f manifests/horizontalpodautoscaler.yaml -n random-pong


<h4>./3.09</h4>

kubectl apply -f manifests/ingress.yaml -n random-pong (same as in 3.02)

