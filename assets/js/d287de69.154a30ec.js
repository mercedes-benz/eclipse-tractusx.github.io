"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[94800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o="Changelog",i={unversionedId:"kits/tractusx-edc/CHANGELOG",id:"version-23.09/kits/tractusx-edc/CHANGELOG",title:"Changelog",description:"Connector kit banner",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/CHANGELOG.md",sourceDirName:"kits/tractusx-edc",slug:"/kits/tractusx-edc/CHANGELOG",permalink:"/docs-kits/23.09/kits/tractusx-edc/CHANGELOG",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"Connector KIT",permalink:"/docs-kits/23.09/category/connector-kit"},next:{title:"Adoption View",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/adoption-view/Adoption View"}},u={},c=[{value:"Connector KIT",id:"connector-kit",level:2},{value:"0.5.0 - 2023-08-09",id:"050---2023-08-09",level:2},{value:"0.4.0 - 2023-07-07",id:"040---2023-07-07",level:2},{value:"0.3.0 - 2023-05-16",id:"030---2023-05-16",level:2},{value:"0.2.0 - 2023-04-28",id:"020---2023-04-28",level:2},{value:"0.1.0 - 2023-03-01",id:"010---2023-03-01",level:2}],d={toc:c};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector kit banner",src:n(63080).Z,width:"286",height:"244"})),(0,a.kt)("h2",{id:"connector-kit"},"Connector KIT"),(0,a.kt)("p",null,"All notable changes to this Kit will be documented in this file."),(0,a.kt)("h2",{id:"050---2023-08-09"},"[0.5.0]"," - 2023-08-09"),(0,a.kt)("h3",null,"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"preparation for release Tractus-X EDC 0.5.0")),(0,a.kt)("h2",{id:"040---2023-07-07"},"[0.4.0]"," - 2023-07-07"),(0,a.kt)("h3",null,"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"documentation to deal with the new managament-api"),(0,a.kt)("li",{parentName:"ul"},"documentation to deal with the new SSI"),(0,a.kt)("li",{parentName:"ul"},"tractusx-edc open api documentation"),(0,a.kt)("li",{parentName:"ul"},"legacy connector documentation which works with daps"),(0,a.kt)("li",{parentName:"ul"},"migration guide to edc version 0.5.x")),(0,a.kt)("h3",null,"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm charts reference now to the edc version 0.5.0-rc5"),(0,a.kt)("li",{parentName:"ul"},"restructuring of the openAPI documentation"),(0,a.kt)("li",{parentName:"ul"},"postmancollection contains the new management-api")),(0,a.kt)("h3",null,"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chart documentation for tractusx-connector-app"),(0,a.kt)("li",{parentName:"ul"},"unused files like charts, values.yaml"),(0,a.kt)("li",{parentName:"ul"},"decision records")),(0,a.kt)("h2",{id:"030---2023-05-16"},"[0.3.0]"," - 2023-05-16"),(0,a.kt)("h3",null,"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chart documentation for tractusx-connector-azure-vault")),(0,a.kt)("h3",null,"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm chart documentation -> added needed properties and information about self-signed certificates for testing")),(0,a.kt)("h3",null,"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chart documentation for tractusx-connector-app"),(0,a.kt)("li",{parentName:"ul"},"unused files like charts, values.yaml")),(0,a.kt)("h2",{id:"020---2023-04-28"},"[0.2.0]"," - 2023-04-28"),(0,a.kt)("h3",null,"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"documentation of the control-plane-adapter extension"),(0,a.kt)("li",{parentName:"ul"},"openAPI documentation of the control-plane-adapter extension"),(0,a.kt)("li",{parentName:"ul"},"documentation of the observability-api-customization"),(0,a.kt)("li",{parentName:"ul"},"migration documentation"),(0,a.kt)("li",{parentName:"ul"},"postman collection")),(0,a.kt)("h3",null,"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm chart version for the edc components is now 0.3.3"),(0,a.kt)("li",{parentName:"ul"},"switched the whole documentation structure from product-edc to tractusx-edc"),(0,a.kt)("li",{parentName:"ul"},"switched build tool from maven to gradle"),(0,a.kt)("li",{parentName:"ul"},"restructured the whole documentation structure and order")),(0,a.kt)("h3",null,"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"./.")),(0,a.kt)("h2",{id:"010---2023-03-01"},"[0.1.0]"," - 2023-03-01"),(0,a.kt)("h3",null,"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"documentation of the management-api"),(0,a.kt)("li",{parentName:"ul"},"documentation of adoption view"),(0,a.kt)("li",{parentName:"ul"},"documentation of software development view")),(0,a.kt)("h3",null,"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"./.")),(0,a.kt)("h3",null,"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"./.")))}s.isMDXComponent=!0},63080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ConnectorKitIcon-44f7fb56f8da1b27337f8c23f28067d2.png"}}]);