"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[32723],{12087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var s=a(87462),l=(a(67294),a(3905)),i=a(26389),p=a(94891),r=(a(75190),a(47507)),d=a(24310),n=a(63303),o=(a(75035),a(85162));const c={id:"create-asset",title:"createAsset",description:"Creates a new asset together with a data address",sidebar_label:"createAsset",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Creates a new asset together with a data address",operationId:"createAsset",requestBody:{content:{"application/json":{schema:{type:"object",properties:{asset:{type:"object",properties:{createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},id:{type:"string",example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null}},example:null}}}},responses:{200:{description:"Asset was created successfully. Returns the asset Id and created timestamp",content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"id-value",createdAt:1688465655}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},409:{description:"Could not create asset, because an asset with that ID already exists",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},deprecated:!0,method:"post",path:"/v2/assets",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"create Asset",description:{content:"Creates a new asset together with a data address",type:"text/plain"},url:{path:["v2","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset",title:"createAsset",description:"Creates a new asset together with a data address",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-asset",title:"createAsset",description:"Creates a new asset together with a data address",sidebar_label:"createAsset",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Creates a new asset together with a data address",operationId:"createAsset",requestBody:{content:{"application/json":{schema:{type:"object",properties:{asset:{type:"object",properties:{createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},id:{type:"string",example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null}},example:null}}}},responses:{200:{description:"Asset was created successfully. Returns the asset Id and created timestamp",content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"id-value",createdAt:1688465655}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},409:{description:"Could not create asset, because an asset with that ID already exists",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},deprecated:!0,method:"post",path:"/v2/assets",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"create Asset",description:{content:"Creates a new asset together with a data address",type:"text/plain"},url:{path:["v2","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"createAsset_1",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-asset-1"},next:{title:"createContractDefinition",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-contract-definition"}},y={},h=[{value:"createAsset",id:"createasset",level:2}],v={toc:h};function x(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"createasset"},"createAsset"),(0,l.kt)("admonition",{title:"deprecated",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,l.kt)("p",null,"Creates a new asset together with a data address"),(0,l.kt)(p.Z,{mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"asset"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"dataAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"privateProperties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"properties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"dataAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Asset was created successfully. Returns the asset Id and created timestamp")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(n.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "@id": "id-value",\n  "createdAt": 1688465655\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request body was malformed")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(n.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Could not create asset, because an asset with that ID already exists")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(n.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);