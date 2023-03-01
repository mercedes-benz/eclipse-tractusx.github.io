---
id: Operation View
title: Operation View
description: 'Data Chain Kit'
sidebar_position: 2
---

![Datachain kit banner](../../../static/img/doc-datachain_header-minified.png)

## Local Deployment

Run a working demo scenario of the Item Relationship Service with a mocked Catena-X network to retrieve data chains:

* Item Relationship Service
* Eclipse Dataspace Connector for accessing data
* Eclipse Dataspace Connector for data provisioning
* a Submodelserver and Testdata for provisioning test digital twins
* Authentication Mock
* Registry Service to register test digital twins
* Item Relationship Service Debugging View to visualize the Results of the Item Relationship Service

This emulates the communication over EDC, retrieving assets via a registry and building one continous data chain with data from different companies.

This local deployment is an easy installation with helm. This setup is built to run on a kuberneetes cluster.

| Step                                                                             | Action                              | Description                                                             |
|----------------------------------------------------------------------------------|-------------------------------------|-------------------------------------------------------------------------|
|![arrow down](../../../static/img/arrow_down.png)| **[Install the prerequisites](#step-1-prerequisites)**| Install all necessary tools for this setup                                     |
|![vector](../../../static/img/vector.png)    | **[Check out the Code](#step-2-check-out-the-code)**               | Get all necessary code to deploy the service and dependencies to the kuberneetes cluster|
|![check](../../../static/img/check.png)     | **[Installing the Service](#step-3-installing-the-services)**|Start cluster and interact with the Item Relationship Service|

### Step 1: Prerequisites

1. [Docker](https://docs.docker.com/get-docker/) is installed and docker deamon is running with minimum 8GB ram storage
2. [helm](https://helm.sh/docs/intro/install/) is installed

3. [Minikube](https://kubernetes.io/de/docs/tasks/tools/install-minikube/#minikube-installieren) is installed and running

   ```bash
   minikube start --memory 8192 --cpus 2 
   ```

   _Optional_: enable minikube metrics

   ```bash
   minikube addons enable metrics-server
   ```

4. kubectl is installed
5. Python3 is installed
6. Ruby is installed
7. psql client is installed
8. **CURRENTLY STILL NECESSARY:** Fill the digital twin secret in file:

   ```bash
   ./template/digital-twin-registry-docker-secret.yaml
   ```

   Get the **digital twin secret**  via issue in the following [Digital Twin Repository](https://github.com/eclipse-tractusx/sldt-digital-twin-registry) request the image secret for the private digital twin registry image.

### Step 2: Check out the code

Check out the project [Item Relationship Service](https://github.com/eclipse-tractusx/item-relationship-service) or download a [released version](https://github.com/eclipse-tractusx/item-relationship-service/releases) of the Item Relationship Service

> currently in the [Pull Request](https://github.com/catenax-ng/tx-item-relationship-service/pull/143)

### Step 3: Installing the services

#### 1. Start the cluster

To deploy the services on kubernetes, run

```bash
./start.sh true true
```

The script takes 2 parameters as input:

* INSTALL_EDC: default is set to true. If this is passed as true, will delete all helm charts related to EDC (vault, DAPS, EDC consumer and EDC provider) and install them again.
* INSTALL_IRS: default is set to true. If this is passed as true, will delete all helm charts related to IRS (dependencies, IRS backend and IRS frontend) and install them again.

This can take up to **20 minutes**.

When the deployment is finished you can expect that 13 deployments can be seen in the minikube dashboard:

* irs-frontend
* irs
* irs-minio
* keycloak (mocked Service)
* digital-twin-registry
* semantic-hub (mocked Service)
* irs-provider-backend
* edc-provider-control-plane
* edc-provider-data-plane
* edc-consumer-control-plane
* edc-consumer-data-plane
* edc-vault-agent-injector

Also in total 17 Pods are up and running.

**INFO**: sometimes you will get the following message during deployment, which can be ignored. This is caused when a service takes longer than 90 seconds to be available.

```bash
-e Waiting for the deployments to be available
error: timed out waiting for the condition on deployments/irs-frontend
```

##### 1.1 Get the Status of the deployment

The minikube dashboard will give you feedback on how the status of the deployment currently is:

```bash
  minikube dashboard 
```

make sure you select the namespace irs

![expected status](../../../static/img/minikube-dashboard-overview.png)

#### 2. Forwarding Ports

When the deployment has been finished please use the script to forward the ports:

```bash
./forwardingPorts.sh
```

After that you can access the:

* **Digital Twin Registry:** [http://localhost:10200](http://localhost:10200)
* **IRS Frontend:** [http://localhost:3000](http://localhost:3000)

#### 3. Prepare test data

> Only if Step 2 has been applied and the ports are forwarded.

To provision Testdate to the provider EDC and register the testdata to the digital twin registry use the following script:

```bash
./upload-testdata.sh
```

If you like, you can remove the test data with:

```bash
./deleteIRSTestData.sh
```

### Step4: access Debuggin View

open [http://localhost:3000/](http://localhost:3000/) and you should see the Item Relationship Service login screen. **Just press Login**

![irs-login](../../../static/img/irs-login.png)

## Testing the Item Relationship Service

You can use several different approaches to interact with the IRS. One is through the **IRS API** and another way is through the **IRS API Frontend**.

### Valid Global Asset Ids for Testing

use these globalAssetId's for testing
|globalAssetId|type|
|---|---|
|urn:uuid:d3c0bf85-d44f-47c5-990d-fec8a36065c6|vehicle combustion engine|
|urn:uuid:61a22b1c-5725-41fb-8e1e-dccaaba83838|vehicle combustion engine|
|urn:uuid:513d7be8-e7e4-49f4-a22b-8cd31317e454|vehicle combustion engine|

### Valid test requests for testing

use these snippets for testing purposes.

```json
{
  "aspects": [
    "AssemblyPartRelationship",
    "SerialPartTypization"
  ],
  "bomLifecycle": "asBuilt",
  "collectAspects": true,
  "direction": "downward",
  "depth": 10,
  "globalAssetId": "urn:uuid:d387fa8e-603c-42bd-98c3-4d87fef8d2bb"
}
````

```json
{
  "aspects": [
    "SerialPartTypization"
  ],
  "depth": 1,
  "globalAssetId": "urn:uuid:d387fa8e-603c-42bd-98c3-4d87fef8d2bb"
}
```

<!-- #### Get global asset id

1. Forward ports of digital twin database: ``` kubectl port-forward svc/digital-twin-registry-database 5432:5432 ```
2. Connect to the database: ``` export PGPASSWORD=digital-twin-registry-pass; psql -h localhost -p 5432 -d digital-twin-registry -U digital-twin-registry-user ```
3. Execute query to get the global asset id: ``` select id_external from shell where id_short = 'VehicleCombustion' limit 1; ``` -->

### Testing the IRS API Endpoints

#### Precondition

* Visual Studio extension: [REST Client by Huachao Mao](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
* All Installation-Steps have been successfully conducted
* A valid Global Asset Id

#### Test-steps

1. to interact with the API Endpoints, you need a valid token. You can generate an access token with using the ``` ./test/keycloack-service.rest ```.

2. **copy & past** the to valid token into line 8 of ``` ./test/irs-backend-service.rest ```
3. **copy & past** a valid globalAssetId into the request body
4. **execute the request** ```./test/irs-backend-service.rest```

### Testing with the IRS frontend

#### Precondition

* All Installation-Steps have been successfully conducted

#### Test-steps

1. **open** [http://localhost:3000](http://localhost:3000) and click 'Login'
2. **copy & past** a valid globalAssetId into the request body
   ![irs-new-job](../../../static/img/irs-new-job.png)
3. **click** 'Build Data Chain' to start a new IRS job
4. **click** visualization to see result of the job
   ![irs-job-list](../../../static/img/irs-job-list.png)

### Step 2: Verify Results

The following example shows a visual overview of all retrieved data assets and digital twins of a data chain.
![irs-login](../../../static/img/irs-vis-overview.png)
_Item Relationship Service visualization overview_

With the following snippet all clickable objects will be explained:

* **Digital Twin:** the box itself is clickable and will open an overlay to show more information on this object.
* **Aspect:** the green button is clickable and represents an Aspect or Submodel of the twin.
* **Relationship Aspect:** the line between Digital Twins is clickable and will give detailed Information about the relationship between the twins.

![irs-login](../../../static/img/irs-vis-clickable.png)
_Item Relationship Service clicable objects_

## Stopping the Cluster

1. Stop minikube

    ```bash
    minikube stop
    ```

2. stop the processes used for port forwarding and minikube dashboard
3. shut down the docker deamon