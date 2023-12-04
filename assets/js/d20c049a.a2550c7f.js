"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[26275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>x});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(r),y=n,x=s["".concat(c,".").concat(y)]||s[y]||u[y]||o;return r?a.createElement(x,i(i({ref:t},d),{},{components:r})):a.createElement(x,i({ref:t},d))}));function x(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},25173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},i="DataPlane Proxy Provider Core",p={unversionedId:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/README",id:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/README",title:"DataPlane Proxy Provider Core",description:"This extension provide the base service and configuration for the DataPlane Provider Proxy.",source:"@site/docs-kits/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core",slug:"/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"DataPlane Proxy Provider API",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/"},next:{title:"Data Plane Selector Configuration Extension",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/dataplane-selector-configuration/"}},c={},l=[{value:"Configuration",id:"configuration",level:2}],d={toc:l};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dataplane-proxy-provider-core"},"DataPlane Proxy Provider Core"),(0,n.kt)("p",null,"This extension provide the base service and configuration for the DataPlane Provider Proxy."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tx.dpf.proxy.gateway.alias.proxied.path"),(0,n.kt)("td",{parentName:"tr",align:null},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tx.dpf.proxy.gateway.alias.proxied.edr.forward"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tx.dpf.proxy.gateway.alias.proxied.edr.headerKey"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"alias")," is the first part of the subpath after ",(0,n.kt)("inlineCode",{parentName:"p"},"gateway")," mentioned ",(0,n.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/"},"here")))}s.isMDXComponent=!0}}]);