"use strict";function rem(e){document.documentElement.style.fontSize=window.screen.width/e+"px",window.onresize=function(){document.documentElement.style.fontSize=window.screen.width/e+"px"}}require.config({baseUrl:"/js/",paths:{jquery:"lib/jquery",handle:"lib/handlebars",text:"lib/text",swiper:"lib/swiper.min",bscroll:"lib/bscroll.min",common:"lib/common",commons:"lib/commons",base64:"lib/jquery.base64",bannerH:"../views/bannerH.html",bighotH:"../views/bighotH.html",girllove:"../views/girllove.html",free:"../views/free.html",zbtj:"../views/zbtj.html",beautiful:"../views/beautiful.html",uploading:"../views/uploading.html","bj-list":"../views/bj-list.html",sousuo:"sousuo",index:"index",detail:"detail",read:"read"},shim:{base64:{exports:"base64",deps:["jquery"]}}}),rem(3.75);