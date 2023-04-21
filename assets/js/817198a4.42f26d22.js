"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"TRG 5.09 - Helm test PRERELEASE"},l=void 0,s={unversionedId:"release/trg-5/trg-5-09",id:"release/trg-5/trg-5-09",title:"TRG 5.09 - Helm test PRERELEASE",description:"Proposed release date 19th of May 2023",source:"@site/docs/release/trg-5/trg-5-09.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-09",permalink:"/docs/release/trg-5/trg-5-09",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-09.md",tags:[],version:"current",frontMatter:{title:"TRG 5.09 - Helm test PRERELEASE"},sidebar:"developer",previous:{title:"TRG 5.08 - Product Helm Chart",permalink:"/docs/release/trg-5/trg-5-08"},next:{title:"TRG 5.10 - Kubernetes versions PRERELEASE",permalink:"/docs/release/trg-5/trg-5-10"}},o={},u=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Proposed release date: "mandatory after": 19th of May 2023')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Created"),(0,r.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prerelease"),(0,r.kt)("td",{parentName:"tr",align:null},"7-Mar-2023"),(0,r.kt)("td",{parentName:"tr",align:null},"Moved out of draft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Draft"),(0,r.kt)("td",{parentName:"tr",align:null},"23-Feb-2023"),(0,r.kt)("td",{parentName:"tr",align:null},"Draft release")))),(0,r.kt)("h2",{id:"why"},"Why"),(0,r.kt)("p",null,"Helm charts are defined as the sane default for cloud native applications in Eclipse Tractus-X. To make sure that the aligned quality verification of applications are as close as possible to the production setup,\nit is critical that the test setup is doing what it would do on a production setup. Therefore, Helm test will provide this mechanism together with kind and allows us to run e2e verifications directly on GitHub Actions."),(0,r.kt)("p",null,"GitHub Actions simplifies the open source infrastructure requirements as otherwise a test k8s cluster would be required, which might not be available in the long run."),(0,r.kt)("p",null,"This is the base for future e2e tests."),(0,r.kt)("p",null,"This also allows to move the responsibility of verifing the helm chart functionality from the system team back to the development team."),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Helm charts and their dependend images (the application to test) need to be validated by installing them and verifing that they are running successfully."),(0,r.kt)("p",null,"Helm test is the technical solution helm provides to verify that a helm chart works as expected. It basically installs the helm chart (which installs and runs the application) and then allows an additional\ncontainer to run. This test container can do everything, especially calling an api, executing tests etc."),(0,r.kt)("p",null,"This needs to be running in a Github Action in the repository which contains the Helm Chart, which gets released."),(0,r.kt)("p",null,"Example Github Action Workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build all necessary container images / pull the container image under test"),(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind")," setup (kind creates a kubernetes cluster through container images, github action supports this which allows you to create a kubernetes cluster inside the github action run)"),(0,r.kt)("li",{parentName:"ul"},"Make the necessary container images available through the kind setup (see github action example, it uses the local kind registry)"),(0,r.kt)("li",{parentName:"ul"},"Prepare and execute helm test"),(0,r.kt)("li",{parentName:"ul"},"Fail on a failing helm test")),(0,r.kt)("p",null,"Technical requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Github action exist which builds or uses the helm chart which gets released"),(0,r.kt)("li",{parentName:"ul"},"The Github action can be triggered manually through Github WebUI ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow"},"manually running a workflow")),(0,r.kt)("li",{parentName:"ul"},"Helm test verifies that the application is up and running",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example verifications:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Frontend: Frontend returns valid page"),(0,r.kt)("li",{parentName:"ul"},"API: API is reachable and returns valid response (access denied / test user can login)")))))),(0,r.kt)("p",null,"Example .github/workflows/helm-test.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Lint and Test Charts\n\non:\n    pull_request:\n    workflow_dispatch:\n\njobs:\n    lint-test:\n        runs-on: ubuntu-latest\n        steps:\n            - name: Checkout\n              uses: actions/checkout@v3\n              with:\n                fetch-depth: 0\n\n            - name: Kubernetes KinD Cluster\n              uses: container-tools/kind-action@v1\n        \n            - name: Build image\n              uses: docker/build-push-action@v3\n              with:\n                context: .\n                push: true\n                tags: kind-registry:5000/app-dashboard:testing\n        \n            - name: Set up Helm\n              uses: azure/setup-helm@v3\n              with:\n                version: v3.9.3\n        \n            - uses: actions/setup-python@v4\n              with:\n                python-version: '3.9'\n                check-latest: true\n        \n            - name: Set up chart-testing\n              uses: helm/chart-testing-action@v2.3.1\n        \n            - name: Run chart-testing (list-changed)\n              id: list-changed\n              run: |\n                changed=$(ct list-changed --target-branch ${{ github.event.repository.default_branch }})\n                if [[ -n \"$changed\" ]]; then\n                   echo \"::set-output name=changed::true\"\n                fi\n            - name: Run chart-testing (lint)\n              run: ct lint --validate-maintainers=false --target-branch ${{ github.event.repository.default_branch }}\n        \n            - name: Run chart-testing (install)\n              run: ct install --charts charts/app-dashboard\n              if: steps.list-changed.outputs.changed == 'true'\n")))}p.isMDXComponent=!0}}]);