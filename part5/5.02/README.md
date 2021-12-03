<h2>GENERAL</h2>


yaml-files injected by linkerd:

./postgre/manifests/postgre-statefulset.yaml -> postgre-statefulset-linkerd.yaml

./backend/manifests/deployment.yaml -> deployment-linkerd.yaml

./frontend/manifests/deployment.yaml -> deployment-linkerd.yaml

./wiki/manifests/deployment.yaml -> deployment-linkerd.yaml

./wiki/manifests/cronjob.yaml -> cronjob-linkerd.yaml

./nats/manifests/nats-statefulset.yaml -> nats-statefulset-linkerd.yaml

Otherwise, as in the exercise 4.06.  

See, the picture


<h2>COMMANDS</h2>

<h4>./postgre/manifests</h4>

echo "$(cat postgre-statefulset.yaml | linkerd inject -)" > postgre-stafulset-linkerd.yaml
-> statefulset "postgresql-db" injected


<h4>./backend/manifests</h4>
echo "$(cat deployment.yaml | linkerd inject -)" > deployment-linkerd.yaml
-> deployment "todo-back" injected


<h4>./frontend/manifests</h4>
echo "$(cat deployment.yaml | linkerd inject -)" > deployment-linkerd.yaml
-> deployment "todo-front" injected


<h4>./wiki/manifests</h4>
echo "$(cat deployment.yaml | linkerd inject -)" > deployment-linkerd.yaml
-> deployment "todo-wiki" injected

echo "$(cat cronjob.yaml | linkerd inject -)" > cronjob-linkerd.yaml
-> cronjob "wiki-cronjob" injected


<h4>./nats/manifests</h4>
echo "$(cat nats-statefulset.yaml | linkerd inject -)" > nats-statefulset-linkerd.yaml
-> statefulset "nats" injected


<h2>LINKERD INSTALLATION STEPS</h2>

https://linkerd.io/2.11/getting-started/

curl -sL run.linkerd.io/install | sh

(export)
PATH=$PATH:/home/epylkkan/.linkerd2/bin

linkerd check --pre

linkerd install | kubectl apply -f -

linkerd check

linkerd viz install | kubectl apply -f -

curl -sL buoyant.cloud/install | sh # get the installer # install the on-cluster metrics stack

linkerd buoyant install | kubectl apply -f - # connect to the hosted metrics stack

linkerd check

linkerd viz dashboard & 

linkerd buoyant dashboard &
