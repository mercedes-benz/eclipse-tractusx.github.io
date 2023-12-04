"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[37874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||l;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),l=r(53438),i=r(39960),o=r(13919),c=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:l,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:l},r," ",l),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function g(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:a?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,l.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const i=(0,l.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},55102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(52991);const i={title:"TRG 0 - Changelog & Drafts"},o=void 0,c={unversionedId:"release/trg-0/trg-0",id:"release/trg-0/trg-0",title:"TRG 0 - Changelog & Drafts",description:"Index of Tractus-X Release Guidelines (TRGs)",source:"@site/docs/release/trg-0/trg-0.md",sourceDirName:"release/trg-0",slug:"/release/trg-0/",permalink:"/docs/release/trg-0/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-0/trg-0.md",tags:[],version:"current",frontMatter:{title:"TRG 0 - Changelog & Drafts"},sidebar:"docs",previous:{title:"Release Guidelines",permalink:"/docs/release"},next:{title:"TRG 0 - (WIP) Template",permalink:"/docs/release/trg-0/trg-0-template"}},s={},d=[{value:"Index of Tractus-X Release Guidelines (TRGs)",id:"index-of-tractus-x-release-guidelines-trgs",level:2},{value:"Index by Category",id:"index-by-category",level:2}],u={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"index-of-tractus-x-release-guidelines-trgs"},"Index of Tractus-X Release Guidelines (TRGs)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"09-Oct-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"TRG 4.06 add base image for hashicorp vault")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"29-Sep-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"TRG 4.02 / 06 add Alpine Linux to list of container base images")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20-Sept-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Adjust PostgreSQL version in TRG 5.07")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"24-Aug-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Move updated TRG 7.01 to active")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20-Jul-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"TRG 7.07 / 08 for OSS documentation improved, section added for documentation under CC-BY-4.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6-June-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Extend helm test example workflow (5.09) for k8s versions (5.10) and upgradeability (5.11)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2-June-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Add recommendation for implementing legal notice in frontend apps (7.06)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9-May-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Make DockerHub registry mandatory (4.05), Describe mandatory notice for Docker images (4.06)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8-May-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Move TRG 7.00-7.07 out of Draft to Final")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7-Mar-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Remove author column, reorder post-history latest first, cleanup formatting across all TRGs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7-Mar-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Move TRG 2.05, 5.09, 5.10 and 5.11 out of Draft to Prerelease")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"23-Feb-2023"),(0,a.kt)("td",{parentName:"tr",align:null},'Add draft "Helm Action"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"13-Sept-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial contribution")))),(0,a.kt)("h2",{id:"index-by-category"},"Index by Category"),(0,a.kt)(l.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);