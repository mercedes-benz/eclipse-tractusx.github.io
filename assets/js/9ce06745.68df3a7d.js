"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6557],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54577:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Data Plane Selector Configuration Extension",l={unversionedId:"kits/product-edc/edc-extensions/dataplane-selector-configuration/README",id:"kits/product-edc/edc-extensions/dataplane-selector-configuration/README",title:"Data Plane Selector Configuration Extension",description:"This control-plane extension makes it possible configure one or more Data Plane Instances. During a transfer the control",source:"@site/docs/kits/product-edc/edc-extensions/dataplane-selector-configuration/README.md",sourceDirName:"kits/product-edc/edc-extensions/dataplane-selector-configuration",slug:"/kits/product-edc/edc-extensions/dataplane-selector-configuration/",permalink:"/docs/kits/product-edc/edc-extensions/dataplane-selector-configuration/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/edc-extensions/dataplane-selector-configuration/README.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Data Encryption Extension",permalink:"/docs/kits/product-edc/edc-extensions/data-encryption/"},next:{title:"[HashiCorp Vault](https://www.vaultproject.io/) Extension",permalink:"/docs/kits/product-edc/edc-extensions/hashicorp-vault/"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Helm Example Configuration using environment variables",id:"helm-example-configuration-using-environment-variables",level:3}],s={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-plane-selector-configuration-extension"},"Data Plane Selector Configuration Extension"),(0,r.kt)("p",null,"This control-plane extension makes it possible configure one or more Data Plane Instances. During a transfer the control\nplane will look for an instance with matching capabilities to transfer data."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Per data plane instance the following settings must be configured. As ",(0,r.kt)("inlineCode",{parentName:"p"},"<data-plane-id>")," any unique string is valid."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.dataplane.selector.",(0,r.kt)("inlineCode",{parentName:"td"},"<data-plane-id>"),".url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL to connect to the Data Plane Instance."),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://plato-edc-dataplane:9999/api/dataplane/control"},"http://plato-edc-dataplane:9999/api/dataplane/control"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.dataplane.selector.",(0,r.kt)("inlineCode",{parentName:"td"},"<data-plane-id>"),".sourcetypes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source Types in a comma separated List."),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"HttpData")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.dataplane.selector.",(0,r.kt)("inlineCode",{parentName:"td"},"<data-plane-id>"),".destinationtypes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination Types in a comma separated List."),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"HttpProxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.dataplane.selector.",(0,r.kt)("inlineCode",{parentName:"td"},"<data-plane-id>"),".properties"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional properties of the Data Plane Instance."),(0,r.kt)("td",{parentName:"tr",align:null},"(X)"),(0,r.kt)("td",{parentName:"tr",align:null},'{ "publicApiUrl": "http://plato-edc-dataplane:8185/api/public" }')))),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"publicApiUrl")," is mandatory for Data Plane Instances with destination type ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpProxy"),"."),(0,r.kt)("h3",{id:"helm-example-configuration-using-environment-variables"},"Helm Example Configuration using environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'EDC_DATAPLANE_SELECTOR_PLATOPLANE_URL: http://plato-edc-dataplane:9999/api/dataplane/control\nEDC_DATAPLANE_SELECTOR_PLATOPLANE_SOURCETYPES : HttpData\nEDC_DATAPLANE_SELECTOR_PLATOPLANE_DESTINATIONTYPES: HttpProxy\nEDC_DATAPLANE_SELECTOR_PLATOPLANE_PROPERTIES: >-\n  { \n    "publicApiUrl": "http://plato-edc-dataplane:8185/api/public"\n  }\n')))}d.isMDXComponent=!0}}]);