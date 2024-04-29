"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[82956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={id:"Operation View",title:"Operation View",description:"Certificate Management Kit",sidebar_position:3},o=void 0,l={unversionedId:"kits/Certificate Management Kit/Operation View",id:"version-24.03/kits/Certificate Management Kit/Operation View",title:"Operation View",description:"Certificate Management Kit",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Certificate Management Kit/page-software-operation-view.md",sourceDirName:"kits/Certificate Management Kit",slug:"/kits/Certificate Management Kit/Operation View",permalink:"/docs-kits/kits/Certificate Management Kit/Operation View",draft:!1,tags:[],version:"24.03",sidebarPosition:3,frontMatter:{id:"Operation View",title:"Operation View",description:"Certificate Management Kit",sidebar_position:3},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/kits/Certificate Management Kit/Adoption View"},next:{title:"Development View",permalink:"/docs-kits/category/development-view-1"}},s={},p=[{value:"Certificate Management KIT",id:"certificate-management-kit",level:3},{value:"Local Deployment",id:"local-deployment",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Check out the code",id:"step-2-check-out-the-code",level:3},{value:"Step 3: Installing the services",id:"step-3-installing-the-services",level:3},{value:"1. Start the cluster",id:"1-start-the-cluster",level:4},{value:"1.1 Get the status of the deployment",id:"11-get-the-status-of-the-deployment",level:5},{value:"2. Forward ports",id:"2-forward-ports",level:4},{value:"Deploy Service",id:"deploy-service",level:2},{value:"BPDM Certificate Management",id:"bpdm-certificate-management",level:3},{value:"Image Tag",id:"image-tag",level:4},{value:"Profiles",id:"profiles",level:4},{value:"Ingress",id:"ingress",level:4},{value:"Certificate Management Configuration",id:"certificate-management-configuration",level:4},{value:"Stopping the cluster",id:"stopping-the-cluster",level:2},{value:"How to debug an application in the cluster",id:"how-to-debug-an-application-in-the-cluster",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Business partner kit banner",src:a(90696).Z,width:"282",height:"265"})),(0,i.kt)("h3",{id:"certificate-management-kit"},"Certificate Management KIT"),(0,i.kt)("h2",{id:"local-deployment"},"Local Deployment"),(0,i.kt)("p",null,"BPDM Certificate Management here BPDM is an acronym for business partner data management.\nThis project provides core services for querying and adding certificate data for business partner base information in the Eclipse Tractus-X landscape. BPDM Certificate Management project is SpringBoot Kotlin software project managed by Maven and it is microservice. This section contains information on how to configure and run the BPDM certificate management application."),(0,i.kt)("p",null,"This local deployment is an easy installation with helm. This setup is built to run on a kubernetes cluster."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Step"),(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"arrow down",src:a(98810).Z,width:"54",height:"72"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"#step-1-prerequisites"},"Install the prerequisites"))),(0,i.kt)("td",{parentName:"tr",align:null},"Install all necessary tools for this setup")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"vector",src:a(66445).Z,width:"59",height:"59"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"#step-2-check-out-the-code"},"Check out the Code"))),(0,i.kt)("td",{parentName:"tr",align:null},"Get all necessary code to deploy the service and dependencies to the kuberneetes cluster")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"check",src:a(56793).Z,width:"47",height:"47"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"#step-3-installing-the-services"},"Installing the Service"))),(0,i.kt)("td",{parentName:"tr",align:null},"Start cluster and interact with Services")))),(0,i.kt)("h3",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," is installed and the Docker deamon is running with at least 8GB of memory")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm")," is installed")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," is installed and running.",(0,i.kt)("br",{parentName:"p"}),"\n","You can also use any other local Kubernetes cluster, this guide is just using Minikube as a reference."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --memory 8192 --cpus 2 \n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Optional"),": enable minikube metrics"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"minikube addons enable metrics-server\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," is installed")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.compose.com/articles/postgresql-tips-installing-the-postgresql-client/"},"psql")," client is installed"))),(0,i.kt)("h3",{id:"step-2-check-out-the-code"},"Step 2: Check out the code"),(0,i.kt)("p",null,"Check out the project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm-certificate-management"},"BPDM-Certificate-Management")," or download a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm-certificate-management/releases"},"released version")," of the project."),(0,i.kt)("h3",{id:"step-3-installing-the-services"},"Step 3: Installing the services"),(0,i.kt)("h4",{id:"1-start-the-cluster"},"1. Start the cluster"),(0,i.kt)("p",null,"To deploy the services on kubernetes using helm charts, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd local/bpdm-certificate-management\nhelm install your_namespace ./charts/bpdm-certificate-management/\n")),(0,i.kt)("p",null,"If postgresql is not available in your cluster then you might get following error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Error: INSTALLATION FAILED: An error occurred while checking for chart dependencies. You may need to run `helm dependency build` to fetch missing dependencies: found in Chart.yaml, but missing in charts/ directory: opensearch, postgresql\n")),(0,i.kt)("p",null,"You can resolve it by adding dependency to the build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm dependency build ./charts/bpdm-certificate-management/\n")),(0,i.kt)("p",null,"This can take up to ",(0,i.kt)("strong",{parentName:"p"},"5 minutes"),"."),(0,i.kt)("p",null,"When the deployment is finished you can expect that 1 deployment can be seen in the minikube dashboard:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bpdm-certificate-management")),(0,i.kt)("h5",{id:"11-get-the-status-of-the-deployment"},"1.1 Get the status of the deployment"),(0,i.kt)("p",null,"The minikube dashboard will give you feedback on how the status of the deployment currently is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  minikube dashboard \n")),(0,i.kt)("p",null,"Make sure you select the namespace ",(0,i.kt)("strong",{parentName:"p"},"your_namespace"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"expected status",src:a(39573).Z,width:"1616",height:"358"})),(0,i.kt)("h4",{id:"2-forward-ports"},"2. Forward ports"),(0,i.kt)("p",null,"When the deployment has been finished, you can for port forwarding using k9s. Also, if k9s tool is not installed the you can use ",(0,i.kt)("a",{parentName:"p",href:"https://k9scli.io/topics/install/"},"installer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<shift+f>\n")),(0,i.kt)("p",null,"or port forwarding can also be achived kubernetes command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward <pod-name> <locahost-port>:<pod-port>\n")),(0,i.kt)("p",null,"After that you can access the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bpdm-certificate-management:")," ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8083"},"http://localhost:8086"))),(0,i.kt)("h2",{id:"deploy-service"},"Deploy Service"),(0,i.kt)("h3",{id:"bpdm-certificate-management"},"BPDM Certificate Management"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#step-1-prerequisites"},"prerequisites")," for running this service is same."),(0,i.kt)("p",null,"In an existing Kubernetes cluster the application can be deployed with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm install release_name ./charts/bpdm-certificate-management --namespace your_namespace -f /path/to/my_release-values.yaml\n")),(0,i.kt)("p",null,"This will install a new release of the BPDM Certificate Management in the given namespace.\nOn default values this release deploys the latest image tagged as ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," from the repository's GitHub Container Registry.\nThe application is run on default profile."),(0,i.kt)("p",null,"By giving your own values file you can configure the Helm deployment of the BPDM Certificate Management freely.\nIn the following sections you can have a look at the most important configuration options."),(0,i.kt)("h4",{id:"image-tag"},"Image Tag"),(0,i.kt)("p",null,"Per default, the Helm deployment references the latest Certificate Management release tagged as ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),".\nThis tag follows the latest version of the Certificate Management and contains the newest features and bug fixes.\nYou might want to switch to a more stable release tag instead for your deployment.\nIn your values file you can overwrite the default tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\n  tag: "latest"\n')),(0,i.kt)("h4",{id:"profiles"},"Profiles"),(0,i.kt)("p",null,"You can also activate Spring profiles in which the Certificate Management should be run.\nIn case you want to run the Certificate Management with authorization enabled you can write the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"springProfiles:\n  - auth\n")),(0,i.kt)("h4",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,"You can specify your own ingress configuration for the Helm deployment to make the Certificate Management available over Ingress.\nNote that you need to have the appropriate Ingress controller installed in your cluster first.\nFor example, consider a Kubernetes cluster with an ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress-Nginx")," installed.\nAn Ingress configuration for the Certificate Management deployment could look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n   enabled: true\n   hosts:\n      - host: business-partners-certificate.your-domain.net\n        paths:\n           - path: "/test-certificate"\n             pathType: Prefix\n   tls:\n      - secretName: tls-secret\n        hosts:\n           - business-partners-certificate.your-domain.net\n')),(0,i.kt)("h4",{id:"certificate-management-configuration"},"Certificate Management Configuration"),(0,i.kt)("p",null,"For the default deployment you already need to overwrite the configuration properties of the application.\nThe Helm deployment comes with the ability to configure the Certificate Management application directly over the values file.\nThis way you are able to overwrite any configuration property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"application-auth.yaml"),".\nConsider that you would need to turn on ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," profile first before overwriting any property in the corresponding properties file could take\neffect."),(0,i.kt)("p",null,'Entries in the "applicationConfig" value are written directly to a configMap that is part of the Helm deployment.\nThis can be a problem if you want to overwrite configuration properties with secrets.\nTherefore, you can specify secret configuration values in a different Helm value ',(0,i.kt)("inlineCode",{parentName:"p"},"applicationSecrets"),".\nContent of this value is written in a Kubernetes secret instead.\nIf you want to specify a keycloak client secret for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationSecrets:\n  bpdm:\n    security:\n      credentials:\n        secret: your_client_secret\n")),(0,i.kt)("h2",{id:"stopping-the-cluster"},"Stopping the cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"stop minikube"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"minikube stop\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"stop the processes used for port forwarding and minikube dashboard")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"shut down the Docker daemon"))),(0,i.kt)("h2",{id:"how-to-debug-an-application-in-the-cluster"},"How to debug an application in the cluster"),(0,i.kt)("p",null,"If you want to connect your IDE to one of the applications in the cluster, you need to enable debug mode for that application by overriding the entrypoint (using the ",(0,i.kt)("inlineCode",{parentName:"p"},"command")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," fields in the deployment resource). How to do this depends on the application. For the Bpdm certificate managment, as it is based on Spring Boot and Kotlin, you would need to add this flag to the start command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000\n")),(0,i.kt)("p",null,"Then you can forward the port 8000 for the Bpdm certificate managment deployment to your host machine and connect your IDE to that port."))}u.isMDXComponent=!0},90696:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Certificate_Kit_Icon-e96be4d8d6498fba924371e11a4d8910.png"},39573:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Certificate_Minikube_dashboard-f228251d98cc25af953c10bcb8d69347.png"},98810:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABICAYAAAC9bQZsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD4SURBVHgB7dPRDQIhEIThOSuyBEuxE9dOtkNLWNFooonR8w64HTJ/AjySL7ATKhUlVGgqoUI7DJpgbAnGlmBsCcaWYGwJxpZgbAnGlmBsCcaWYGwJxpZgbAnGlmBsCcaWYGwJxpZgbAnGlmBsDQubIsLKecJYne/7DRfjZG/EGANnH98vuHH29XMGJ85mTV5w4eahyHCGJUVunGFNkRNnqFHkwhlqFjlwhhbFtjhDy8oFx+ifoUedcYaedcI5tqgxzrFljXCODFXGOTJVCefI2EqcI3MLcQ6G/sQ5mJqJczD2A+dgrgAOZV2GQj0rkP0LzjFSD5yjU1cRwNvKUW2LGwAAAABJRU5ErkJggg=="},56793:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgBzZmBcZtAEEWXVCA3kJHTgCmBuIEkFcSTBuJJA1IaiF2BSAVRB5LSgJMKhOwCZFfg9f7Rgc/oQNxxd/BmdrABwf/LcndaJdQTZp7IJpW4kMjU3xMVJTsVTxIbib9JkvynoRDRmUQu8chuFOrzU4qFEr1mv+RBTcjF0wCiw5uQC37neGwlUuqLXGSishGbZ4kZuaKE/+PhcDMwAuEl9gbkAzc8HmDguqvwGY+PPRte4qQmfCqbgoZhR4cZuGmkKWRW/qDveFc7YUnDgIR9lLiUaFo2nEty58YjcuCKh2Grnjg0IM64ebBA+UxM4guOTyVc03HKwLwuPOP4HAk3GDAt+qrslzV/RXFBjV/KC7hrOI6B5Be9XVaXYN/n6j92X9a60JhxpSXh00uSVXlyzJLxIRzscT7KJqM4tJYKhMtmQd1KGMuXFOIvyB5MJl/oMLF0wafwkhQftF2A4f1I1U2nfHqI9VUqdW5sX9ZKuHbzNgNFIOFgQRYnHwk/YaAIKBwsbcTn1ELNQGjhYGUjHsw6GFhHEA6WLmuauQS54FE4WGCofLKTQMi+tQF2Gw7beMBFf7MbnQ2w34wDfDX8hMy79gw7PQH2n/GS+7IT1odWAxym77PVb9B3VWk0wOEaVgv9JnPuT2WA/de4Duo908VP2Q8wEFI42Joe8Zr9ELLThqx/LTUnmng8ijWNmze9m6pvIzs3srml8YIX6qe+o94xw5fbO4lzGh+5JPibviOpn6HKZ2U6NiDGb2L1dl9ZPj9oPDxSe5vkGPYz9vfF2B22MfDMw+AuXDNwPYABPz+qKQNTdcEY/GFTJ9iDCZTRnsOA5GQUEj48hVzdzEc53bE25UeDDz9I4DHvlZGuZrAEv+2baW8TkRKC1uGZxHt6naV3anuv/t5YjdktvAC2Xa6gg5881QAAAABJRU5ErkJggg=="},66445:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7dmNacJQFIbh75YO0BG6QbtBcYNuIE7SdIK2EzSbdAU36BnBDeI5akDB3B+I4PlyXriIJAQfck1uNA3D8A/gGfxJUuyAhfSABRVY1lqxOziuBbvRsYJjcC12k1LqdWzhGFyDPUDHN57BJewFdMwrOIe9Ch3zCJ7CGmCLQt7AU9gnHX+6knxFIU/g3DSmA5cuUFTgmlsPDbh2UUEBblkuuge3PggY+LdmxxP4G3dU6y8VomOlECntqIdd60uPO6rlzAocQ61arMA51Hqs2EcwP/QHt/k+v+v4mtpYwgpuc0Z3NcdsTT9D9uqfm8YCgql7Xu6phwpq5Z561ijkCWrlpnGnmI+pjd6gVunWcxXsEWrV3HoMbMu/T3szE/RNj9Nh/l5yG1uWix2OV+geTot/8VgLLGuBZS2wrAWWtcCyFljWAstaYFkLLGuBZS2wrAWWtcVhBctI9okuo48bmQW2AAAAAElFTkSuQmCC"}}]);