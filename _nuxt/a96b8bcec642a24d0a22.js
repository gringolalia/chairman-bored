(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{269:function(e,t,l){"use strict";l.r(t);var o={head:function(){return{title:"DataTable"}},data:function(){return{basic:{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"YYYY-MM-DD",dateOutputFormat:"MMM Do YY"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"201-10-31:9: 35 am",score:.223343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.63343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.01343},{id:4,name:"Chris",age:55,createdAt:"2011-10-11",score:.08343},{id:5,name:"Dan",age:40,createdAt:"2011-10-21",score:.03143},{id:6,name:"John",age:20,createdAt:"2011-10-31",score:.0243}]},filter:{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"YYYY-MM-DD",dateOutputFormat:"MMM Do YY"},{label:"Status",field:"status",filterOptions:{enabled:!0,filterDropdownItems:["Approved","Waiting","Closed"]}}],rows:[{id:1,name:"John",age:20,createdAt:"201-10-31:9: 35 am",status:"Approved"},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",status:"Waiting"},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",status:"Closed"},{id:4,name:"Chris",age:55,createdAt:"2011-10-11",status:"Waiting"},{id:5,name:"Dan",age:40,createdAt:"2011-10-21",status:"Closed"},{id:6,name:"John",age:20,createdAt:"2011-10-31",status:"Approved"}]}}}},r=l(2),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h1",[e._v("DataTable")]),e._m(0),l("div",{staticClass:"grid has-space"},[l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Basic")])]),l("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,styleClass:"table"}})],2)],1),l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Search")])]),l("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"search-options":{enabled:!0},styleClass:"table"}})],2)],1),l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Fixed Header")])]),l("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"max-height":"200px","fixed-header":!0,styleClass:"table"}})],2)],1),l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Pagination")])]),l("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"pagination-options":{enabled:!0,perPage:3},styleClass:"table"}})],2)],1),l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Column Filter")])]),l("VueGoodTable",{attrs:{columns:e.filter.columns,rows:e.filter.rows,styleClass:"table"}})],2)],1),l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Checkbox Table")])]),l("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,"select-options":{enabled:!0},styleClass:"table"}})],2)],1),l("div",{staticClass:"column is-desktop-6"},[l("AppCard",{staticClass:"is-full"},[l("template",{slot:"header"},[l("h4",{staticClass:"AppCard-title"},[e._v("Rtl")])]),l("VueGoodTable",{attrs:{columns:e.basic.columns,rows:e.basic.rows,rtl:!0,styleClass:"table"}})],2)],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For docs visit "),t("a",{attrs:{href:"https://xaksis.github.io/vue-good-table",target:"_blank"}},[t("code",[this._v("Vue Good Table")])])])}],!1,null,null,null);t.default=component.exports}}]);