"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={title:"TRG 4.02 - Base images"},i=void 0,s={unversionedId:"release/trg-4/trg-4-2",id:"release/trg-4/trg-4-2",title:"TRG 4.02 - Base images",description:"| Author               | Status | Created     | Post-History                     |",source:"@site/docs/release/trg-4/trg-4-2.md",sourceDirName:"release/trg-4",slug:"/release/trg-4/trg-4-2",permalink:"/docs/release/trg-4/trg-4-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/release/trg-4/trg-4-2.md",tags:[],version:"current",frontMatter:{title:"TRG 4.02 - Base images"},sidebar:"docs",previous:{title:"TRG 4.01 - Image tagging",permalink:"/docs/release/trg-4/trg-4-1"},next:{title:"TRG 5.01 - Helm Chart requirements",permalink:"/docs/release/trg-5/trg-5-1"}},l={},u=[{value:"Description",id:"description",level:2},{value:"How and where to annotate the base image",id:"how-and-where-to-annotate-the-base-image",level:2},{value:"Mandatory base images by programming language",id:"mandatory-base-images-by-programming-language",level:2},{value:"JVM based languages (Java, Kotlin, ...)",id:"jvm-based-languages-java-kotlin-",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,n.kt)("td",{parentName:"tr",align:null},"Active"),(0,n.kt)("td",{parentName:"tr",align:null},"25-Nov-2022"),(0,n.kt)("td",{parentName:"tr",align:null},"Initital release")))),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The container base images used by Tractus-X products need to be well annotated.\nIt has to be clear for any user of the images, that it is only provided for demonstration purposes.\nAlso the original source of the base image needs to be linked.\nFor specific programming languages, a specific base image as runtime environment might be mandatory."),(0,n.kt)("h2",{id:"how-and-where-to-annotate-the-base-image"},"How and where to annotate the base image"),(0,n.kt)("p",null,"In case your product is offering a container image, no matter if it is publicly available, or\nyour repository just contains a Dockerfile, you ",(0,n.kt)("strong",{parentName:"p"},"must")," add a section to your top level ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md")," file,\nthat contains information about the used base image."),(0,n.kt)("p",null,"It has to be clearly understandable, which image is used, and where the original source can be found.\nThe section headline should be either ",(0,n.kt)("em",{parentName:"p"},'"Container image"')," or ",(0,n.kt)("em",{parentName:"p"},'"Docker image"'),".\nAn example section could look like the following, but contents may vary depending on your chosen base image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"# Container image\n\nThis application provides container images for demonstration purposes.\nThe base image used, to build this demo application image is `eclipse-temurin:17-jre-alpine`\n\nDocker Hub:\n- [eclipse-temurin](https://hub.docker.com/_/eclipse-temurin)\n- [17-jre-alpine image](https://hub.docker.com/layers/library/eclipse-temurin/17-jre-alpine/images/sha256-02c04793fa49ad5cd193c961403223755f9209a67894622e05438598b32f210e?context=explore)\n\nSource: \n- [temurin-build](https://github.com/adoptium/temurin-build)\n- [temurin docker repo info](https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin)\n")),(0,n.kt)("h2",{id:"mandatory-base-images-by-programming-language"},"Mandatory base images by programming language"),(0,n.kt)("p",null,"The following sections define mandatory base images for Tractus-X products.\nIf your application is written in one of these languages, you ",(0,n.kt)("strong",{parentName:"p"},"must")," use the specified\nbase image. The images are chosen, because they provide well documented\ndependency annotations and follow general best-practices."),(0,n.kt)("h3",{id:"jvm-based-languages-java-kotlin-"},"JVM based languages (Java, Kotlin, ...)"),(0,n.kt)("p",null,"For JVM based Tracuts-X products, you must use ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/eclipse-temurin"},"Eclipse Temurin")," as container base image.\nFor more information on Temurin, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adoptium/temurin-build"},"temurin build")," repository and\nthe official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"docker image package-info")))}p.isMDXComponent=!0}}]);