<h2>GENERAL</h2>

See, the pictures


Cluster initialization:

See, the exercise 3.01

$ kubectl create namespace todo

$ kubectl get nodes --output wide

$ gcloud container clusters create $GKE_CLUSTER --project=$GKE_PROJECT --zone=$GKE_ZONE

$ gcloud services enable containerregistry.googleapis.com container.googleapis.com

$ gcloud iam service-accounts create $SA_NAME

$ gcloud iam service-accounts list

$ gcloud projects add-iam-policy-binding dwk-kubernetes --member=serviceAccount:kube-sa@dwk-kubernetes.iam.gserviceaccount.com --role=roles/container.admin --role=roles/storage.admin  --role=roles/container.clusterViewer  --role=roles/container.serviceAgent



<h4>GitHub Actions (push)</h4>

1) todo-front-gcr: uses ./3.03/frontend:  kubectl apply -k .

2) todo-back-gcr:  uses ./3.03/backend:  kubectl apply -k .

3) todo-wiki-gcr:  uses ./3.03/wiki:  kubectl apply -k .


Directories in the respective yaml-files were  "cd ./master/part3/3.03/..."


<h4>Database and loadbalancer are triggered by GuitHub Actions</h4>

echo -n 'todo' | base64 results to 'dG9kbw=='   # db password is 'todo'

./3.03/postgre:  kubectl apply -k .

./3.03:  kubectl apply -f manifests/loadbalancer.yaml -n todo


<h4>Added in the exercise 3.04 to the Deploy section</h4>

1) kubectl create namespace ${GITHUB_REF#refs/heads/} || true

2) kubectl config set-context --current --namespace=${GITHUB_REF#refs/heads/}

3) ./kustomize edit set namespace ${GITHUB_REF#refs/heads/} 


<h4>Copy-paste helpers to minimize a need for typing</h4>

$ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL

$ export GKE_SA_KEY=$(cat key.json | base64)
