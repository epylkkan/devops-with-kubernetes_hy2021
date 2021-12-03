
<h4>FILE 1: devops_kubernetes_5.03a.png</h4>

kubectl apply -k github.com/fluxcd/flagger/kustomize/linkerd

kubectl -n linkerd rollout status deploy/flagger

kubectl create ns test && kubectl apply -f https://run.linkerd.io/flagger.yml

kubectl -n test rollout status deploy podinfo

kubectl -n test port-forward svc/frontend 8080



<h4>FILE 2: devops_kubernetes_5.03b.png</h4>

localhost:8080


<h4>FILE 3: devops_kubernetes_5.03c.png</h4>

cat <<EOF | kubectl apply -f -
apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: podinfo
  namespace: test
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: podinfo
  service:
    port: 9898
  analysis:
    interval: 10s
    threshold: 5
    stepWeight: 10
    maxWeight: 100
    metrics:
    - name: request-success-rate
      thresholdRange:
        min: 99
      interval: 1m
    - name: request-duration
      thresholdRange:
        max: 500
      interval: 1m
EOF



<h4>FILE 4: kubectl_get-ev_watch.txt</h4>

kubectl -n test get ev --watch > kubectl_get-ev_watch.txt



<h4>FILE 5: devops_kubernetes_5.03d.png</h4>

kubectl -n test set image deployment/podinfo \
  podinfod=quay.io/stefanprodan/podinfo:1.7.1



<h4>FILE 6: devops_kubernetes_5.03e.png</h4>

watch kubectl -n test get canary



<h4>FILE 7: devops_kubernetes_5.03f.png</h4>

kubectl -n test get trafficsplit podinfo -o yaml



if not done

"
curl -sL run.linkerd.io/install | sh

export PATH=$PATH:/home/epylkkan/.linkerd2/bin

linkerd check

linkerd viz install | kubectl apply -f -

"



<h4>FILE 8: devops_kubernetes_5.03g.png and devops_kubernetes_5.03i.png</h4>

linkerd viz dashboard



<h4>FILE 9: devops_kubernetes_5.03h.png</h4>

kubectl delete -k github.com/fluxcd/flagger/kustomize/linkerd && \

kubectl delete ns test
