<h2>GENERAL</h2>

See, the pictures


<h4>Changes compared to 3.03</h4>

Added to Deploy-section in todo-front-gcr.yaml, todo-back-gcr.yaml, todo-wiki-gcr.yaml in .github/workflows:

1) kubectl create namespace ${GITHUB_REF#refs/heads/} || true

2) kubectl config set-context --current --namespace=${GITHUB_REF#refs/heads/}

3) ./kustomize edit set namespace ${GITHUB_REF#refs/heads/} 

.github/workflows: directories in the yaml-files were  "cd ./master/part3/3.04/..."


<h4>Need to run separately for 3.04</h4>

echo -n 'todo' | base64 results to 'dG9kbw=='   # db password is 'todo'

./3.04/postgre:  kubectl apply -k .

./3.04:   kubectl apply -f manifests/loadbalancer.yaml

