webpackJsonp([6],{196:function(n,e,t){var s=t(131)(t(243),t(322),null,null,null);n.exports=s.exports},200:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(208);t.n(s);e.default={data:function(){return{windowHeight:window.innerHeight}}}},201:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(209);t.n(s);e.default={}},202:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(210);t.n(s);e.default={props:["title"]}},203:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,".app-container{position:relative;background-color:#f6f6f6}.app-container .github{position:absolute;right:10px;top:10px}","",{version:3,sources:["/Users/chrisHchen/Desktop/t1/src/styles/components/src/styles/components/Container.scss","/Users/chrisHchen/Desktop/t1/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,eACE,kBAAkB,AAClB,wBAAyB,CAO1B,AATD,uBAKI,kBAAkB,AAClB,WCPe,ADQf,QCRe,CDShB",file:"Container.scss",sourcesContent:['@import "../core/func";\n\n.app-container {\n  position: relative;\n  background-color: #f6f6f6;\n\n  .github {\n    position: absolute;\n    right: r(10);\n    top: r(10);\n  }\n}\n\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},204:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"footer{text-align:center}.copyright{display:inline-block;margin:30px auto 50px;color:#ccc}.copyright-cn{font-size:14px}.copyright-en{font-size:12px}","",{version:3,sources:["/Users/chrisHchen/Desktop/t1/src/styles/components/src/styles/components/Footer.scss","/Users/chrisHchen/Desktop/t1/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,iBAAkB,CACnB,AAED,WACE,qBAAqB,AACrB,sBAA6B,AAC7B,UAAW,CASZ,AAPC,cACE,cCXe,CDYhB,AAED,cACE,cCfe,CDgBhB",file:"Footer.scss",sourcesContent:['@import "../core/func";\n\nfooter {\n  text-align: center;\n}\n\n.copyright {\n  display: inline-block;\n  margin: r(30) auto r(50) auto;\n  color: #ccc;\n\n  &-cn {\n    font-size: r(14);\n  }\n\n  &-en {\n    font-size: r(12);\n  }\n}',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},205:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"header{padding:15px}","",{version:3,sources:["/Users/chrisHchen/Desktop/t1/src/styles/components/src/styles/components/Header.scss","/Users/chrisHchen/Desktop/t1/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,YCFiB,CDGlB",file:"Header.scss",sourcesContent:['@import "../core/func";\n\nheader {\n  padding: r(15);\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},206:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageFooter.vue",sourceRoot:""}])},207:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageHeader.vue",sourceRoot:""}])},208:function(n,e,t){var s=t(203);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("800fcacc",s,!0)},209:function(n,e,t){var s=t(204);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("0a81e2ac",s,!0)},210:function(n,e,t){var s=t(205);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("ce2f83c8",s,!0)},211:function(n,e,t){var s=t(206);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("1fdd97df",s,!0)},212:function(n,e,t){var s=t(207);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("2af7cf9a",s,!0)},213:function(n,e,t){var s=t(131)(t(200),t(218),null,null,null);n.exports=s.exports},214:function(n,e,t){function s(n){t(211)}var o=t(131)(t(201),t(216),s,null,null);n.exports=o.exports},215:function(n,e,t){function s(n){t(212)}var o=t(131)(t(202),t(217),s,null,null);n.exports=o.exports},216:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",[t("div",{staticClass:"copyright"},[t("div",{staticClass:"copyright-cn"},[n._v("众安·体验设计中心")]),n._v(" "),t("div",{staticClass:"copyright-en"},[n._v("Zhongan UX Densign")])])])}]}},217:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("header",{staticClass:"Header"},[n._v(n._s(n.title))])},staticRenderFns:[]}},218:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container",style:{minHeight:n.windowHeight+"px"}},[t("a",{staticClass:"github",attrs:{href:"https://github.com/chrisHchen/zarm-vue"}},[t("svg",{attrs:{"aria-hidden":"true",height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32",fill:"#42b983"}},[t("path",{attrs:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},219:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,".badge-page .custom-panel{display:flex;justify-content:space-between;padding:25px;background:#fff}.badge-page .box-item{width:30px;height:30px;background:#ddd}","",{version:3,sources:["/Users/chrisHchen/Desktop/t1/src/styles/pages/src/styles/pages/BadgePage.scss","/Users/chrisHchen/Desktop/t1/src/styles/pages/src/styles/core/func.scss"],names:[],mappings:"AAEA,0BAEI,aAAa,AACb,8BAA8B,AAC9B,aCLe,ADMf,eAAgB,CACjB,AANH,sBAUM,WCXa,ADYb,YCZa,ADab,eAAgB,CACjB",file:"BadgePage.scss",sourcesContent:['@import "../core/func";\n\n.badge-page {\n  .custom-panel {\n    display: flex;\n    justify-content: space-between;\n    padding: r(25);\n    background: #fff;\n  }\n\n  .box {\n    &-item {\n      width: r(30);\n      height: r(30);\n      background: #ddd;\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},220:function(n,e,t){var s=t(219);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("67d6762b",s,!0)},243:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(213),o=t.n(s),r=t(215),i=t.n(r),c=t(214),a=t.n(c),l=t(220);t.n(l);e.default={components:{Container:o.a,PageHeader:i.a,PageFooter:a.a},data:function(){return{switch1:!1,switch2:!0,switch3:!1,switch4:!0,switch5:!1,switch6:!1}},methods:{handleChange:function(n){console.log(n)},handleChange2:function(){this.switch6=this.switch5}}}},322:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Container",{staticClass:"switch"},[t("PageHeader",{attrs:{title:"开关 Switch"}}),n._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("基本")])],1),n._v(" "),t("za-panel-body",[t("za-cell",[t("za-switch",{on:{"switch-change":n.handleChange},slot:"description",model:{value:n.switch1,callback:function(e){n.switch1=e},expression:"switch1"}}),n._v("\n            默认关\n          ")],1),n._v(" "),t("za-cell",[t("za-switch",{slot:"description",model:{value:n.switch2,callback:function(e){n.switch2=e},expression:"switch2"}}),n._v("\n            默认开\n          ")],1),n._v(" "),t("za-cell",[t("za-switch",{attrs:{disabled:""},slot:"description",model:{value:n.switch3,callback:function(e){n.switch3=e},expression:"switch3"}}),n._v("\n            禁用的开关（默认关）\n          ")],1),n._v(" "),t("za-cell",[t("za-switch",{attrs:{disabled:""},slot:"description",model:{value:n.switch4,callback:function(e){n.switch4=e},expression:"switch4"}}),n._v("\n            禁用的开关（默认开）\n          ")],1)],1)],1),n._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("受控开关")])],1),n._v(" "),t("za-panel-body",[t("za-cell",[t("za-switch",{on:{"switch-change":n.handleChange2},slot:"description",model:{value:n.switch5,callback:function(e){n.switch5=e},expression:"switch5"}}),n._v("\n            主开关\n          ")],1),n._v(" "),t("za-cell",[t("za-switch",{slot:"description",model:{value:n.switch6,callback:function(e){n.switch6=e},expression:"switch6"}}),n._v("\n            受控开关\n          ")],1)],1)],1)],1)]),n._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.03ca63d95450c7173bb8.js.map