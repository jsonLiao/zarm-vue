(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{658:function(t,e,a){},660:function(t,e,a){"use strict";var n=a(658);a.n(n).a},661:function(t,e,a){"use strict";var n={data:()=>({}),components:{},created(){},mounted(){},methods:{}},s=(a(660),a(0)),o=Object(s.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);e.a=o.exports},669:function(t,e,a){},748:function(t,e,a){"use strict";var n=a(669);a.n(n).a},815:function(t,e,a){"use strict";a.r(e);var n=a(728),s=a.n(n),o=a(746),c=a.n(o),i=a(747),r=a.n(i),l={components:{Container:a(661).a},data:()=>({marked:r.a,changeLogs:[]}),created(){const t=this;s.a.get("https://api.github.com/repos/ZhonganTechENG/zarm-vue/releases").then(function(e){console.log(e),t.changeLogs=e.data}).catch(function(t){console.log(t)}).then(function(){})},methods:{getFormatDate:t=>c()(t).format("YYYY-MM-DD")}},u=(a(748),a(0)),d=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Container",{staticClass:"document-quick-start"},t._l(t.changeLogs,function(e,n){return a("div",{key:n},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.tag_name))]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(t._s(t.getFormatDate(e.published_at)))])],1),t._v(" "),a("div",{staticClass:"text item",domProps:{innerHTML:t._s(t.marked(e.body))}})])],1)}),0)},[],!1,null,"79963983",null);e.default=d.exports}}]);