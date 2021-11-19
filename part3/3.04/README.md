<h2>GENERAL</h2>

See, the pictures


<h4>Changes compared to 3.03</h4>

Added to Deploy-section in todo-front-gcr.yaml, todo-back-gcr.yaml, todo-wiki-gcr.yaml in .github/workflows:

1) kubectl create namespace ${GITHUB_REF#refs/heads/} || true

2) kubectl config set-context --current --namespace=${GITHUB_REF#refs/heads/}

3) ./kustomize edit set namespace ${GITHUB_REF#refs/heads/} 

.github/workflows: directories in the yaml-files were  "cd ./master/part3/3.04/..."

4) ./postgre/manifests:  k apply -f todopw_main.yaml    (creates the secret with the pw in the namespace main)

