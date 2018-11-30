(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{181:function(s,a,t){},183:function(s,a,t){"use strict";var n=t(181);t.n(n).a},185:function(s,a,t){"use strict";var n={data:()=>({}),components:{},created(){},mounted(){},methods:{}},l=(t(183),t(1)),v=Object(l.a)(n,function(){var s=this.$createElement,a=this._self._c||s;return a("main",[a("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);a.a=v.exports},195:function(s,a,t){"use strict";var n=t(196),l=t.n(n);a.default=l.a},196:function(s,a){},197:function(s,a,t){},264:function(s,a,t){"use strict";var n=t(267),l=t(195),v=t(1),e=Object(v.a)(l.default,n.a,n.b,!1,null,null,null);a.default=e.exports},265:function(s,a,t){"use strict";var n=t(197);t.n(n).a},267:function(s,a,t){"use strict";var n=function(){var s=this.$createElement;this._self._c;return this._m(0)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("div",{staticClass:"zarm-vue-demo"}),t("div",{staticClass:"zarm-markdown-doc"},[t("p",{attrs:{align:"center"}},[t("a",{attrs:{href:"http://zarm.design"}},[t("img",{attrs:{width:"200",src:"https://zarm.design/images/logo.ce68565d.svg"}})])]),s._v(" "),t("h1",{attrs:{align:"center"}},[s._v("Zarm Vue")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("p",[t("a",{attrs:{href:"https://www.travis-ci.org/ZhonganTechENG/zarm-vue"}},[t("img",{attrs:{src:"https://www.travis-ci.org/ZhonganTechENG/zarm-vue.svg?branch=master",alt:"Build Status"}})]),s._v(" "),t("a",{attrs:{href:"https://coveralls.io/github/ZhonganTechENG/zarm-vue?branch=master"}},[t("img",{attrs:{src:"https://img.shields.io/coveralls/ZhonganTechENG/zarm-vue/master.svg",alt:"Coverage Status"}})]),s._v(" "),t("a",{attrs:{href:"https://www.npmjs.org/package/zarm-vue"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/zarm-vue.svg",alt:"npm package"}})]),s._v(" "),t("a",{attrs:{href:"https://npmjs.org/package/zarm-vue"}},[t("img",{attrs:{src:"https://img.shields.io/npm/dm/zarm-vue.svg",alt:"NPM downloads"}})]),s._v(" "),t("img",{attrs:{src:"http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.umd.js?compression=gzip&label=gzip%20size:%20JS",alt:"JS gzip size"}}),s._v(" "),t("img",{attrs:{src:"http://img.badgesize.io/https://unpkg.com/zarm-vue@latest/zarm-vue.default.css?compression=gzip&label=gzip%20size:%20CSS",alt:"CSS gzip size"}}),s._v(" "),t("a",{attrs:{href:"https://www.npmjs.com/package/zarm-vue"}},[t("img",{attrs:{src:"https://img.shields.io/npm/l/zarm-vue.svg",alt:"License"}})])])]),s._v(" "),t("h3",[s._v("版本")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("稳定版："),t("a",{attrs:{href:"https://www.npmjs.org/package/zarm-vue"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/zarm-vue.svg",alt:"npm package"}})])])]),s._v(" "),t("li",[t("p",[s._v("开发版："),t("a",{attrs:{href:"https://www.npmjs.org/package/zarm-vue"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/zarm-vue/alpha.svg",alt:"npm package"}})])])])]),s._v(" "),t("h3",[s._v("Install 安装")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm install zarm-vue --save\n")])]),s._v(" "),t("h3",[s._v("Import 引入")]),s._v(" "),t("ul",[t("li",[s._v("全组件引入")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v(";\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" zarmVue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'zarm-vue'")]),s._v(";\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 引入全局样式")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'zarm-vue/zarm-vue.default.css'")]),s._v(";\nVue.use(zarmVue);\n")])]),s._v(" "),t("ul",[t("li",[s._v("按需引入")])]),s._v(" "),t("p",[s._v("借助"),t("code",[s._v("ElementUI")]),s._v("提供的"),t("a",{attrs:{href:"https://github.com/ElementUI/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),s._v(" "),t("p",[s._v("首先，安装 babel-plugin-component：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),t("p",[s._v("然后，将 .babelrc 添加：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("{  \n  "),t("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n  "),t("span",{staticClass:"hljs-string"},[s._v('"plugins"')]),s._v(": [["),t("span",{staticClass:"hljs-string"},[s._v('"component"')]),s._v(", {\n      "),t("span",{staticClass:"hljs-string"},[s._v('"libraryName"')]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v('"zarm-vue"')]),s._v(",\n      "),t("span",{staticClass:"hljs-string"},[s._v('"styleLibraryName"')]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v('"theme"')]),s._v("\n    }\n  ]]\n}\n")])]),s._v(" "),t("p",[s._v("接下来，如果你只希望引入部分组件，比如 Button 和 Alert，那么需要在 main.js 中写入以下内容：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Button, Alert } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'zarm-vue'")]),s._v("\nVue.use(Button)\nVue.use(Alert)\n")])]),s._v(" "),t("ul",[t("li",[s._v("也可以通过cdn引入umd模块")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-meta"},[s._v("<!DOCTYPE html>")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("charset")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import CSS --\x3e")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/zarm-vue@1.1.2/zarm-vue.default.css"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/vue@2.5.11/dist/vue.min.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/zarm-vue@1.1.2/zarm-vue.umd.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"app"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("普通按钮"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"actionscript"},[s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n    el: "),t("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v("\n  })\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n\n")])]),s._v(" "),t("h3",[s._v("Theme 自定义主题")]),s._v(" "),t("p",[s._v("clone本仓库后先安装依赖，然后通过修改 "),t("code",[s._v("styles/variables.scss")]),s._v(" 文件重写sass变量。运行下面命令生成新样式")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm run build:theme\n")])]),s._v(" "),t("p",[s._v("新生成的样式文件： "),t("code",[s._v("lib/zarm-vue.default.css")])])])])}];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l})},351:function(s,a,t){"use strict";t.r(a);var n=t(185),l=t(264),v={components:{Container:n.a,Demo:l.default}},e=(t(265),t(1)),i=Object(e.a)(v,function(){var s=this.$createElement,a=this._self._c||s;return a("Container",{staticClass:"document-quick-start"},[a("Demo")],1)},[],!1,null,"b0f82e34",null);a.default=i.exports}}]);
//# sourceMappingURL=41.7459638f7af79c1008c6.js.map