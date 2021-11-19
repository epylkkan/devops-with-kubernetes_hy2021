<h2>GENERAL</h2>


GitHub Actions need to be manually run (on workflow_dispatch:) in order to deploy new backend / frontend / wiki in the namespace "todo"

$ kubectl create namespace todo (new namespace is created in advance)

See, the pictures



<h4>Changes compared to 3.03</h4>

Added to todo-front-gcr-namespace_todo.yaml, todo-back-gcr-namespace_todo.yaml, todo-wiki-gcr-namespace_todo.yaml in .github/workflows:

1)
  env: 
    NAMESPACE: todo


2) Changed

   - name: Create image names
      run: |-
        echo "IMAGE_WITH_TAG=gcr.io/${{ secrets.GKE_PROJECT }}/$IMAGE:$NAMESPACE-$GITHUB_SHA" >> $GITHUB_ENV

2) kubectl config set-context --current --namespace=$NAMESPACE

3) ./kustomize edit set namespace $NAMESPACE


.github/workflows: directories in the yaml-files were  "cd ./master/part3/3.04/..."



<h4>Database and loadbalancer</h4>

echo -n 'todo' | base64 results to 'dG9kbw=='   # db password is 'todo'

./3.04/postgre:  kubectl apply -k .

./3.04:  kubectl apply -f manifests/loadbalancer.yaml