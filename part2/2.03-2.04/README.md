<h2>GENERAL</h2>

See, the picture.


<h2>COMMANDS</h2>

kubectl create namespace todo

kubectl create namespace random-pong



<h4>Added to deployment.yaml-files + re-deployed</h4>


<h4>todo</h4>

./todo/frontend/manifests/deployment.yaml

metadata:

  name: todo-front

  namespace: todo


./todo/backend/manifests/deployment.yaml

metadata:

  name: todo-back

  namespace: todo



<h4>pingpong and random</h4>

./random-pong/reader_revised/manifests/deployment.yaml

metadata:

  name: random

  namespace: random-pong


./random-pong/pingpong_revised/manifests/deployment.yaml

metadata:

  name: pingpong

  namespace: random-pong