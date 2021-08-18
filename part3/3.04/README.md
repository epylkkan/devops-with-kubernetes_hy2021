General:  See, the pictures

--------------------

Changes compared to 3.03

Added to Deploy-section in todo-front-gcr.yaml, todo-back-gcr.yaml, todo-wiki-gcr.yaml in .github/workflows:

1) kubectl create namespace ${GITHUB_REF#refs/heads/} || true
2) kubectl config set-context --current --namespace=${GITHUB_REF#refs/heads/}
3) ./kustomize edit set namespace ${GITHUB_REF#refs/heads/} 

.github/workflows: directories in the yaml-files were  "cd ./master/part3/3.04/..."

--------------------

Need to run separately for 3.04:

kubectl create secret generic todopw --from-file=/usr/src/app/todopw -n main

./3.04/postgre:  kubectl apply -k .

./3.04:   kubectl apply -f manifests/loadbalancer.yaml

