"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[54925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Control Plane",l={unversionedId:"kits/tractusx-edc/edc-controlplane/README",id:"version-23.09/kits/tractusx-edc/edc-controlplane/README",title:"Control Plane",description:"The Eclipse Dataspace Connector consists of a Control Plan and a Data Plane Application.",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/edc-controlplane/README.md",sourceDirName:"kits/tractusx-edc/edc-controlplane",slug:"/kits/tractusx-edc/edc-controlplane/",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-controlplane/",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"validate",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/validate"},next:{title:"EDC Control-Plane Base Module",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-controlplane/edc-controlplane-base/"}},s={},c=[{value:"Security",id:"security",level:2},{value:"Confidential Settings",id:"confidential-settings",level:3},{value:"Known Control Plane Issues",id:"known-control-plane-issues",level:2},{value:"Persistence",id:"persistence",level:3},{value:"Other",id:"other",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"control-plane"},"Control Plane"),(0,r.kt)("p",null,"The Eclipse Dataspace Connector consists of a ",(0,r.kt)("strong",{parentName:"p"},"Control Plan")," and a ",(0,r.kt)("strong",{parentName:"p"},"Data Plane")," Application.\nWhile the ",(0,r.kt)("strong",{parentName:"p"},"Data Plane")," handles the actual Data Transfer, the ",(0,r.kt)("strong",{parentName:"p"},"Control Plane")," is responsible for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resource Management (e.g. Assets, Policies & Contract Definitions CRUD)"),(0,r.kt)("li",{parentName:"ul"},"Contract Offering & Contract Negotiation"),(0,r.kt)("li",{parentName:"ul"},"Data Transfer Coordination / Management")),(0,r.kt)("p",null,"The only API that is protected by some kind of security mechanism is the Data Management API. At the time of writing this is done by a simple API key.\nThe key value must be configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"edc.api.auth.key"),". All requests to the Data Management API must have ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-Key")," header with the key value."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET <URL> --header "X-Api-Key: <edc.api.auth.key>"\n')),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("h3",{id:"confidential-settings"},"Confidential Settings"),(0,r.kt)("p",null,"Please be aware that there are several confidential settings, that should not be part of the actual EDC configuration file."),(0,r.kt)("p",null,"Some of these confidential settings are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vault credentials"),(0,r.kt)("li",{parentName:"ul"},"Data Management API key"),(0,r.kt)("li",{parentName:"ul"},"Database credentials")),(0,r.kt)("p",null,"As it is possible to configure EDC settings via environment variables, one way to do it would be via Kubernetes Secrets. For other deployment scenarios than Kubernetes equivalent measures should be taken."),(0,r.kt)("h2",{id:"known-control-plane-issues"},"Known Control Plane Issues"),(0,r.kt)("p",null,"Please have a look at the open issues in the open source repository. The list below might not be maintained well and\nonly contains the most important issues.\nEDC GitHub Repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/issues"},"https://github.com/eclipse-edc/Connector/issues")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note")," that some of these issues might already be fixed on the EDC main branch, but are not part of the specific\nEDC commit the Tractus-X-EDC uses."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"persistence"},"Persistence"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ContractDefinition-AssetSelector of InMemory Connector selects 50 Asset max.(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/issues/1779"},"issue"),")")),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Non-IDS-Transformable-ContractDefinition causes connector to be unable to send out self-descriptions/catalogs(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/issues/1265"},"issue"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workaround:")," Delete non-transformable ContractDefinition or Policy.")))))}p.isMDXComponent=!0}}]);