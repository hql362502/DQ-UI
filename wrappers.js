(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},afA6:function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),i=t("q1tI"),a=t.n(i),o=t("q3YX"),p=t("9og8"),s=t("WmNS"),l=t.n(s),c=t("rlch"),d="import React from 'react';\nimport Alert from '../../alert';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",u="import React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n    children: React.ReactNode;\n    /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n    kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n    info: '#5352ED',\n    positive: '#2ED573',\n    negative: '#FF4757',\n    warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n    <div\n        className={prefixCls}\n        style={{\n            background: kinds[kind],\n        }}\n        {...rest}\n    >\n        {children}\n    </div>\n);\n\nAlert.propTypes = {\n    kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",f="import './index.less';",m="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  color: white;\n}",x={"alert-basic":{component:Object(c["c"])({loader:function(){var e=Object(p["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d},"index.tsx":{import:"../../alert",content:u},"style/index.ts":{import:"../style",content:f},"style/index.less":{import:"./index.less",content:m}},dependencies:{react:{version:"18.0.0"},"prop-types":{version:"15.8.1"}},componentName:"alert",identifier:"alert-basic"}}},v=t("x2v5"),h=t("KcUY"),b=t.n(h);n["default"]=e=>a.a.createElement(b.a,Object(r["a"])({},e,{config:o,demos:x,apis:v}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/alert":[{"title":"\u53cd\u9988","meta":{"order":1,"__fallback":true},"children":[{"path":"/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}}]}],"*":[{"path":"/","title":"DQ UI","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","order":2,"path":"/alert"}]},"title":"DQ UI","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(e){e.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);