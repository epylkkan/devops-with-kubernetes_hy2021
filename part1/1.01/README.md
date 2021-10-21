<h3> Original exercise 1.01 </h3>

Dockerfile was Dockerfile_for_Exercise_1.01

$ docker build . -t epylkkan/training_kubernetes_devops:101

$ docker push  epylkkan/training_kubernetes_devops:101

$ kubectl create deployment randomstring --image=epylkkan/training_kubernetes_devops:101

$ kubectl get deployments

$ kubectl get pods

$ kubectl logs -f randomstring-74fb5b8998-c6cbr

#See, the picture devops_kubernetes_original_1.01


<h3> 1.01 with the exercise 1.09 </h3>

Dockerfile was Dockerfile_with_Exercise_1.09

the following directories were added

./manifests

./views

./public

...as well as rendering in index.js when going to URL ~/random

See, the comments in the code. 

Commands: 

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml

...ingress-file can be found from the exercise 1.09

#See, the picture devops_kubernetes_1.01_with_exercise_1.09