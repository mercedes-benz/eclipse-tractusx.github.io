"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9921],{27596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),n=a(26389),o=a(94891),r=(a(75190),a(47507)),p=a(24310),l=a(63303),m=(a(75035),a(85162));const d={id:"get-readiness",title:"getReadiness",description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",sidebar_label:"getReadiness",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",operationId:"getReadiness",responses:{200:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{componentResults:{type:"array",items:{type:"object",properties:{component:{type:"string"},failure:{type:"object",properties:{failureDetail:{type:"string"},messages:{type:"array",items:{type:"string"}}}},isHealthy:{type:"boolean"}}}},isSystemHealthy:{type:"boolean"}}}}}}}},method:"get",path:"/check/readiness",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get Readiness",description:{content:"Performs a readiness probe to determine whether the runtime is able to accept requests.",type:"text/plain"},url:{path:["check","readiness"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},c=void 0,u={unversionedId:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-readiness",id:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-readiness",title:"getReadiness",description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",source:"@site/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-readiness.api.mdx",sourceDirName:"kits/product-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-readiness",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-readiness",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-readiness",title:"getReadiness",description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",sidebar_label:"getReadiness",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",operationId:"getReadiness",responses:{200:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{componentResults:{type:"array",items:{type:"object",properties:{component:{type:"string"},failure:{type:"object",properties:{failureDetail:{type:"string"},messages:{type:"array",items:{type:"string"}}}},isHealthy:{type:"boolean"}}}},isSystemHealthy:{type:"boolean"}}}}}}}},method:"get",path:"/check/readiness",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get Readiness",description:{content:"Performs a readiness probe to determine whether the runtime is able to accept requests.",type:"text/plain"},url:{path:["check","readiness"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getPolicy",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-policy"},next:{title:"getStartup",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-startup"}},h={},y=[{value:"getReadiness",id:"getreadiness",level:2}],g={toc:y};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getreadiness"},"getReadiness"),(0,i.kt)("p",null,"Performs a readiness probe to determine whether the runtime is able to accept requests."),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"componentResults"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"component",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"failure"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"failureDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"isHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'[\n  {\n    "componentResults": [\n      {\n        "component": "string",\n        "failure": {\n          "failureDetail": "string",\n          "messages": [\n            "string"\n          ]\n        },\n        "isHealthy": true\n      }\n    ],\n    "isSystemHealthy": true\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);