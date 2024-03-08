"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[24342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},66997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"Specification",title:"Specification",description:"PCF-Exchange-KIT",sidebar_position:3},l=void 0,o={unversionedId:"kits/PCF Exchange Kit/Software Development View/Specification",id:"version-23.12/kits/PCF Exchange Kit/Software Development View/Specification",title:"Specification",description:"PCF-Exchange-KIT",source:"@site/docs-kits_versioned_docs/version-23.12/kits/PCF Exchange Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/PCF Exchange Kit/Software Development View",slug:"/kits/PCF Exchange Kit/Software Development View/Specification",permalink:"/docs-kits/23.12/kits/PCF Exchange Kit/Software Development View/Specification",draft:!1,tags:[],version:"23.12",sidebarPosition:3,frontMatter:{id:"Specification",title:"Specification",description:"PCF-Exchange-KIT",sidebar_position:3},sidebar:"kits",previous:{title:"Development View",permalink:"/docs-kits/23.12/category/development-view-1"},next:{title:"PCF Exchange API",permalink:"/docs-kits/23.12/category/pcf-exchange-api"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Building Block View",id:"building-block-view",level:2},{value:"Sequence View",id:"sequence-view",level:2},{value:"EDC Discovery and dDTR Access",id:"edc-discovery-and-ddtr-access",level:3},{value:"PCF Request",id:"pcf-request",level:3},{value:"PCF Update",id:"pcf-update",level:3},{value:"API Calls",id:"api-calls",level:4},{value:"Payload for Requesting PCF Sub Model",id:"payload-for-requesting-pcf-sub-model",level:5},{value:"Payloads for EDC Asset",id:"payloads-for-edc-asset",level:4},{value:"Payload for EDC Data Asset PCF",id:"payload-for-edc-data-asset-pcf",level:5},{value:"Payload for EDC Policy",id:"payload-for-edc-policy",level:4},{value:"Payload to create a SSI based Policy",id:"payload-to-create-a-ssi-based-policy",level:5},{value:"Payload Contract Definition",id:"payload-contract-definition",level:4},{value:"Error Handling",id:"error-handling",level:2},{value:"Standards",id:"standards",level:2},{value:"Used CX Standards",id:"used-cx-standards",level:3},{value:"Other Standards",id:"other-standards",level:2},{value:"NOTICE",id:"notice",level:2}],c={toc:s};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The developer view provides a detailed guide on how to utilize the PCF exchange KIT effectively. Developer will learn how to integrate the kit into there applications and make use of the feature of exchanging PCF values via the Catena-X network.\nIT-Administrators will learn how they need to provide PCF data and which components are needed therefore."),(0,r.kt)("p",null,"This Kit covers various aspects, starting from how utilize the available API Endpoints, the used data models and how to make them available to the Catena-X network."),(0,r.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,r.kt)("p",null,"The following figure shows the current high level architecture of the use case PCF exchange. It is build on an asynchronous data exchange."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Building Block View",src:a(26606).Z,width:"3100",height:"2115"})),(0,r.kt)("h2",{id:"sequence-view"},"Sequence View"),(0,r.kt)("p",null,"The following chapter illustrates the process from searching for an EDC point, to querying a PCF value, and finally transmitting the requested value."),(0,r.kt)("h3",{id:"edc-discovery-and-ddtr-access"},"EDC Discovery and dDTR Access"),(0,r.kt)("p",null,"For receiving the EDC Endpoints for a requested partner, the EDC Discovery Service is used, following the ",(0,r.kt)("a",{parentName:"p",href:"%5Btest%5D(https://catena-x.net/de/standard-library)"},"CX-0001")," Standard. For receiving endpoints, at least the BPN-L needs to be known to get the related endpoints. For more details the used Catena-X Standard is linked."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EDCDiscoveryAndDTRAccess",src:a(99111).Z,width:"2247",height:"1075"})),(0,r.kt)("h3",{id:"pcf-request"},"PCF Request"),(0,r.kt)("p",null,"To actual request PCF values via the PCF API endpoint first of all the EDC PCF asset needs to be identified. Therefore the decentralized Digital Twin Registry (dDTR) is used. Data provider must register their dDTR(s) as EDC assets following the CX-0002 standard. After identifying the dDTR the Digital Twin with the related PCF submodel can be searched (see ",(0,r.kt)("a",{parentName:"p",href:"#api-calls"},"API calls [0003 +0004]"),"). An example are documented ",(0,r.kt)("a",{parentName:"p",href:"#payload-for-requesting-pcf-sub-model"},"here"),".\nAfter successfully locating the EDC asset containing the PCF request endpoint (Example Payload can be found ",(0,r.kt)("a",{parentName:"p",href:"#payload-for-edc-data-asset-pcf"},"here"),"), the query for a PCF dataset can be initiated, as illustrated in the attached sequence diagram."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PCF Request",src:a(32721).Z,width:"2822",height:"2819"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe API Wrapper shown in the sequence diagrams is optional. The management API of the EDC can also be used directly.")),(0,r.kt)("h3",{id:"pcf-update"},"PCF Update"),(0,r.kt)("p",null,"The sequence diagram provided below presents an example of a PCF update flow. An update is feasible only for assets that have been previously requested at least once, as demonstrated in ",(0,r.kt)("a",{parentName:"p",href:"#sequence-view"},"PCF Request"),". Proactive updates without a prior request are not achievable with the current version."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PCF Update",src:a(99111).Z,width:"2247",height:"1075"})),(0,r.kt)("h4",{id:"api-calls"},"API Calls"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Call"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Param"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20EDC%20Discovery/post-list-of-bpns-or-an-empty-array-to-retrieve-available-company-connector-authorization-required-roles-view-connectors"},"001")," (Look up EDC Endpoints)"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/administration/Connectors/discovery/"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[<Company's BPNL>]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog"},"002")," (Look up dDTR)"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/v2/catalog/request--\x3eLookup Asset in the EDC catalog (EDC asset type data.core.digitalTwinRegistry)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20AAS%20Discovery/get-all-asset-administration-shell-ids-by-asset-link"},"003")," (Lookup Twin ID)"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/lookup/shells"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'assetIds= [{"key": "manufacturerPartId", "value":"mat345",{"key":"assetLifecyclePhase", "value": "AsPlanned"}}]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20AAS%20Registry/get-all-asset-administration-shell-descriptors"},"004")," (Look Up PCF Submodel/EDC Asset ID)"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/shell-descriptors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{DIGITAL TWIN ID}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[005]"," (Requesting PCF Value)"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/productIds"),(0,r.kt)("td",{parentName:"tr",align:null},"{productId}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"006 (Sending PCF Value)"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/productIds"),(0,r.kt)("td",{parentName:"tr",align:null},"{productId}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The assetIds under ","[003]"," must be base64 encoded!"),(0,r.kt)("li",{parentName:"ul"},'When responding on PCF exchange request the "requestID" is mandatory in the PUT call.'),(0,r.kt)("li",{parentName:"ul"},'When sharing a PCF update the "requestID" is NOT allowed in the PUT call.'),(0,r.kt)("li",{parentName:"ul"},'The EDC asset used to receive PCF is NOT looked up through AAS, but identified by type ("data.pcf.exchangeEndpoint").')),(0,r.kt)("h5",{id:"payload-for-requesting-pcf-sub-model"},"Payload for Requesting PCF Sub Model"),(0,r.kt)("p",null,"The following JSON shows the structure of a registered PCF submodel in the DTR. The subprotocolBody is used for asset bundling. For this, the CX Standard ",(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0002")," is to be followed."),(0,r.kt)("p",null,"The digital twin id can be searched via the, ",(0,r.kt)("inlineCode",{parentName:"p"},"manufacturerPartId")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},'assetLifecyclePhase:"asPlanned"'),"\nThe sub-model PCF must be registered with the ",(0,r.kt)("inlineCode",{parentName:"p"},"idshort: PCFExchangeEndpoint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": [\n        {\n            "language": "en",\n            "text": "PCF endpoint for material \'mat345\'"\n        }\n    ],\n    "idShort": "PCFExchangeEndpoint",\n    "identification": "urn:uuid:205cf8d1-8f07-483c-9c5b-c8d706c7d05d",\n    "semanticId": {\n        "value": [\n            "urn:bamm:io.catenax.pcf:4.0.0#Pcf"\n        ]\n    },\n    "endpoints": [\n        {\n            "interface": "PCF-0.0.3",\n            "protocolInformation": {\n                "href": "https://edc.data.plane/productIds/mat345",\n                "endpointProtocol": "HTTP",\n                "endpointProtocolVersion": ["1.1"]\n                "subprotocol": "DSP",\n                "subprotocolBody": "id=c34018ab-5820-4065-9087-416d78e1ab60;dspEndpoint=https://some.controlplane.url:7173",\n                "subprotocolBodyEncoding": "plain"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"payloads-for-edc-asset"},"Payloads for EDC Asset"),(0,r.kt)("h5",{id:"payload-for-edc-data-asset-pcf"},"Payload for EDC Data Asset PCF"),(0,r.kt)("p",null,"The following JSON shows the the EDC Asset for PCF defined in the EDC using the asset bundling mentioned under ",(0,r.kt)("a",{parentName:"p",href:"#api-calls"},"Payload for Requesting PCF Sub Model"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "@type": "edc:AssetEntryDto",\n  "edc:asset": {\n    "@id": "c34018ab-5820-4065-9087-416d78e1ab60",\n    "edc:properties": {\n      "rdfs:label": "PCF Data",\n      "rdfs:comment": "Endpoint for PCF data",\n      "dcat:version": "0.0.3",\n      "aas-semantics:semanticId": "urn:bamm:io.catenax.pcf:4.0.0#Pcf",\n      "edc:contentType": "application/json",\n      "edc:type": "data.pcf.exchangeEndpoint"\n    },\n    "edc:privateProperties": null,\n     \n  "edc:dataAddress": {\n    "edc:type": "edc:HttpData",\n    "edc:baseUrl": https://some.url/service,\n    "edc:proxyBody": "true",\n    "edc:proxyPath": "true",\n    "edc:proxyQueryParams": "true",\n    "edc:proxyMethod": "true",\n    "edc:contentType": "application/json"\n  }\n}\n\n')),(0,r.kt)("h4",{id:"payload-for-edc-policy"},"Payload for EDC Policy"),(0,r.kt)("p",null,'The following JSON is an policy definition including the policy "frameworkagreement pcf" and membership. The ',(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/fileadmin/user_upload/04_Einfuehren_und_umsetzen/Governance_Framework/Catena-X_UseCasePCFExchange_Beta-Phase_DE.pdf"},"frameworkagreement document")," is published via the association and are available via the Catena-X homepage. The membership credential is automatically created after finishing successfully the onboarding process."),(0,r.kt)("h5",{id:"payload-to-create-a-ssi-based-policy"},"Payload to create a SSI based Policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "@context": {\n        "odrl": "http://www.w3.org/ns/odrl/2/"\n    },\n    "@type": "PolicyDefinitionRequestDto",\n    "@id": "{{POLICY_ID}}",\n    "policy": {\n        "@type": "Policy",\n        "odrl:permission": [\n            {\n                "odrl:action": "USE",\n                "odrl:constraint": {\n                    "@type": "LogicalConstraint",\n                    "odrl:and": [\n                        {\n                            "@type": "Constraint",\n                            "odrl:leftOperand": "activeMember",\n                            "odrl:operator": {\n                                "@id": "odrl:eq"\n                            },\n                            "odrl:rightOperand": "active"\n                        },\n                        {\n                            "@type": "Constraint",\n                            "odrl:leftOperand": "FrameworkAgreement.pcf",\n                            "odrl:operator": {\n                                "@id": "odrl:eq"\n                            },\n                            "odrl:rightOperand": "active"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}\n\n')),(0,r.kt)("p",null,"For more examples how to define policies with SSI have a look ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md"},"here"),"."),(0,r.kt)("h4",{id:"payload-contract-definition"},"Payload Contract Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@id": "54ef3326-42b2-4221-8c5a-3a6270d54db8",\n    "edc:accessPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\n    "edc:contractPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\n    "edc:assetsSelector": [\n        {\n            "@type": "Criterion",\n            "edc:operandLeft": "@id",\n            "edc:operator": "=",\n            "edc:operandRight": "c34018ab-5820-4065-9087-416d78e1ab60"\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,'As Release 3.2 only covers the "happy path" for exchange PCF data via the Catena-X network. Error handling is currently not covered.'),(0,r.kt)("h2",{id:"standards"},"Standards"),(0,r.kt)("h3",{id:"used-cx-standards"},"Used CX Standards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0001-EDCDiscoveryAPI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0002-DigitalTwinsInCX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0003-SAMMSemanticAspectMetaModel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0006-RegistrationAndInitialOnBoarding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0013 Identity of Member Companies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0014 Employees and Technical Users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0015 IAM & Access Control Paradigm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0016 Company Attribute Verification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0017 Company Role by the Connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0018-SovereignDataExchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0026 PCF Data Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX-0029 Product Carbon Footprint Rulebook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"NeedtobeaddedbyAccociation"},"CX-0049-DID Document Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"NeedtobeaddedbyAccociation"},"CX-0050-Framework Agreement Credential")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"NeedtobeaddedbyAccociation"},"CX-0051-Summary Credential"))),(0,r.kt)("h2",{id:"other-standards"},"Other Standards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wbcsd.github.io/data-exchange-protocol/v2/"},"Pathfinder Framework"))),(0,r.kt)("h2",{id:"notice"},"NOTICE"),(0,r.kt)("p",null,"This work is licensed under the ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 ZF Friedrichshafen AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 T-Systems International GmbH"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 SAP SE"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 SIEMENS AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 SUPPLY ON AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Volkswagen AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Robert Bosch GmbH"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Mercedes Benz Group"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 BASF SE"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 CCT"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Gris Group"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Contributors to the Eclipse Foundation"),(0,r.kt)("li",{parentName:"ul"},"Source URL: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/pcf-exchange-kit"},"https://github.com/eclipse-tractusx/pcf-exchange-kit"))))}p.isMDXComponent=!0},26606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/BuildingblockView-35c18f71c1b39590544ca9c17e0e430c.png"},32721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PCFRequestthroughAAS-c4583114104521c2c0ed92814fb650f8.png"},99111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PCFUpdatepushthroughEDC-7ab7453a39d2c7707fe16108859d521e.png"}}]);