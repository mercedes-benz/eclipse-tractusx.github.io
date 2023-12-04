"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"TRG 5.08 - Product Helm Chart"},o=void 0,i={unversionedId:"release/trg-5/trg-5-08",id:"release/trg-5/trg-5-08",title:"TRG 5.08 - Product Helm Chart",description:"| Status | Created     | Post-History |",source:"@site/docs/release/trg-5/trg-5-08.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-08",permalink:"/docs/release/trg-5/trg-5-08",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-08.md",tags:[],version:"current",frontMatter:{title:"TRG 5.08 - Product Helm Chart"},sidebar:"docs",previous:{title:"TRG 5.07 - Chart Dependencies",permalink:"/docs/release/trg-5/trg-5-07"},next:{title:"TRG 5.09 - Helm test",permalink:"/docs/release/trg-5/trg-5-09"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Product Helm Chart rules",id:"product-helm-chart-rules",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"07-Mar-2023"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"10-Jan-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Having a single source for Helm chart makes it easier to test and deploy the product and reduces the complexity of installing backend/frontend/utility applications separately."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,'A "Product Helm Chart" is a released helm chart that contains all the components of a product ',(0,a.kt)("strong",{parentName:"p"},"ready to deploy"),". This can either be achieved by ",(0,a.kt)("strong",{parentName:"p"},"creating a single Helm chart")," for the product or by ",(0,a.kt)("strong",{parentName:"p"},"combining the Helm charts")," of the different components into a single chart using dependencies."),(0,a.kt)("h2",{id:"product-helm-chart-rules"},"Product Helm Chart rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name of the Chart ",(0,a.kt)("strong",{parentName:"li"},"should")," be just the ",(0,a.kt)("inlineCode",{parentName:"li"},"product-name")," without prefix or suffix (similar to the ",(0,a.kt)("a",{parentName:"li",href:"../trg-2/trg-2-4"},"leading product repository"),")"),(0,a.kt)("li",{parentName:"ul"},"values file ",(0,a.kt)("strong",{parentName:"li"},"should")," contain all available variables (even from subcharts) with default values and comments about what they do"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_install/#helm-install"},"helm install")," command should successfully install the chart to any supported Kubernetes version cluster (without overwriting default values)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_test/"},"helm test")," runs without errors (see ",(0,a.kt)("a",{parentName:"li",href:"trg-5-09"},"TRG 5.09 - Helm test"),")"),(0,a.kt)("li",{parentName:"ul"},"create a single helm chart for the whole product or combine charts into a single one using ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_dependency/#helm-dependency"},"dependencies")," feature")))}u.isMDXComponent=!0}}]);