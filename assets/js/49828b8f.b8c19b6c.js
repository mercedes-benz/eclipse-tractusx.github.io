"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[53890],{27043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),l=a(26389),r=a(94891),p=(a(75190),a(47507)),o=a(24310),d=a(63303),n=(a(75035),a(85162));const c={id:"request-assets-1",title:"requestAssets_1",description:" all assets according to a particular query",sidebar_label:"requestAssets_1",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:" all assets according to a particular query",operationId:"requestAssets_1",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}},responses:{200:{description:"The assets matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Asset"},createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"definition-id","edc:properties":{"edc:key":"value"},"edc:privateProperties":{"edc:privateKey":"privateValue"},"edc:dataAddress":{"edc:type":"HttpData"},"edc:createdAt":1688465655}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/v3/assets/request",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"request Assets 1",description:{content:" all assets according to a particular query",type:"text/plain"},url:{path:["v3","assets","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets-1",id:"version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets-1",title:"requestAssets_1",description:" all assets according to a particular query",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets-1.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets-1",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets-1",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"request-assets-1",title:"requestAssets_1",description:" all assets according to a particular query",sidebar_label:"requestAssets_1",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:" all assets according to a particular query",operationId:"requestAssets_1",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/QuerySpec"},filterExpression:{type:"array",example:null,items:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Criterion"},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"Criterion",operandLeft:"fieldName",operator:"=",operandRight:"some value"}}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",example:null,enum:["ASC","DESC"]}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]}}}}},responses:{200:{description:"The assets matching the query",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/Asset"},createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@id":"definition-id","edc:properties":{"edc:key":"value"},"edc:privateProperties":{"edc:privateKey":"privateValue"},"edc:dataAddress":{"edc:type":"HttpData"},"edc:createdAt":1688465655}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/v3/assets/request",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{edc:"https://w3id.org/edc/v0.0.1/ns/"},"@type":"QuerySpec",offset:5,limit:10,sortOrder:"DESC",sortField:"fieldName",filterExpression:[]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"request Assets 1",description:{content:" all assets according to a particular query",type:"text/plain"},url:{path:["v3","assets","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"requestAsset",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-asset"},next:{title:"requestAssets",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/request-assets"}},y={},v=[{value:"requestAssets_1",id:"requestassets_1",level:2}],x={toc:v};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requestassets_1"},"requestAssets_1"),(0,i.kt)("p",null," all assets according to a particular query"),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"filterExpression"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"operandLeft",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"sortField",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The assets matching the query")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataAddress"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"privateProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,i.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(n.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);