"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[90656],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"TRG 2.04 - Leading product repository"},i=void 0,l={unversionedId:"release/trg-2/trg-2-4",id:"release/trg-2/trg-2-4",title:"TRG 2.04 - Leading product repository",description:"| Status | Created     | Post-History    |",source:"@site/docs/release/trg-2/trg-2-4.md",sourceDirName:"release/trg-2",slug:"/release/trg-2/trg-2-4",permalink:"/docs/release/trg-2/trg-2-4",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-2/trg-2-4.md",tags:[],version:"current",frontMatter:{title:"TRG 2.04 - Leading product repository"},sidebar:"docs",previous:{title:"TRG 2.03 - Repo structure",permalink:"/docs/release/trg-2/trg-2-3"},next:{title:"TRG 2.05 - Repository metafile",permalink:"/docs/release/trg-2/trg-2-5"}},p={},s=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Leading product repository rules",id:"leading-product-repository-rules",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"07-Mar-2023"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"10-Jan-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"We have multiply stakeholders for a repository: System team, release management, test management, external people who are trying it out, want to contribute or need to set it up.\nThey need to be able to understand complicated product structures in an intuitive way to have an easier task of diving into a product."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Each product ",(0,a.kt)("strong",{parentName:"p"},"must")," have a leading product repository that can point the users to all the parts/components/charts/releases of that product.\nThis can be achieved by having a single repository for a product or creating references to the other repositories."),(0,a.kt)("p",null,"A good example when a product has a separate repository for frontend and backend. Then the product team ",(0,a.kt)("strong",{parentName:"p"},"must")," have a leading repository where they reference the components/repositories of the product:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"productname: leading product repository",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"README.md: contains the urls for the backend and frontend applications"),(0,a.kt)("li",{parentName:"ul"},"contains the release of the product"),(0,a.kt)("li",{parentName:"ul"},"contains the ",(0,a.kt)("a",{parentName:"li",href:"../trg-5/trg-5-08"},"product helm chart")))),(0,a.kt)("li",{parentName:"ul"},"productname-A-frontend: the repository for the frontend application"),(0,a.kt)("li",{parentName:"ul"},"productname-A-backend: the repository for the backend application")),(0,a.kt)("h2",{id:"leading-product-repository-rules"},"Leading product repository rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The name of the leading product repository ",(0,a.kt)("strong",{parentName:"li"},"must")," contain the product name without prefix or suffix"),(0,a.kt)("li",{parentName:"ul"},"It ",(0,a.kt)("strong",{parentName:"li"},"should")," contain the release (whether it is source code, helm chart or any other artifact)"),(0,a.kt)("li",{parentName:"ul"},"README.md contains the description of what the product does"),(0,a.kt)("li",{parentName:"ul"},"README.md contains the references/urls to the product's other repositories if they exist"),(0,a.kt)("li",{parentName:"ul"},"It ",(0,a.kt)("strong",{parentName:"li"},"should")," contain the ",(0,a.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-08"},"TRG 5.08 - Product Helm Chart"))))}u.isMDXComponent=!0}}]);