General:
See, the picture.

Commands: 
kubectl create namespace todo
kubectl create namespace random-pong


Added to deployment.yaml-files + re-deployed:

1) todo

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

2) pingpong and random

./random-pong/reader_revised/manifests/deployment.yaml
metadata:
  name: random
  namespace: random-pong

./random-pong/pingpong_revised/manifests/deployment.yaml
metadata:
  name: pingpong
  namespace: random-pong




