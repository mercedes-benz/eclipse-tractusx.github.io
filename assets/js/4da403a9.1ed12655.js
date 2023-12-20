"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[21430],{47568:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>m});var s=i(87462),r=(i(67294),i(3905)),n=i(26389),o=(i(94891),i(75190)),a=(i(47507),i(24310),i(63303),i(75035),i(85162));const u={id:"unsubscribe",title:"Client unsubscribing from information pushes",description:"Client unsubscribing from information pushes",sidebar_label:"Client unsubscribing from information pushes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Unsubscribe",parameters:[{name:"messageId",in:"path",description:"which message to unsubscribe from",required:!0,schema:{type:"string",format:"uuid4"}}],responses:{200:{description:"OK. The request has succeeded"},400:{description:"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{description:'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},403:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},420:{description:"Unknown BPNS. The BPNS which is given as parameter is not registered in the data provider database as a direct partner."}},description:"Client unsubscribing from information pushes",method:"delete",path:"/relatedMessageId/{messageId}",servers:[{url:"http://example.mp.org"}],info:{version:"1.0.0",title:"SIS EDC - Provider",license:{name:"MIT"}},postman:{name:"Client unsubscribing from information pushes",description:{type:"text/plain"},url:{path:["relatedMessageId",":messageId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) which message to unsubscribe from",type:"text/plain"},type:"any",value:"",key:"messageId"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//sis-edc-provider",custom_edit_url:null},d=void 0,l={unversionedId:"kits/Modular Production Kit/Software Development View/Provider/unsubscribe",id:"version-23.12/kits/Modular Production Kit/Software Development View/Provider/unsubscribe",title:"Client unsubscribing from information pushes",description:"Client unsubscribing from information pushes",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Modular Production Kit/Software Development View/Provider/unsubscribe.api.mdx",sourceDirName:"kits/Modular Production Kit/Software Development View/Provider",slug:"/kits/Modular Production Kit/Software Development View/Provider/unsubscribe",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Provider/unsubscribe",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"unsubscribe",title:"Client unsubscribing from information pushes",description:"Client unsubscribing from information pushes",sidebar_label:"Client unsubscribing from information pushes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Unsubscribe",parameters:[{name:"messageId",in:"path",description:"which message to unsubscribe from",required:!0,schema:{type:"string",format:"uuid4"}}],responses:{200:{description:"OK. The request has succeeded"},400:{description:"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{description:'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},403:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},420:{description:"Unknown BPNS. The BPNS which is given as parameter is not registered in the data provider database as a direct partner."}},description:"Client unsubscribing from information pushes",method:"delete",path:"/relatedMessageId/{messageId}",servers:[{url:"http://example.mp.org"}],info:{version:"1.0.0",title:"SIS EDC - Provider",license:{name:"MIT"}},postman:{name:"Client unsubscribing from information pushes",description:{type:"text/plain"},url:{path:["relatedMessageId",":messageId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) which message to unsubscribe from",type:"text/plain"},type:"any",value:"",key:"messageId"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//sis-edc-provider",custom_edit_url:null},sidebar:"kits",previous:{title:"Client asking for MP information",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information"},next:{title:"OSim Kit",permalink:"/docs-kits/category/osim-kit"}},c={},m=[{value:"Client unsubscribing from information pushes",id:"client-unsubscribing-from-information-pushes",level:2}],p={toc:m};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"client-unsubscribing-from-information-pushes"},"Client unsubscribing from information pushes"),(0,r.kt)("p",null,"Client unsubscribing from information pushes"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"messageId",in:"path",description:"which message to unsubscribe from",required:!0,schema:{type:"string",format:"uuid4"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(a.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"OK. The request has succeeded")),(0,r.kt)("div",null)),(0,r.kt)(a.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).")),(0,r.kt)("div",null)),(0,r.kt)(a.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.')),(0,r.kt)("div",null)),(0,r.kt)(a.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.")),(0,r.kt)("div",null)),(0,r.kt)(a.Z,{label:"420",value:"420",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Unknown BPNS. The BPNS which is given as parameter is not registered in the data provider database as a direct partner.")),(0,r.kt)("div",null)))))}h.isMDXComponent=!0}}]);