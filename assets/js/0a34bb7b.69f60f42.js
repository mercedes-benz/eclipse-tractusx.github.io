"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"TRG 5.07 - Chart Dependencies"},i=void 0,o={unversionedId:"release/trg-5/trg-5-07",id:"release/trg-5/trg-5-07",title:"TRG 5.07 - Chart Dependencies",description:"| Status | Created     | Post-History |",source:"@site/docs/release/trg-5/trg-5-07.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-07",permalink:"/docs/release/trg-5/trg-5-07",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-07.md",tags:[],version:"current",frontMatter:{title:"TRG 5.07 - Chart Dependencies"},sidebar:"developer",previous:{title:"TRG 5.06 - Application Configuration",permalink:"/docs/release/trg-5/trg-5-06"},next:{title:"TRG 5.08 - Product Helm Chart",permalink:"/docs/release/trg-5/trg-5-08"}},p={},s=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Helm dependency example",id:"helm-dependency-example",level:2},{value:"Installing a chart with dependencies",id:"installing-a-chart-with-dependencies",level:2},{value:"Aligning dependency versions",id:"aligning-dependency-versions",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"07-Mar-2023"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"02-Dec-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Dependencies like a database (postgresql) are used across Eclipse Tractus-X. It's critical to align those common dependencies when those dependencies are later replaced with hosted versions, like the database. Single instance of these dependencies that can be shared among all products in the future."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Helm chart dependencies are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file. They are used to provide additional software (e.g. database) that is required for running the main application."),(0,a.kt)("h2",{id:"helm-dependency-example"},"Helm dependency example"),(0,a.kt)("p",null,"An example dependency definition in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  - condition: postgresql.enabled\n    alias: product-name-postgresql\n    name: postgresql\n    repository: https://charts.bitnami.com/bitnami\n    version: 11.x.x\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Usage of condition, alias and version properties are optional but highly recommended"),(0,a.kt)("li",{parentName:"ul"},"Add a unique alias as name to your dependency that corresponds with your product name. This can be referenced in the ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," file"),(0,a.kt)("li",{parentName:"ul"},"With the condition, dependencies can be disabled/enabled on demand")),(0,a.kt)("h2",{id:"installing-a-chart-with-dependencies"},"Installing a chart with dependencies"),(0,a.kt)("p",null,"The following commands have to run before installing the chart if it has dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add [REPO_URL] #for example: https://charts.bitnami.com/bitnami\nhelm dependency update\n")),(0,a.kt)("p",null,"Then the install can be done with ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install [NAME] [CHART] [flags]")),(0,a.kt)("h2",{id:"aligning-dependency-versions"},"Aligning dependency versions"),(0,a.kt)("p",null,"The following table describes the required version of dependencies for all products."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Repo URL"),(0,a.kt)("th",{parentName:"tr",align:null},"Chart version"),(0,a.kt)("th",{parentName:"tr",align:null},"App version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://charts.bitnami.com/bitnami"},"Bitnami")),(0,a.kt)("td",{parentName:"tr",align:null},"11.x.x"),(0,a.kt)("td",{parentName:"tr",align:null},"14.5.0")))))}c.isMDXComponent=!0}}]);