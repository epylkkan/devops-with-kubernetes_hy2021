Create: 
$ docker build . -t epylkkan/training_kubernetes_devops:110creator
$ docker push epylkkan/training_kubernetes_devops:110creator

Read: 
$ docker build . -t epylkkan/training_kubernetes_devops:110reader
$ docker push epylkkan/training_kubernetes_devops:110reader

Commands: 
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml
kubectl apply -f manifests/ingress.yaml

#See, the picture devops_kubernetes_1.10.png

Entering container:
$ kubectl exec -it random-vol-76b5588895-4f6td -c random-reader