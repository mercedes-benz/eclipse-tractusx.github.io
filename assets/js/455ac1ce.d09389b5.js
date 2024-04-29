"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[60118],{20443:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var a=i(87462),o=(i(67294),i(3905)),s=i(26389),n=i(94891),l=(i(75190),i(47507)),r=i(24310),d=i(63303),c=(i(75035),i(85162));const u={id:"get-quality-notification",title:"getQualityNotification",description:"Resolves a quality notification",sidebar_label:"getQualityNotification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Quality notification"],description:"Resolves a quality notification",operationId:"getQualityNotification",requestBody:{content:{"application/json":{schema:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a quality notification."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check."},messageId:{type:"string",format:"uuid",example:"c2801472-5f87-41a7-9a25-b0939c4e0dff",description:"A UUIDv4 to uniquely identify an individual quality notification message. If this parameter is provided, the message for this messageId is resolved. If this parameter is not provided, then the last available message is resolved."}}}}}},responses:{200:{description:"Quality notification was resolved successfully",content:{"application/json":{schema:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN","severity","status","messageId"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a quality notification."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver."},severity:{type:"string",enum:["MINOR","MAJOR","CRITICAL","LIFE-THREATENING"],example:"CRITICAL",description:"The severity of the quality notification describes its criticality."},status:{type:"string",enum:["CREATED","SENT","RECEIVED","ACKNOWLEDGED","ACCEPTED","DECLINED","CLOSED"],example:"SENT",description:"The status of the quality notification."},targetDate:{type:"string",format:"date-time",example:"2022-07-28T14:41:13.214Z",description:"The date and time when a processing of the notification is expected by the sender."},messageId:{type:"string",format:"uuid",example:"c2801472-5f87-41a7-9a25-b0939c4e0dff",description:"A UUIDv4 to uniquely identify an individual quality notification message."}}}}}},400:{description:"Request body was malformed"},401:{description:"Not authorized"},403:{description:"Forbidden"},404:{description:"Could not resolve the quality notification, because a quality notification with that notificationId does not exist"},405:{description:"Method not allowed"}},method:"post",path:"/qualitynotifications/resolve",servers:[{url:"/"}],jsonRequestBodyExample:{notificationId:"a7954026-3aff-4b6c-92bf-04671ef2fa46",senderBPN:"BPNL00000003BW3S",senderAddress:"https://edc.company-xyz.io/BPNL00000003BW3S",recipientBPN:"BPNL00000003BV4H",messageId:"c2801472-5f87-41a7-9a25-b0939c4e0dff"},info:{title:"Notification API",description:"Notification API",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"1.1.0"},postman:{name:"get Quality Notification",description:{content:"Resolves a quality notification",type:"text/plain"},url:{path:["qualitynotifications","resolve"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/notification-api",custom_edit_url:null},p=void 0,m={unversionedId:"kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/get-quality-notification",id:"version-24.03/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/get-quality-notification",title:"getQualityNotification",description:"Resolves a quality notification",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/get-quality-notification.api.mdx",sourceDirName:"kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory",slug:"/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/get-quality-notification",permalink:"/docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/get-quality-notification",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"get-quality-notification",title:"getQualityNotification",description:"Resolves a quality notification",sidebar_label:"getQualityNotification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Quality notification"],description:"Resolves a quality notification",operationId:"getQualityNotification",requestBody:{content:{"application/json":{schema:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a quality notification."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check."},messageId:{type:"string",format:"uuid",example:"c2801472-5f87-41a7-9a25-b0939c4e0dff",description:"A UUIDv4 to uniquely identify an individual quality notification message. If this parameter is provided, the message for this messageId is resolved. If this parameter is not provided, then the last available message is resolved."}}}}}},responses:{200:{description:"Quality notification was resolved successfully",content:{"application/json":{schema:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN","severity","status","messageId"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a quality notification."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver."},severity:{type:"string",enum:["MINOR","MAJOR","CRITICAL","LIFE-THREATENING"],example:"CRITICAL",description:"The severity of the quality notification describes its criticality."},status:{type:"string",enum:["CREATED","SENT","RECEIVED","ACKNOWLEDGED","ACCEPTED","DECLINED","CLOSED"],example:"SENT",description:"The status of the quality notification."},targetDate:{type:"string",format:"date-time",example:"2022-07-28T14:41:13.214Z",description:"The date and time when a processing of the notification is expected by the sender."},messageId:{type:"string",format:"uuid",example:"c2801472-5f87-41a7-9a25-b0939c4e0dff",description:"A UUIDv4 to uniquely identify an individual quality notification message."}}}}}},400:{description:"Request body was malformed"},401:{description:"Not authorized"},403:{description:"Forbidden"},404:{description:"Could not resolve the quality notification, because a quality notification with that notificationId does not exist"},405:{description:"Method not allowed"}},method:"post",path:"/qualitynotifications/resolve",servers:[{url:"/"}],jsonRequestBodyExample:{notificationId:"a7954026-3aff-4b6c-92bf-04671ef2fa46",senderBPN:"BPNL00000003BW3S",senderAddress:"https://edc.company-xyz.io/BPNL00000003BW3S",recipientBPN:"BPNL00000003BV4H",messageId:"c2801472-5f87-41a7-9a25-b0939c4e0dff"},info:{title:"Notification API",description:"Notification API",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"1.1.0"},postman:{name:"get Quality Notification",description:{content:"Resolves a quality notification",type:"text/plain"},url:{path:["qualitynotifications","resolve"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/notification-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/notification-api"},next:{title:"receiveQualityNotification",permalink:"/docs-kits/kits/Traceability Kit/Software Development View/Notification API/v1.1.0 - mandatory/receive-quality-notification"}},f={},y=[{value:"getQualityNotification",id:"getqualitynotification",level:2}],h={toc:y};function v(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getqualitynotification"},"getQualityNotification"),(0,o.kt)("p",null,"Resolves a quality notification"),(0,o.kt)(n.Z,{mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(r.Z,{collapsible:!1,name:"notificationId",required:!0,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify a quality notification.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"senderBPN",required:!0,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the sender. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"senderAddress",required:!0,deprecated:void 0,schemaDescription:"The Eclipse Dataspace Connector (EDC) URL of the sender. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check.",schemaName:"uri",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"recipientBPN",required:!0,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the receiver. Actually, this value is not used to resolve the quality notification. Rather, it is used to do a plausibility check.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"messageId",required:!1,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify an individual quality notification message. If this parameter is provided, the message for this messageId is resolved. If this parameter is not provided, then the last available message is resolved.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Quality notification was resolved successfully")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(r.Z,{collapsible:!1,name:"notificationId",required:!1,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify a quality notification.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"senderBPN",required:!1,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the sender.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"senderAddress",required:!1,deprecated:void 0,schemaDescription:"The Eclipse Dataspace Connector (EDC) URL of the sender.",schemaName:"uri",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"recipientBPN",required:!1,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the receiver.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"severity",required:!1,deprecated:void 0,schemaDescription:"The severity of the quality notification describes its criticality.",schemaName:"string",qualifierMessage:"**Possible values:** [`MINOR`, `MAJOR`, `CRITICAL`, `LIFE-THREATENING`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"The status of the quality notification.",schemaName:"string",qualifierMessage:"**Possible values:** [`CREATED`, `SENT`, `RECEIVED`, `ACKNOWLEDGED`, `ACCEPTED`, `DECLINED`, `CLOSED`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"targetDate",required:!1,deprecated:void 0,schemaDescription:"The date and time when a processing of the notification is expected by the sender.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"messageId",required:!1,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify an individual quality notification message.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "notificationId": "a7954026-3aff-4b6c-92bf-04671ef2fa46",\n  "senderBPN": "BPNL00000003BW3S",\n  "senderAddress": "https://edc.company-xyz.io/BPNL00000003BW3S",\n  "recipientBPN": "BPNL00000003BV4H",\n  "severity": "CRITICAL",\n  "status": "SENT",\n  "targetDate": "2022-07-28T14:41:13.214Z",\n  "messageId": "c2801472-5f87-41a7-9a25-b0939c4e0dff"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Request body was malformed")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Not authorized")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Forbidden")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Could not resolve the quality notification, because a quality notification with that notificationId does not exist")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Method not allowed")),(0,o.kt)("div",null)))))}v.isMDXComponent=!0}}]);