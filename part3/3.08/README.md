
General:  See, the picture about persistentvolumeclaim

-----------

Changes to 3.08 compared to 3.04

Added files
 ./3.08/frontend/manifests/horizontalpodautoscaler.yaml
 ./3.08/backend/manifests/horizontalpodautoscaler.yaml
 ./3.08/wiki/manifests/horizontalpodautoscaler.yaml

horizontalpodautoscaler.yaml were addded to the respective kustomization.yaml entries


Added to
./3.08/frontend/manifests/deployment.yaml
          resources:
            limits:
              cpu: "150m"
              memory: "100Mi"

./3.08/backend/manifests/deployment.yaml
          resources:
            limits:
              cpu: "150m"
              memory: "100Mi

              
./3.08/wiki/manifests/deployment.yaml
          resources:
            limits:
              cpu: "150m"
              memory: "100Mi"


No changes to files in 
./3.08/postgre/manifests/*.yaml as there was already
        resources:
          requests:
            storage: 25Gi


-----------

Sequence to reconfigure + start horizontapodautoscaler to an already running application

./3.08/frontend:  kubectl apply -k .
./3.08/backend:  kubectl apply -k .
./3.08/wiki:  kubectl apply -k .
