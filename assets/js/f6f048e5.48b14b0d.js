"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[76118],{96472:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>y,contentTitle:()=>c,default:()=>x,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var a=t(87462),l=(t(67294),t(3905)),o=t(26389),n=t(94891),s=(t(75190),t(47507)),p=t(24310),r=t(63303),d=(t(75035),t(85162));const m={id:"query-policy-definitions",title:"queryPolicyDefinitions",description:"Returns all policy definitions according to a query",sidebar_label:"queryPolicyDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns all policy definitions according to a query",operationId:"queryPolicyDefinitions",requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{filter:{type:"string",example:null},filterExpression:{type:"array",example:null,items:{type:"object",example:null,properties:{operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},required:["operandLeft","operator"]}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",enum:["ASC","DESC"],example:null}}}}}},responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},policy:{type:"object",additionalProperties:{type:"object",example:null,properties:{valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}},example:null,properties:{empty:{type:"boolean",example:null},valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}}},required:["policy"]}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed"}},tags:["Policy Definition"],method:"post",path:"/v2/policydefinitions/request",jsonRequestBodyExample:null,info:{title:"EDC Policy Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"query Policy Definitions",description:{content:"Returns all policy definitions according to a query",type:"text/plain"},url:{path:["v2","policydefinitions","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/edc-policy-definition-api",custom_edit_url:null},c=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/query-policy-definitions",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/query-policy-definitions",title:"queryPolicyDefinitions",description:"Returns all policy definitions according to a query",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/query-policy-definitions.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/query-policy-definitions",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/query-policy-definitions",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"query-policy-definitions",title:"queryPolicyDefinitions",description:"Returns all policy definitions according to a query",sidebar_label:"queryPolicyDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns all policy definitions according to a query",operationId:"queryPolicyDefinitions",requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{filter:{type:"string",example:null},filterExpression:{type:"array",example:null,items:{type:"object",example:null,properties:{operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},required:["operandLeft","operator"]}},limit:{type:"integer",format:"int32",example:null},offset:{type:"integer",format:"int32",example:null},sortField:{type:"string",example:null},sortOrder:{type:"string",enum:["ASC","DESC"],example:null}}}}}},responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},policy:{type:"object",additionalProperties:{type:"object",example:null,properties:{valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}},example:null,properties:{empty:{type:"boolean",example:null},valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}}},required:["policy"]}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed"}},tags:["Policy Definition"],method:"post",path:"/v2/policydefinitions/request",jsonRequestBodyExample:null,info:{title:"EDC Policy Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"query Policy Definitions",description:{content:"Returns all policy definitions according to a query",type:"text/plain"},url:{path:["v2","policydefinitions","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/edc-policy-definition-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryAllPolicies",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/query-all-policies"},next:{title:"updatePolicyDefinition",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/update-policy-definition"}},y={},f=[{value:"queryPolicyDefinitions",id:"querypolicydefinitions",level:2}],v={toc:f};function x(e){let{components:i,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"querypolicydefinitions"},"queryPolicyDefinitions"),(0,l.kt)("p",null,"Returns all policy definitions according to a query"),(0,l.kt)(n.Z,{mdxType:"MimeTabs"},(0,l.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"filter",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"filterExpression"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"operandLeft",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"operator",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"sortField",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"sortOrder",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ASC`, `DESC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)(o.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"policy"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"empty",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"valueType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ARRAY`, `OBJECT`, `STRING`, `NUMBER`, `TRUE`, `FALSE`, `NULL`]",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,l.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(s.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(s.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);