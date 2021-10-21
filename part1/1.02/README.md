$ docker build . -t epylkkan/training_kubernetes_devops:102

$ docker push  epylkkan/training_kubernetes_devops:102

$ kubectl create deployment todo --image=epylkkan/training_kubernetes_devops:102

$ kubectl get deployments

$ kubectl get pods

$ kubectl logs -f todo-5d67c66596-5f9vn

#See, the picture

