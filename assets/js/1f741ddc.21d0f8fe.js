"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[27085],{22220:(E,e,T)=>{T.r(e),T.d(e,{assets:()=>D,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>n});var _=T(87462),O=(T(67294),T(3905)),t=T(26389),R=T(94891),I=T(75190),N=T(47507),A=T(24310),a=T(63303),o=(T(75035),T(85162));const s={id:"delete-allowed-policy",title:"Removes a policy that should no longer be accepted in EDC negotiation.",description:"Removes a policy that should no longer be accepted in EDC negotiation.",sidebar_label:"Removes a policy that should no longer be accepted in EDC negotiation.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Removes a policy that should no longer be accepted in EDC negotiation.",operationId:"deleteAllowedPolicy",parameters:[{in:"path",name:"policyId",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK"},400:{content:{"application/json":{examples:{error:{value:{error:"Bad request",messages:["BadRequestException"],statusCode:"400 BAD_REQUEST"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Policy deletion failed."},401:{content:{"application/json":{examples:{error:{value:{error:"Unauthorized",messages:["UnauthorizedException"],statusCode:"401 UNAUTHORIZED"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"No valid authentication credentials."},403:{content:{"application/json":{examples:{error:{value:{error:"Forbidden",messages:["ForbiddenException"],statusCode:"403 FORBIDDEN"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Authorization refused by server."}},security:[{oAuth2:[]}],tags:["Item Relationship Service"],method:"delete",path:"/irs/policies/{policyId}",servers:[{url:"http://localhost:8080"}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{},tokenUrl:"https://localhost"}},type:"oauth2"}},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.1.0"},postman:{name:"Removes a policy that should no longer be accepted in EDC negotiation.",description:{content:"Removes a policy that should no longer be accepted in EDC negotiation.",type:"text/plain"},url:{path:["irs","policies",":policyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"policyId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},i=void 0,r={unversionedId:"kits/Data Chain Kit/Software Development View/Job Api/delete-allowed-policy",id:"version-24.03/kits/Data Chain Kit/Software Development View/Job Api/delete-allowed-policy",title:"Removes a policy that should no longer be accepted in EDC negotiation.",description:"Removes a policy that should no longer be accepted in EDC negotiation.",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Chain Kit/Software Development View/Job Api/delete-allowed-policy.api.mdx",sourceDirName:"kits/Data Chain Kit/Software Development View/Job Api",slug:"/kits/Data Chain Kit/Software Development View/Job Api/delete-allowed-policy",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Job Api/delete-allowed-policy",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"delete-allowed-policy",title:"Removes a policy that should no longer be accepted in EDC negotiation.",description:"Removes a policy that should no longer be accepted in EDC negotiation.",sidebar_label:"Removes a policy that should no longer be accepted in EDC negotiation.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Removes a policy that should no longer be accepted in EDC negotiation.",operationId:"deleteAllowedPolicy",parameters:[{in:"path",name:"policyId",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK"},400:{content:{"application/json":{examples:{error:{value:{error:"Bad request",messages:["BadRequestException"],statusCode:"400 BAD_REQUEST"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Policy deletion failed."},401:{content:{"application/json":{examples:{error:{value:{error:"Unauthorized",messages:["UnauthorizedException"],statusCode:"401 UNAUTHORIZED"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"No valid authentication credentials."},403:{content:{"application/json":{examples:{error:{value:{error:"Forbidden",messages:["ForbiddenException"],statusCode:"403 FORBIDDEN"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Authorization refused by server."}},security:[{oAuth2:[]}],tags:["Item Relationship Service"],method:"delete",path:"/irs/policies/{policyId}",servers:[{url:"http://localhost:8080"}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{},tokenUrl:"https://localhost"}},type:"oauth2"}},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.1.0"},postman:{name:"Removes a policy that should no longer be accepted in EDC negotiation.",description:{content:"Removes a policy that should no longer be accepted in EDC negotiation.",type:"text/plain"},url:{path:["irs","policies",":policyId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"policyId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Cancel job for requested jobId.",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Job Api/cancel-job-by-job-id"},next:{title:"Get all available aspect models from semantic hub or local models.",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Job Api/get-all-aspect-models"}},D={},n=[{value:"Removes a policy that should no longer be accepted in EDC negotiation.",id:"removes-a-policy-that-should-no-longer-be-accepted-in-edc-negotiation",level:2}],l={toc:n};function p(E){let{components:e,...T}=E;return(0,O.kt)("wrapper",(0,_.Z)({},l,T,{components:e,mdxType:"MDXLayout"}),(0,O.kt)("h2",{id:"removes-a-policy-that-should-no-longer-be-accepted-in-edc-negotiation"},"Removes a policy that should no longer be accepted in EDC negotiation."),(0,O.kt)("p",null,"Removes a policy that should no longer be accepted in EDC negotiation."),(0,O.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,O.kt)("summary",{style:{}},(0,O.kt)("strong",null,"Path Parameters")),(0,O.kt)("div",null,(0,O.kt)("ul",null,(0,O.kt)(I.Z,{className:"paramsItem",param:{in:"path",name:"policyId",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,O.kt)("div",null,(0,O.kt)(t.Z,{mdxType:"ApiTabs"},(0,O.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,O.kt)("div",null,(0,O.kt)("p",null,"OK")),(0,O.kt)("div",null)),(0,O.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,O.kt)("div",null,(0,O.kt)("p",null,"Policy deletion failed.")),(0,O.kt)("div",null,(0,O.kt)(R.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,O.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,O.kt)(a.Z,{mdxType:"SchemaTabs"},(0,O.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,O.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,O.kt)("summary",{style:{textAlign:"left"}},(0,O.kt)("strong",null,"Schema")),(0,O.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,O.kt)("ul",{style:{marginLeft:"1rem"}},(0,O.kt)(A.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,O.kt)(A.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,O.kt)(A.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,O.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,O.kt)(N.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,O.kt)(o.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,O.kt)(N.Z,{responseExample:'{\n  "error": "Bad request",\n  "messages": [\n    "BadRequestException"\n  ],\n  "statusCode": "400 BAD_REQUEST"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,O.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,O.kt)("div",null,(0,O.kt)("p",null,"No valid authentication credentials.")),(0,O.kt)("div",null,(0,O.kt)(R.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,O.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,O.kt)(a.Z,{mdxType:"SchemaTabs"},(0,O.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,O.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,O.kt)("summary",{style:{textAlign:"left"}},(0,O.kt)("strong",null,"Schema")),(0,O.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,O.kt)("ul",{style:{marginLeft:"1rem"}},(0,O.kt)(A.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,O.kt)(A.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,O.kt)(A.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,O.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,O.kt)(N.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,O.kt)(o.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,O.kt)(N.Z,{responseExample:'{\n  "error": "Unauthorized",\n  "messages": [\n    "UnauthorizedException"\n  ],\n  "statusCode": "401 UNAUTHORIZED"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,O.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,O.kt)("div",null,(0,O.kt)("p",null,"Authorization refused by server.")),(0,O.kt)("div",null,(0,O.kt)(R.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,O.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,O.kt)(a.Z,{mdxType:"SchemaTabs"},(0,O.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,O.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,O.kt)("summary",{style:{textAlign:"left"}},(0,O.kt)("strong",null,"Schema")),(0,O.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,O.kt)("ul",{style:{marginLeft:"1rem"}},(0,O.kt)(A.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,O.kt)(A.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,O.kt)(A.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,O.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,O.kt)(N.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,O.kt)(o.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,O.kt)(N.Z,{responseExample:'{\n  "error": "Forbidden",\n  "messages": [\n    "ForbiddenException"\n  ],\n  "statusCode": "403 FORBIDDEN"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}p.isMDXComponent=!0}}]);