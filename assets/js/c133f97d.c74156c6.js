"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[72084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={},s="Tractus-X EDC (Eclipse Dataspace Connector)",c={unversionedId:"kits/tractusx-edc/README",id:"version-23.09/kits/tractusx-edc/README",title:"Tractus-X EDC (Eclipse Dataspace Connector)",description:"Contributors",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/README.md",sourceDirName:"kits/tractusx-edc",slug:"/kits/tractusx-edc/",permalink:"/docs-kits/23.09/kits/tractusx-edc/",draft:!1,tags:[],version:"23.09",frontMatter:{}},o={},i=[{value:"About The Project",id:"about-the-project",level:2},{value:"Inventory",id:"inventory",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Build",id:"build",level:3},{value:"License",id:"license",level:2}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tractus-x-edc-eclipse-dataspace-connector"},"Tractus-X EDC (Eclipse Dataspace Connector)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/graphs/contributors"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/contributors/eclipse-tractusx/tractusx-edc.svg?style=for-the-badge",alt:"Contributors"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/stargazers"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/eclipse-tractusx/tractusx-edc.svg?style=for-the-badge",alt:"Stargazers"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/LICENSE"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/eclipse-tractusx/tractusx-edc.svg?style=for-the-badge",alt:"Apache 2.0 License"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/releases"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/eclipse-tractusx/tractusx-edc.svg?style=for-the-badge",alt:"Latest Release"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://sonarcloud.io/summary/new_code?id=eclipse-tractusx_tractusx-edc"},(0,n.kt)("img",{parentName:"a",src:"https://sonarcloud.io/api/project_badges/measure?project=eclipse-tractusx_tractusx-edc&metric=alert_status",alt:"Quality Gate Status"}))),(0,n.kt)("p",null,"Container images and deployments of the Eclipse Dataspace Components for the Tractus-X project."),(0,n.kt)("p",null,"Please also refer to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/docs"},"Our docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/releases"},"Our Releases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector"},"Eclipse Dataspace Components")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/issues"},"Report Bug / Request Feature"))),(0,n.kt)("h2",{id:"about-the-project"},"About The Project"),(0,n.kt)("p",null,"The project provides pre-built control- and data-plane ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker")," images\nand ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," charts of\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"Eclipse DataSpaceConnector Project"),"."),(0,n.kt)("h2",{id:"inventory"},"Inventory"),(0,n.kt)("p",null,"The eclipse data space connector is split up into Control-Plane and Data-Plane, whereas the Control-Plane functions as\nadministration layer and has responsibility of resource management, contract negotiation and administer data transfer.\nThe Data-Plane does the heavy lifting of transferring and receiving data streams."),(0,n.kt)("p",null,"Depending on your environment there are different derivatives of the control-plane prepared:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"edc-controlplane/edc-controlplane-postgresql-azure-vault"},"edc-controlplane-postgresql-azure-vault")," with dependency onto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/key-vault/#product-overview"},"Azure Key Vault")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL 8.2 or newer")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"edc-controlplane/edc-controlplane-postgresql-hashicorp-vault"},"edc-controlplane-postgresql-hashicorp-vault")," with\ndependency onto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vaultproject.io/"},"Hashicorp Vault")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL 8.2 or newer"))))),(0,n.kt)("p",null,"Derivatives of the Data-Plane can be found here"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"edc-dataplane/edc-dataplane-azure-vault"},"edc-dataplane-azure-vault")," with dependency onto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/key-vault/#product-overview"},"Azure Key Vault")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"edc-dataplane/edc-dataplane-hashicorp-vault"},"edc-dataplane-hashicorp-vault")," with dependency onto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vaultproject.io/"},"Hashicorp Vault"))))),(0,n.kt)("p",null,"For testing/development purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"edc-controlplane/edc-runtime-memory"},"edc-runtime-memory"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"build"},"Build"),(0,n.kt)("p",null,"Build Tractus-X EDC together with its Container Images"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew dockerize\n")),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,"Distributed under the Apache 2.0 License.\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/LICENSE"},"LICENSE")," for more information."))}u.isMDXComponent=!0}}]);