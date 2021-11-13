<h2> General </h2>

See, the picture.


<h4> Commands </h4>

kubectl create namespace todo

kubectl create namespace random-pong



<h4>Added to deployment.yaml-files + re-deployed</h4>


<h6>todo</h6>

./todo/frontend/manifests/deployment.yaml

metadata:

  name: todo-front

  namespace: todo


./todo/backend/manifests/deployment.yaml

metadata:

  name: todo-back

  namespace: todo


metadata:

  name: pingpong

  namespace: todo


<h6>pingpong and random</h6>

./random-pong/reader_revised/manifests/deployment.yaml

metadata:

  name: random

  namespace: random-pong


./random-pong/pingpong_revised/manifests/deployment.yaml

metadata:

  name: pingpong

  namespace: random-pong