"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[16308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="EDC API Examples",i={unversionedId:"kits/tractusx-edc/docs/kit/operation-view/page08_api",id:"version-23.09/kits/tractusx-edc/docs/kit/operation-view/page08_api",title:"EDC API Examples",description:"API Spec",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/kit/operation-view/page08_api.md",sourceDirName:"kits/tractusx-edc/docs/kit/operation-view",slug:"/kits/tractusx-edc/docs/kit/operation-view/page08_api",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/operation-view/page08_api",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"Postman Collection",permalink:"/docs-kits/kits/tractusx-edc/docs/development/postman/"},next:{title:"Transfer Data",permalink:"/docs-kits/kits/tractusx-edc/docs/samples/Transfer Data"}},p={},l=[{value:"API Spec",id:"api-spec",level:2},{value:"Create an Asset",id:"create-an-asset",level:2},{value:"Request an Asset Catalog",id:"request-an-asset-catalog",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"edc-api-examples"},"EDC API Examples"),(0,a.kt)("h2",{id:"api-spec"},"API Spec"),(0,a.kt)("p",null,"The API spec of the EDC is constantly evolving.\nThe full API documentation for each release can be viewed on ",(0,a.kt)("a",{parentName:"p",href:"../development-view/openAPI/management-api/management-api.info.mdx"},"management-api"),".\nThe following are some example API calls for common use cases.\nThey assume the default parameters from the previous local setup."),(0,a.kt)("h2",{id:"create-an-asset"},"Create an Asset"),(0,a.kt)("p",null,"All objects in EDC are created by posting their JSON-serialized representation to the respective API input.\nSince most EDC objects are rather openly defined, most of the properties provided depend on the need of the individual user.\nAssets are no exception here."),(0,a.kt)("p",null,"URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST http://localhost:8080/api/v1/assets/\n")),(0,a.kt)("p",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "asset": {\n    "id": "asset1",\n    "properties": {\n      "exampleProperty": "exampleValue"\n    }\n  },\n  "dataAddress": {\n    "properties": {\n      "baseUrl": "https://path.to/the_asset",\n      "type": "HttpData"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"request-an-asset-catalog"},"Request an Asset Catalog"),(0,a.kt)("p",null,"To inspect the assets available to an EDC connector, we request its catalog."),(0,a.kt)("p",null,"URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST http://localhost:8080/api/v1/catalog/request\n")),(0,a.kt)("p",null,"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "providerUrl": "www.example.provider",\n  "querySpec": {\n    "filter": "AvailableWithPolicyXYZ",\n    "limit": 0,\n    "offset": 0,\n    "sortField": "id",\n    "sortOrder": "ASC"\n  }\n}\n')))}u.isMDXComponent=!0}}]);