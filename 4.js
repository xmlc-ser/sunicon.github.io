webpackJsonp([4],{195:function(t,e,a){"use strict";function s(t){a(321)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(215),r=a(311),o=a(79),l=s,i=o(n.a,r.a,!1,l,"data-v-6ec246d4",null);e.default=i.exports},198:function(t,e,a){t.exports=a.p+"d94ebf867b2d84998684aecd24e34342.png"},199:function(t,e,a){t.exports=a.p+"51a11c046a64444332a16bfad33ee60c.png"},204:function(t,e,a){t.exports=a.p+"12a9d27a4381ccfeea4354ac730799df.png"},215:function(t,e,a){"use strict";e.a={data:function(){return{drawer:!1,news1:a(204),news2:a(198),news3:a(199)}},methods:{all:function(){for(var t=document.getElementsByClassName("ealogo"),e=document.getElementsByClassName("ealogo1"),a=document.getElementsByClassName("ealogo2"),s=0;s!=t.length;++s)t[s].style.display="block";for(var s=0;s!=e.length;++s)e[s].style.display="block";for(var s=0;s!=a.length;++s)a[s].style.display="block"},Company:function(){for(var t=document.getElementsByClassName("ealogo"),e=document.getElementsByClassName("ealogo1"),a=document.getElementsByClassName("ealogo2"),s=0;s!=t.length;++s)t[s].style.display="none";for(var s=0;s!=e.length;++s)e[s].style.display="none";for(var s=0;s!=a.length;++s)a[s].style.display="block"},Industry:function(){for(var t=document.getElementsByClassName("ealogo"),e=document.getElementsByClassName("ealogo1"),a=document.getElementsByClassName("ealogo2"),s=0;s!=t.length;++s)t[s].style.display="block";for(var s=0;s!=e.length;++s)e[s].style.display="none";for(var s=0;s!=a.length;++s)a[s].style.display="none"},Product:function(){for(var t=document.getElementsByClassName("ealogo"),e=document.getElementsByClassName("ealogo1"),a=document.getElementsByClassName("ealogo2"),s=0;s!=t.length;++s)t[s].style.display="block";for(var s=0;s!=e.length;++s)e[s].style.display="block";for(var s=0;s!=a.length;++s)a[s].style.display="none"}},directives:{focus:{inserted:function(t){t.focus()}}}}},258:function(t,e,a){e=t.exports=a(52)(void 0),e.push([t.i,"#app[data-v-6ec246d4]{font-family:Helvetica,sans-serif;margin:-8px -8px auto}.products[data-v-6ec246d4] .el-card{height:560px;width:400px;margin-top:20px;margin-left:20px;transition:all;float:left}.products[data-v-6ec246d4] .el-image{height:100%;width:400px}.products[data-v-6ec246d4] .el-col{padding-left:0!important;padding-right:0!important}.timecard[data-v-6ec246d4]{font-size:small;margin-top:20%;margin-left:2%}.products[data-v-6ec246d4] .hh5{text-align:start;color:#000}.ealogo1[data-v-6ec246d4] .el-divider,.ealogo2[data-v-6ec246d4] .el-divider,.ealogo[data-v-6ec246d4] .el-divider{background-color:#e6a23c!important;margin:10px!important;width:auto!important}.products[data-v-6ec246d4] .el-button{padding:18px 26px}.breadcrumb[data-v-6ec246d4]{background-color:#74706a;height:30px}.breadcrumb[data-v-6ec246d4] .el-breadcrumb{margin-top:.5%}.breadcrumb[data-v-6ec246d4] .el-breadcrumb__inner{color:#f0f8ff;font-size:16px}.breadcrumb[data-v-6ec246d4] .el-breadcrumb__inner:hover,.breadcrumb[data-v-6ec246d4] .el-breadcrumb__separator{color:#e6a23c}",""])},311:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products",staticStyle:{background:"#F2F6FC"}},[a("div",{staticClass:"breadcrumb"},[a("el-row",{attrs:{justify:"start",type:"flex"}},[a("el-col",{attrs:{span:1}}),t._v(" "),a("el-col",{attrs:{span:22}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("Home")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/news"}}},[t._v("News")])],1)],1),t._v(" "),a("el-col",{attrs:{span:1}})],1)],1),t._v(" "),a("el-row",{staticStyle:{background:"#E6A23C",height:"80px"},attrs:{justify:"start",type:"flex"}},[a("el-col",{attrs:{span:1}}),t._v(" "),a("el-col",{attrs:{span:22}},[a("h1",{staticStyle:{color:"#F2F6FC","text-align":"left"}},[t._v("News")])]),t._v(" "),a("el-col",{attrs:{span:1}})],1),t._v(" "),a("el-row",{staticStyle:{height:"80px","margin-top":"50px"},attrs:{justify:"start",type:"flex"}},[a("el-col",{attrs:{span:1}}),t._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:22}},[a("el-button-group",[a("el-button",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"warning",autofocus:!0,plain:""},on:{click:function(e){return t.all()}}},[t._v("ALL")]),t._v(" "),a("el-button",{attrs:{type:"warning",plain:""},on:{click:function(e){return t.Company()}}},[t._v("Company News")]),t._v(" "),a("el-button",{attrs:{type:"warning",plain:""},on:{click:function(e){return t.Industry()}}},[t._v("Industry News")]),t._v(" "),a("el-button",{attrs:{type:"warning",plain:""},on:{click:function(e){return t.Product()}}},[t._v("Product News")])],1)],1),t._v(" "),a("el-col",{attrs:{span:1}})],1),t._v(" "),a("el-row",{attrs:{justify:"start",type:"flex"}},[a("el-col",{attrs:{span:1}}),t._v(" "),a("el-col",{attrs:{span:22}},[a("el-divider")],1),t._v(" "),a("el-col",{attrs:{span:1}})],1),t._v(" "),a("el-row",{attrs:{justify:"start",type:"flex"}},[a("el-col",{attrs:{span:1}}),t._v(" "),a("el-col",{attrs:{span:22}},[a("el-row",{attrs:{gutter:20,justify:"center",type:"flex"}},[a("el-card",{staticClass:"ealogo",attrs:{"body-style":{padding:"0px"}}},[a("el-col",{attrs:{span:24}},[a("router-link",{attrs:{to:"/News/Ningbo-Fenghua-DVT-Spring-Co-ltd"}},[a("el-image",{attrs:{layz:"",src:t.news3,fit:"cover"}})],1),t._v(" "),a("el-divider"),t._v(" "),a("p"),a("h3",{staticClass:"hh5",staticStyle:{"margin-left":"2%"}},[t._v("\n                            Ningbo Fenghua DVT Spring Co.,Ltd.\n                        ")]),t._v(" "),a("p"),t._v(" "),a("p",{staticStyle:{"margin-left":"2%"}},[t._v("\n                            Ningbo Fenghua DVT Spring Co., Ltd. was founded in Fenghua, Ningbo, China in 2006. With\n                            more than 17\n                            years of ODM & OEM spring manufacturing experiences in Compression Springs, Extension\n                            Springs ,Torsion\n                            Springs, and Antenna Springs.\n                            DVT has rich technical production strength, and has become...")]),t._v(" "),a("div",{staticClass:"timecard",staticStyle:{"margin-top":"15%"}},[a("el-col",{attrs:{span:7}},[a("span",[t._v("2022-Oct-18")])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("span",{staticStyle:{"background-color":"black",color:"#EBEEF5"}},[t._v(" DVT ")])]),t._v(" "),a("el-col",{attrs:{span:8,offset:4}},[a("router-link",{attrs:{to:"/News/Ningbo-Fenghua-DVT-Spring-Co-ltd"}},[a("span",[t._v("READ MORE "),a("i",{staticClass:"el-icon-caret-right"})])])],1)],1)],1)],1),t._v(" "),a("el-card",{staticClass:"ealogo1",attrs:{"body-style":{padding:"0px"}}},[a("el-col",{attrs:{span:24}},[a("router-link",{attrs:{to:"/News/torsion-spring"}},[a("el-image",{attrs:{layz:"",src:t.news1,fit:"cover"}})],1),t._v(" "),a("el-divider"),t._v(" "),a("p"),a("h3",{staticClass:"hh5",staticStyle:{"margin-left":"2%"}},[t._v("\n                            Torsion Spring.\n                        ")]),t._v(" "),a("p"),t._v(" "),a("p",{staticStyle:{"margin-left":"2%"}},[t._v("\n                            A torsion spring is a spring that works by torsion or twisting. Mechanical\n                            energy is created when it\n                            is twisted. When it is twisted, it exerts a force (torque) in the opposite direction,\n                            proportional to\n                            the amount (angle) it is twisted. A torsion bar is a straight bar of metal that is\n                            subjected t...")]),t._v(" "),a("div",{staticClass:"timecard"},[a("el-col",{attrs:{span:7}},[a("span",[t._v("2022-Oct-18")])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("span",{staticStyle:{"background-color":"black",color:"#EBEEF5"}},[t._v(" DVT ")])]),t._v(" "),a("el-col",{attrs:{span:8,offset:4}},[a("router-link",{attrs:{to:"/News/torsion-spring"}},[a("span",[t._v("READ MORE "),a("i",{staticClass:"el-icon-caret-right"})])])],1)],1)],1)],1),t._v(" "),a("el-card",{staticClass:"ealogo2",attrs:{"body-style":{padding:"0px"}}},[a("el-col",{attrs:{span:24}},[a("router-link",{attrs:{to:"/News/DVT-Compression-Spring"}},[a("el-image",{attrs:{layz:"",src:t.news2,fit:"cover"}})],1),t._v(" "),a("el-divider"),t._v(" "),a("p"),a("h3",{staticClass:"hh5",staticStyle:{"margin-left":"2%"}},[t._v("\n                            DVT Compression Spring\n                        ")]),t._v(" "),a("p"),t._v(" "),a("p",{staticStyle:{"margin-left":"2%"}},[t._v("\n                            Compression springs are likely the most common spring that comes to mind when thinking\n                            of springs.\n                            These types of springs will compress and become shorter when loaded and can be used for\n                            a variety of\n                            applications.\n                            DVT Compression springs are helical, or coiled, springs t...")]),t._v(" "),a("div",{staticClass:"timecard"},[a("el-col",{attrs:{span:7}},[a("span",[t._v("2022-Oct-18")])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("span",{staticStyle:{"background-color":"black",color:"#EBEEF5"}},[t._v(" DVT ")])]),t._v(" "),a("el-col",{attrs:{span:8,offset:4}},[a("router-link",{attrs:{to:"/News/DVT-Compression-Spring"}},[a("span",[t._v("READ MORE "),a("i",{staticClass:"el-icon-caret-right"})])])],1)],1)],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:1}})],1),t._v(" "),a("el-row",{attrs:{justify:"start",type:"flex"}},[a("el-col",{attrs:{span:1}}),t._v(" "),a("el-col",{attrs:{span:22}},[a("el-divider")],1),t._v(" "),a("el-col",{attrs:{span:1}})],1)],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},321:function(t,e,a){var s=a(258);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(80)("ac1e89a0",s,!0,{})}});
//# sourceMappingURL=4.js.map?d32307372994fb31e7b7