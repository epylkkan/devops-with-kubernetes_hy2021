
<h2>GENERAL</h2>

See, the picture about persistentvolumeclaim


<h4>Changes to 3.08 compared to 3.04</h4>

New yaml-files

 ./3.08/frontend/manifests/horizontalpodautoscaler.yaml

 ./3.08/backend/manifests/horizontalpodautoscaler.yaml

 ./3.08/wiki/manifests/horizontalpodautoscaler.yaml


horizontalpodautoscaler.yaml were addded to the respective kustomization.yaml entries


<h4>Added to</h4>

<h6>./3.08/frontend/manifests/deployment.yaml</h6>

          resources:

            limits:

              cpu: "150m"

              memory: "100Mi"


<h6>./3.08/backend/manifests/deployment.yaml</h6>

          resources:

            limits:

              cpu: "150m"

              memory: "100Mi

              
<h6>./3.08/wiki/manifests/deployment.yaml</h6>

          resources:

            limits:

              cpu: "150m"

              memory: "100Mi"



<h4>No changes to files in </h4>

<h6>./3.08/postgre/manifests/*.yaml as there was already</h6>

        resources:

          requests:

            storage: 25Gi




<h4>Sequence to reconfigure + start horizontapodautoscaler to an already running application</h4>

./3.08/frontend:  kubectl apply -k .

./3.08/backend:  kubectl apply -k .

./3.08/wiki:  kubectl apply -k .
