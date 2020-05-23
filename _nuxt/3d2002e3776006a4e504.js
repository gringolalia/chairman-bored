(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{266:function(t,e,r){"use strict";r.r(e);r(31),r(32),r(14);var o={head:function(){return{title:"Apex Charts"}},data:function(){return{areaChart:{options:{chart:{id:"areaChart"},colors:["#2451F2","#36D9B0"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}}},series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]},lineChart:{options:{chart:{id:"lineChart"},colors:["#2451F2","#36D9B0"],xaxis:{type:"datetime",categories:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003"]}},series:[{name:"Series A",data:[30,40,45,50,49,60,70,91]},{name:"Series B",data:[23,43,54,12,44,52,32,11]}]},barChart:{options:{chart:{id:"barChart"},colors:["#2451F2"],xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]},columnChart:{options:{chart:{id:"testChart"},colors:["#2451F2","#36D9B0","#FFCF0D"],plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,41,98,87,44,91,81,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]},mixedChart:{options:{chart:{id:"mixedChart",stacked:!1},colors:["#2451F2","#36D9B0","#FFCF0D"],stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return void 0!==t?t.toFixed(0)+" points":t}}}},series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]},donutChart:{options:{chart:{id:"donutChart"},labels:["Blue","Red","Green","Yellow"],colors:["#2451F2","#F2248F","#36D9B0","#FFCF0D"]},series:[11,32,45,32]},radialBarChart:{options:{colors:["#2451F2"],chart:{id:"radialBarChart"},labels:["Percent"]},series:[81]},bubbleChart:{options:{chart:{id:"bubbleChart"},colors:["#F22435"],dataLabels:{enabled:!1},fill:{opacity:.8,gradient:{enabled:!1}},title:{text:"Simple Bubble Chart"},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70}},series:[{name:"Bubble1",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}]},scatterChart:{options:{chart:{id:"scatterChart",zoom:{enabled:!1}},colors:["#2451F2","#F2248F","#36D9B0","#FFCF0D"],xaxis:{tickAmount:10},yaxis:{tickAmount:7}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}]},heatmapChart:{options:{chart:{id:"heatmapChart"},dataLabels:{enabled:!1},colors:["#FFCF0D"],xaxis:{type:"category"},title:{text:"HeatMap Chart (Single color)"}},series:[{name:"Metric1",data:this.generateData2(20,{min:0,max:90})},{name:"Metric2",data:this.generateData2(20,{min:0,max:90})},{name:"Metric3",data:this.generateData2(20,{min:0,max:90})},{name:"Metric4",data:this.generateData2(20,{min:0,max:90})},{name:"Metric5",data:this.generateData2(20,{min:0,max:90})},{name:"Metric6",data:this.generateData2(20,{min:0,max:90})},{name:"Metric7",data:this.generateData2(20,{min:0,max:90})},{name:"Metric8",data:this.generateData2(20,{min:0,max:90})},{name:"Metric9",data:this.generateData2(20,{min:0,max:90})}]},testChart:{options:{chart:{id:"testChart"}},series:[]}}},methods:{generateData:function(t,e,r){for(var i=0,o=[];i<e;){var n=Math.floor(750*Math.random())+1,l=Math.floor(Math.random()*(r.max-r.min+1))+r.min,h=Math.floor(61*Math.random())+15;o.push([n,l,h]),864e5,i++}return o},generateData2:function(t,e){for(var i=0,r=[];i<t;){var o=(i+1).toString(),n=Math.floor(Math.random()*(e.max-e.min+1))+e.min;r.push({x:o,y:n}),i++}return r}}},n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Apex Charts")]),t._m(0),r("div",{staticClass:"grid has-space"},[r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Area Chart")])]),r("VueApexCharts",{attrs:{type:"area",options:t.areaChart.options,series:t.areaChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Line Chart")])]),r("VueApexCharts",{attrs:{type:"line",options:t.lineChart.options,series:t.lineChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Bar Chart")])]),r("VueApexCharts",{attrs:{type:"bar",options:t.barChart.options,series:t.barChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Column Chart")])]),r("VueApexCharts",{attrs:{type:"bar",options:t.columnChart.options,series:t.columnChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Mixed Chart")])]),r("VueApexCharts",{attrs:{type:"line",options:t.mixedChart.options,series:t.mixedChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Donut Chart")])]),r("div",{staticStyle:{"max-width":"600px"}},[r("VueApexCharts",{attrs:{type:"donut",options:t.donutChart.options,series:t.donutChart.series}})],1)],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("RadialBar Chart")])]),r("div",{staticStyle:{"max-width":"600px"}},[r("VueApexCharts",{attrs:{type:"radialBar",options:t.radialBarChart.options,series:t.radialBarChart.series}})],1)],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Bubble Chart")])]),r("VueApexCharts",{attrs:{type:"bubble",options:t.bubbleChart.options,series:t.bubbleChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Scatter Chart")])]),r("VueApexCharts",{attrs:{type:"scatter",options:t.scatterChart.options,series:t.scatterChart.series}})],2)],1),r("div",{staticClass:"column is-desktop-6"},[r("AppCard",{staticClass:"is-full"},[r("template",{slot:"header"},[r("h4",{staticClass:"AppCard-title"},[t._v("Heatmap Chart")])]),r("VueApexCharts",{attrs:{type:"heatmap",options:t.heatmapChart.options,series:t.heatmapChart.series}})],2)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For docs visit "),e("a",{attrs:{href:"https://github.com/apexcharts/vue-apexcharts",target:"_blank"}},[e("code",[this._v("VueApexCharts")])])])}],!1,null,null,null);e.default=component.exports}}]);