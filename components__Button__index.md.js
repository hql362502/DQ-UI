(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e.export,i=Object(l["useApiData"])(t),o=Object(n["useContext"])(l["context"]),m=o.locale,d=/^zh|cn$/i.test(m)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,d.name),r.a.createElement("th",null,d.description),r.a.createElement("th",null,d.type),r.a.createElement("th",null,d.default))),r.a.createElement("tbody",null,i[a].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},oTdM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("dEAq"),c=a("+pnj"),i=a("Zxc8"),o=r.a.memo((e=>{var t=e.demos,a=t["button-basic"].component,n=t["button-withsize"].component,o=t["button-withdisabled"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"button-\u6309\u94ae\u7ec4\u4ef6"},r.a.createElement(l["AnchorLink"],{to:"#button-\u6309\u94ae\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Button \u6309\u94ae\u7ec4\u4ef6"),r.a.createElement("p",null,"\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u6309\u94ae\u7c7b\u578b"},r.a.createElement(l["AnchorLink"],{to:"#\u6309\u94ae\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u7c7b\u578b")),r.a.createElement(i["default"],t["button-basic"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u6309\u94ae\u5927\u5c0f"},r.a.createElement(l["AnchorLink"],{to:"#\u6309\u94ae\u5927\u5c0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u5927\u5c0f")),r.a.createElement(i["default"],t["button-withsize"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u6309\u94ae\u4e0d\u53ef\u9009"},r.a.createElement(l["AnchorLink"],{to:"#\u6309\u94ae\u4e0d\u53ef\u9009","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u4e0d\u53ef\u9009")),r.a.createElement(i["default"],t["button-withdisabled"].previewerProps,r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{src:"./button.tsx",identifier:"button",export:"default"}))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:a})}}}]);