(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-620bfcda"],{"143cf":function(t,e,a){"use strict";a("f658")},"990b":function(t,e,a){"use strict";a("eb28")},c1f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"layout-content"},[t.$route.meta.keepAlive?a("keep-alive",[a("router-view")],1):a("router-view")],1),a("div",{staticClass:"layout-footer"},[a("TabBar",{attrs:{data:t.tabbars},on:{change:t.handleChange}})],1)])},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{attrs:{fixed:"",route:""},on:{change:t.handleChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.data,(function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.to,icon:e.icon}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)},c=[],r=(a("a9e3"),{name:"TabBar",props:{defaultActive:{type:Number,default:0},data:{type:Array,default:function(){return[]}}},data:function(){return{active:this.defaultActive}},methods:{handleChange:function(t){this.$emit("change",t)}}}),u=r,s=(a("990b"),a("2877")),l=Object(s["a"])(u,i,c,!1,null,"4611afee",null),f=l.exports,d={name:"AppLayout",data:function(){return{tabbars:[{title:"客户信息",to:{name:"CustomerInformation"},icon:"friends-o"},{title:"客户列表",to:{name:"CustomerList"},icon:"friends-o"},{title:"跟进信息",to:{name:"FollowUp"},icon:"friends-o"},{title:"话术素材",to:{name:"WordMaterial"},icon:"chat-o"}]}},components:{TabBar:f},methods:{handleChange:function(t){}}},b=d,v=(a("143cf"),Object(s["a"])(b,n,o,!1,null,"46538923",null));e["default"]=v.exports},eb28:function(t,e,a){},f658:function(t,e,a){}}]);