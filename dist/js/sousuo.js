"use strict";define(["jquery","text","handle","common","text!bj-list"],function(n,t,e,s,l){var o=window.localStorage,c=JSON.parse(o.getItem("name"))||[],a=n("#jl").html(),i=null;n.ajax({async:!1,url:"/home/serverList",dataType:"json",success:function(t){var e=(i=t).ads.concat(c);i.ads=e}}),n(".btn").on("click",function(){o.clear("name");var a=n.trim(n(".text").val());""!==a&&(c.push({ad_name:a}),o.setItem("name",JSON.stringify(c)),n.ajax({url:"/home/serverLists",data:{name:a},dataType:"json",success:function(t){console.log(t);var e={data:t.items.filter(function(t,e){return new RegExp(a,"g").test(t.title)})};console.log(e),n(".lists").html(""),e.data.length?s(l,e,".seresult"):n(".seresult").html("暂无数据信息")}}))}),s(a,i,".lists"),n("header>i").on("click",function(){console.log(1),location.href="http://localhost:8089"})});