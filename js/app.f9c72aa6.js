(function(A){function t(t){for(var a,n,o=t[0],r=t[1],c=t[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(A[a]=r[a]);l&&l(t);while(p.length)p.shift()();return e.push.apply(e,c||[]),s()}function s(){for(var A,t=0;t<e.length;t++){for(var s=e[t],a=!0,o=1;o<s.length;o++){var r=s[o];0!==i[r]&&(a=!1)}a&&(e.splice(t--,1),A=n(n.s=s[0]))}return A}var a={},i={app:0},e=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return A[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=A,n.c=a,n.d=function(A,t,s){n.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:s})},n.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},n.t=function(A,t){if(1&t&&(A=n(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)n.d(s,a,function(t){return A[t]}.bind(null,a));return s},n.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return n.d(t,"a",t),t},n.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=r;e.push([0,"chunk-vendors"]),s()})({0:function(A,t,s){A.exports=s("56d7")},"0e06":function(A,t,s){A.exports=s.p+"img/slide3.a46b1cac.png"},"12fb":function(A,t,s){A.exports=s.p+"img/ava.865a13f6.png"},2011:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAbCAYAAABMf3y8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAU1SURBVGhD7ZjbSyNJFMb3X22EMNAIQY2OEQxCmAdZVwdDUANBV9YZHyZC8qCDBtZISB6iEg1eI95igwa1JbaX1vhtneqOudgd293Zh0D94EBVnbqErq/POZ3fIBA4RIhF4BghFoFjhFgEjhFiEThGiEXgGCEWgWOEWASOeVcsT09PODg44EZtp7TKupeXF9zd3eH+/p63HVHWoakq1BrTHkwfQy/V+9SSbnoa0LX6ecy0N1ONs96Ms9+g5FJIpbeg1Jz9f/KuWG5ubjA3N4doNIpSqeT4gbbCOppDwrq4uOBGbUfnrQYgtbng7nC/2uBi0XRmEJAkuNxVn/v3OCreWpSoF5JLrttnesN0MoorAbhdxl6143jIIuxm5/sDGB/1szluhNdtBGlBPB6Hz+fjRm2n2Iql8iB3dnYwNDSEkZER7O/v4/HxEbqu2769rbCO1pA9Pz/j9vYWR0dHOD4+5m0aK5fL3OzQV4YhjabMXgMPCQxLAaTsl7+S/+aGJ6KYvXr09XHI7cNInL8VARfZHwloZl/7exDSlzhUs98Mek49PT11RmNOsBTL+fk5NjY2kE6nMTMzg8+fP6O3txezs7NIJpN8/PT01JxdpVXWFQoFrK2t4erqCoqiYG9vjxu1aez6+pqnJjvosuTJLbPXgBKDVw7DxltHJijBv2h1xSriXyQMJ62jBa3zRmtERmcygWbMbjOWlpbeiIXGnGAplt3dXUxMTMDr9aK7uxtdXV3cqN3X14dwOIzDw0NzdpVWWbe5uYmpqalXkdA+ZNSmqERi0rTKe/uWrUkZMksNrjYJksTSQTCBYiWS5MKQZZZSPpGPpZCOABJWOcgUhMxSj4vNo7Tmn80b0aKcYqnMh0DIa/jYGd4/s2YkURDzSgis8o7BB8TyyyMLhe/t7W2MjY3xh9/Z2cmN2sFgkD9Qq/DeKusoRVEhTFGnIpSK0RgJpVkaUnMxxJIKdDZFv2IX2y7B99OMEFdbiEVTRtGpq0gFZUgDCxYpghWoKzEs5FTWYr3DH/C1yQhTbcIvn+0ZOeY+qMYZRqT5b2IhfmnNQvmcwvDy8jI8Hg9/+GTUnp+f57md5jTSKutICCQYSjmNkaVYLPK6xWqdHeqi375mUOPwS37EHRQUPGJRerO4fCXigRTKslYRMR8TzkpNivqgWP4ttgUuXQKpjsIUhXkyatMXB12CHa2yjiLO5eXla+ohozbVQSQWe1Tk09m6z1Ve8JpiUfMpZAs1F8kLXguxPCjIpvN1AqOCl4vFYk1VLEA2JNUXxoUf8LSNw/DaQy/I+vo6IpEIQqEQN2rTGPnew1Ys9PlJG42OjmJ1dZVbIBDA5OQk/0y1oxXWUdSgFEbCODk54fPIqH12dsaFZB9ZVCwMsBRRKTDLLC2wN90ze8y76k8fJF8MipnFlCjre77D8NZQZp+/sszSiVkbaeyT+zXV6Eh9ZXv+lTfSkJ7HtKda8OpJJk62Z948I/+NCelryphrQy6Xw8DAAH+RrIx8NKcZtmKhvJ3JZPgDpQdLRiGavjLoguxohXUkBBIECYTeKIokZNSmP8aai4VRTCDQ4YKrnUUCl8T/R6mIA+UiEkFWtNL/J+0uSO5BxAumrwFt7zv8n9g+vFiuLWIZWhbT3soZDT4m2NSo2/iPhp3h6ggjU3Va0t/fbymSWqM5zbAVi+B9dM3qH1cT+nfW1lmPXtJ4sWyFzl4GO99HzrASh5U1Q4hF4BghFoFjhFgEjhFiEThGiEXgGCEWgWOEWASOEWIROAT4B5ihN7Hjy0aoAAAAAElFTkSuQmCC"},"2ef5":function(A,t,s){A.exports=s.p+"img/slide4.3a1e2434.png"},"30a5":function(A,t,s){A.exports=s.p+"img/slide1.4524bd68.png"},"40c3":function(A,t,s){A.exports=s.p+"img/4brand.6373d70f.png"},"56d7":function(A,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-app",[a("v-main",{staticClass:"main-screen",class:{active:A.about||A.info}},[a("v-container",{staticClass:"container-custom"},[A.info?a("div",{staticClass:"page info-page"},[a("div",{staticClass:"info-page--content"},[A.hideTitle?A._e():a("div",{staticClass:"go-home-btn",on:{click:A.closeInfo}},[A._v("×")]),A.hideTitle?a("div",{staticClass:"title-window-inner",on:{click:A.closeTitle}},[a("div",{staticClass:"info-page--title title-window"},[a("span",{staticClass:"close-btn"},[A._v("×")]),A._v(" Hi, my name is "),a("span",[A._v("Vijay")]),A._v(" & i'm a "),a("span",[A._v("professional sport analyst!")]),A._v(". "),a("br"),a("br"),A._v(" With me people earn money online on sport events like kricket 🏏, footbal ⚽️. tennis 🎾 etc. "),a("br"),a("br"),A._v(" My app will help you to have a stable income on "),a("span",[A._v("3000 rupees")]),A._v(". "),a("div",{staticClass:"buttons-banner"},[a("v-btn",{staticClass:"button-custom button-custom-blue",staticStyle:{background:"#29aaec !important"},attrs:{medium:"",rounded:"",color:"primary",dark:""}},[a("a",{attrs:{href:"#telegram"}},[A._v("join telegram")])]),a("v-btn",{staticClass:"button-custom button-custom-green",staticStyle:{background:"rgb(51, 214, 132) !important"},attrs:{medium:"",rounded:"",color:"primary",dark:""}},[a("a",{attrs:{href:"#whatsapp"}},[A._v("join whatsapp")])])],1)])]):A._e(),a("div",{staticClass:"info-page--carousel"},[a("div",{staticClass:"info-page--carousel-wrap"},[a("v-carousel",{attrs:{cycle:"",height:"100%","hide-delimiter-background":"","show-arrows-on-hover":""}},A._l(A.slides,(function(t,s){return a("v-carousel-item",{key:s},[a("v-sheet",{attrs:{color:A.colors[s],height:"100%"}},[a("div",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"slide-image-bg"},[a("img",{staticClass:"slide-image-full",attrs:{src:t}})])])])],1)})),1)],1)])])]):A._e(),A.about||!A.isPwa?a("div",{staticClass:"page about"},[a("div",{staticClass:"content-screen-custom"},[a("header",{staticClass:"header"},[a("div",{staticClass:"user-img"},[a("img",{attrs:{src:s("12fb")}})]),a("div",{staticClass:"user-title"},[A._v("Contact with me and start earn")]),a("div",{staticClass:"question-btn",on:{click:A.showInfo}},[A._v("About me "),a("span",[a("img",{attrs:{src:s("8615")}})])])]),a("main",[a("div",{staticClass:"nav-buttons"},[a("v-btn",{staticClass:"button-custom button-custom-green",staticStyle:{background:"#33d684 !important"},attrs:{large:"",rounded:"",color:"primary",dark:""}},[a("a",{attrs:{href:"#"}},[A._v("write whatsapp")])]),a("v-btn",{staticClass:"button-custom button-custom-blue",staticStyle:{background:"#29aaec !important"},attrs:{large:"",rounded:"",color:"primary",dark:""}},[a("a",{attrs:{href:"#"}},[A._v("join telegram")])]),a("div",{staticClass:"nav-logos"},[a("div",{staticClass:"nav-logos__wrap"},[a("div",{staticClass:"items"},[a("div",{staticClass:"items__wrap"},[a("img",{attrs:{src:s("6a57")}})])]),a("div",{staticClass:"items"},[a("div",{staticClass:"items__wrap"},[a("img",{attrs:{src:s("c9ec")}})])]),a("div",{staticClass:"items"},[a("div",{staticClass:"items__wrap"},[a("img",{attrs:{src:s("cedc")}})])]),a("div",{staticClass:"items"},[a("div",{staticClass:"items__wrap"},[a("img",{attrs:{src:s("40c3")}})])])])])],1)]),a("footer",[a("ul",[a("li",{staticClass:"copy"},[A._v("© 2021 VIjay Inc")]),a("li",{on:{click:function(t){A.dialog=!0}}},[A._v("Terms & Conditions")]),a("li",{on:{click:function(t){A.dialog=!0}}},[A._v("Privacy")])])])])]):A._e(),A.isPwa?a("div",{staticClass:"page download-page"},[a("div",{staticClass:"header-page"},[a("div",{staticClass:"menu-icon"},[a("img",{attrs:{src:s("6090")}})]),a("div",{staticClass:"logo"},[a("img",{attrs:{src:"https://ssl.gstatic.com/android/market_images/web/play_prism_hlock_m.png"}})]),a("div",{staticClass:"search-icon"},[a("img",{attrs:{src:s("8892")}})])]),a("div",{staticClass:"content-page"},[a("div",{staticClass:"content-page-flex"},[a("div",{staticClass:"col-install"},[a("div",{staticClass:"content-page-image"},[A.loader?a("div",{staticClass:"loader"},[a("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[a("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"1","stroke-miterLimit":"10"}})])]):A._e(),a("img",{class:{"animate-img":A.animateImg},attrs:{src:s("fcb6")}})])]),a("div",{staticClass:"col-install col-install-big"},[a("div",{staticClass:"title-custom1"},[A._v("Vijay™")]),A.isTimer?a("div",{staticClass:"loading"},[a("span",[A._v(A._s(A.time))]),A._v("% из 2.3MB")]):A._e(),a("div",{staticClass:"description"},[a("span",[A._v("Games")]),a("span",[a("img",{attrs:{src:"https://play-lh.googleusercontent.com/QNpsl4k43vdbfwUAlVLZul2W5O5MUGOToystzghc97mljVHbUwtc639tahcuDsAVHdaGMyZA40AmMVcB_ws=w56-h14"}})])]),a("div",{staticClass:"rating"},[a("img",{attrs:{src:s("2011")}})])])]),a("div",{staticClass:"panel-btns"},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:A.isDisabledBtn,expression:"isDisabledBtn"}],staticClass:"button-custom button-custom-green installApp",staticStyle:{background:"#689f38 !important"},attrs:{id:"installBtnApp",medium:"",color:"primary",dark:""},on:{click:A.ckickInstallBtn}},[A._v(" install ")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!A.isDisabled||"installed"===A.installed,expression:"!isDisabled || installed === 'installed'"}],staticClass:"button-custom button-custom-green openApp",staticStyle:{background:"#689f38 !important"},attrs:{medium:"",color:"primary",dark:""},on:{click:A.openApp}},[A._v(" open ")])],1),a("div",{staticClass:"add-to-favorites"},[a("span",[a("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABX0lEQVR4AWJABqHd+nBsnAkong40G4aiMADLTWC79N7EYFCg6FPsFfYC2wvsSYY+SekzbK+ybgVZWRLEdLI//OE47Dq2WMMnevKfc+qmXWYmJHunKzXcpRvsPakGDxFCCjPeNBxBx/sd1NBaMHsvZ+hrfJAxcAEvMECjBnUkaw2ze7jkjCy1IMIHG5fqqPxIHg0zDXuiZUEQ3zxMDeQpU/mWPcG6oKUoXvoC3mgh6lHkzQt0A4+CdR5dIm9a0IGnV+jhRD1rnrp/X3D+I6KgXvKe+JJnWoC7o5LcaM4FBeTiW+dQzLGgQk0+ux6pWvWXBZG1NWzgnTaw/tUfTTQ0cAtb+IQBvmhgbctMw55oWVBCzSEn3nvYwQ3tWJOZGkrrgiObDvAIq6lR5FZ8dmD2aF1wBc/woP4HDnJyoh6YfYLqxwX6Jyg+F3KgXJjK6UsvydiQyaEyl8omh2uJy9T3Dfyj+4EPdaDZAAAAAElFTkSuQmCC"}})]),a("span",[A._v("Add to Favorites")])]),a("div",{staticClass:"banners-scroll"},[a("div",{staticClass:"banners-scroll_wrap"},[a("div",{staticClass:"banners-scroll_el"},[a("img",{attrs:{src:s("30a5")}})]),a("div",{staticClass:"banners-scroll_el"},[a("img",{attrs:{src:s("85c8")}})]),a("div",{staticClass:"banners-scroll_el"},[a("img",{attrs:{src:s("0e06")}})]),a("div",{staticClass:"banners-scroll_el"},[a("img",{attrs:{src:s("2ef5")}})])])]),a("div",{staticClass:"about-up"},[a("p",[A._v(" Vijay - Top 1 app in India that helps to earn money. The application allows you to earn over 3000 rupees daily ")]),a("p",[A._v(" All you need is to install the app. For your earnings, all that is needed is a phone and Whatsapp. Many users have signed out our application as the most convenient way to make money quickly in India. 20,000+ satisfied customers. ")])]),a("div",{staticClass:"reviews"},[a("div",{staticClass:"reviews-title"},[A._v("Reviews")]),a("div",{staticClass:"reviews-content"},[a("img",{attrs:{src:s("6ed1")}})])]),a("div",{staticClass:"comments"},[a("div",{staticClass:"comment-item"},[a("div",{staticClass:"comment-wrap"},[a("div",{staticClass:"comment-ava",staticStyle:{background:"tomato"}},[a("span",[A._v("dr")])]),a("div",{staticClass:"comment-content"},[a("div",{staticClass:"comment-header"},[a("div",{staticClass:"name"},[A._v("Dhruv Rathore")]),a("div",{staticClass:"rating"},[a("img",{attrs:{src:s("d838")}})]),a("div",{staticClass:"date"},[A._v("28th October 2021")])]),a("div",{staticClass:"commnet-body"},[A._v(" My review after 3 months of usage. At first it was difficult to understand how to make money. But thanks to the Telegram channel and instructions, you can figure it out without any problems. But also thank you, Vijay. You have always answered on time, did not ignore my silly questions. Thanks again for teaching me everything. I can proudly say that after 3 months I manage to earn 5000 rupees a day. ")])])])]),a("div",{staticClass:"comment-item"},[a("div",{staticClass:"comment-wrap"},[a("div",{staticClass:"comment-ava",staticStyle:{background:"teal"}},[a("span",[A._v("ia")])]),a("div",{staticClass:"comment-content"},[a("div",{staticClass:"comment-header"},[a("div",{staticClass:"name"},[A._v("Ishant Agastya")]),a("div",{staticClass:"rating"},[a("img",{attrs:{src:s("d838")}})]),a("div",{staticClass:"date"},[A._v("23th October 2021")])]),a("div",{staticClass:"commnet-body"},[A._v(" Thanks a lot! in just a week I was able to earn 15,000 rupees. I am giving it five 5 stars! ")])])])]),a("div",{staticClass:"comment-item"},[a("div",{staticClass:"comment-wrap"},[a("div",{staticClass:"comment-ava",staticStyle:{background:"#777799"}},[a("span",[A._v("as")])]),a("div",{staticClass:"comment-content"},[a("div",{staticClass:"comment-header"},[a("div",{staticClass:"name"},[A._v("Ayush Sharma")]),a("div",{staticClass:"rating"},[a("img",{attrs:{src:s("d838")}})]),a("div",{staticClass:"date"},[A._v("20th October 2021")])]),a("div",{staticClass:"commnet-body"},[A._v(" Guys, they even have a Telegram channel. This is a huge advantage that I can see how Vijay earns himself and I do it with him. You are the best. My life just changed for the better. Now my family is prosperous and I can afford to buy anything. I give 4 stars so that there is something to strive for. ")])])])])]),a("div",{staticClass:"reviews-title"},[A._v("Additional Information")]),a("div",{staticClass:"comments additional-info"},[a("ul",[a("li",{staticClass:"title"},[A._v("Updated")]),a("li",{staticClass:"description"},[A._v("5th October 2021")]),a("li",{staticClass:"title"},[A._v("Size")]),a("li",{staticClass:"description"},[A._v("2.3 MB")]),a("li",{staticClass:"title"},[A._v("Installs")]),a("li",{staticClass:"description"},[A._v("120111")]),a("li",{staticClass:"title"},[A._v("Current version")]),a("li",{staticClass:"description"},[A._v("3.1")]),a("li",{staticClass:"title"},[A._v("Developer")]),a("li",{staticClass:"description"},[A._v("Vijay Inc")])])])])]):A._e()])],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:A.dialog,callback:function(t){A.dialog=t},expression:"dialog"}},[void 0,a("v-card",[a("v-card-title",{staticClass:"text-h5"},[A._v(" Confirming Policy "),a("br"),A._v("Page Service ")]),a("v-card-text",[A._v("You must be 19 or older to view this page. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){A.dialog=!1}}},[A._v(" verify age ")])],1)],1)],2)],1)},e=[],n={name:"App",data:function(){return{isPwa:!1,deferredPrompt:null,dialog:!1,about:!1,info:!1,hideTitle:!0,isDownloadPage:!0,isInstalled:!1,loader:!1,animateImg:!1,isTimer:!1,isDisabled:!0,isDisabledBtn:!0,time:0,isRunning:!1,interval:null,installed:"",colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4","indigo","pink darken-2"],slides:["https://i.ibb.co/qWnNT40/screen1.jpg","https://i.ibb.co/yhXhG3Q/screen2.jpg","https://i.ibb.co/tL0p0cr/screen3.jpg","https://i.ibb.co/NScZxNz/screen4.jpg","https://i.ibb.co/d2PJ2zT/screen5.jpg","https://i.ibb.co/p26bp3D/screen6.jpg","https://i.ibb.co/qWnNT40/screen1.jpg"]}},methods:{openApp:function(){console.log("opened"),this.about=!0,this.isInstalled=!1},toggleTimer:function(){this.isRunning?clearInterval(this.interval):this.interval=setInterval(this.incrementTime,10),this.isRunning=!this.isRunning},incrementTime:function(){this.time<100?(this.time=parseInt(this.time)+1,this.isDisabledBtn=!0):(this.animateImg=!1,this.loader=!1,this.isTimer=!1,this.isDisabled=!1,this.isDisabledBtn=!1)},showInfo:function(){this.info=!0,this.about=!1},closeInfo:function(){this.info=!1,this.about=!0},closeTitle:function(){this.hideTitle=!1},ckickInstallBtn:function(){this.animateImg=!0,this.loader=!0,this.toggleTimer(),this.isTimer=!0,this.isDisabled=!1}},mounted:function(){localStorage.setItem("installed","installed"),this.installed=localStorage.installed,"installed"===localStorage.installed&&(this.isPwa=!0,console.log("away intalled"),console.log(this.isPwa))},created:function(){var A=this;window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),A.deferredPrompt=t;var s=document.querySelector("#installBtnApp");s.addEventListener("click",(function(){A.deferredPrompt.prompt(),A.deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?(console.log("User accepted the A2HS prompt"),A.deferredPrompt.prompt(),console.log("USER ACCEPT INSTALL")):console.log("User dismissed the A2HS prompt"),A.deferredPrompt=null}))}))}))}},o=n,r=(s("5c0b"),s("2877")),c=s("6544"),l=s.n(c),d=s("7496"),p=s("8336"),g=s("b0af"),u=s("99d9"),v=s("5e66"),m=s("3e35"),f=s("a523"),b=s("169a"),h=s("f6c4"),C=s("8dd9"),w=s("2fa4"),q=Object(r["a"])(o,i,e,!1,null,null,null),y=q.exports;l()(q,{VApp:d["a"],VBtn:p["a"],VCard:g["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCarousel:v["a"],VCarouselItem:m["a"],VContainer:f["a"],VDialog:b["a"],VMain:h["a"],VSheet:C["a"],VSpacer:w["a"]});var j=s("9483");Object(j["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(A){console.error("Error during service worker registration:",A)}});var I=s("f309");a["a"].use(I["a"]);var D=new I["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:D,render:function(A){return A(y)}}).$mount("#app")},"5c0b":function(A,t,s){"use strict";s("9c0c")},6090:function(A,t){A.exports="data:image/png;base64,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"},"6a57":function(A,t,s){A.exports=s.p+"img/1brand.5f1df609.png"},"6ed1":function(A,t,s){A.exports=s.p+"img/reviews.11f06395.png"},"85c8":function(A,t,s){A.exports=s.p+"img/slide2.4d1294c5.png"},8615:function(A,t){A.exports="data:image/png;base64,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"},8892:function(A,t,s){A.exports=s.p+"img/magnifying-glass.e44e8f6a.png"},"9c0c":function(A,t,s){},c9ec:function(A,t,s){A.exports=s.p+"img/2brand.de7a8405.png"},cedc:function(A,t,s){A.exports=s.p+"img/3brand.f94ba3eb.png"},d838:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAXCAYAAACYuRhEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGFSURBVFhH7ZW7qsJAEIbPO0dRH0IQCxErQbATFAQbi4BpEsFKQWxUkECqeEETiPE/zCAIwVGErZb5YGFJ5hK+3ez+QTGCijSEijSEijSEijSEijTEV5GPxwNZlmG322G/3+N+v/Ozb9ieV0QUScXyPOfCx+MRo9EI4/EY5/OZn9G7dw1tz5MQRVIxWqnb7YbVaoV6vY5Go4H1eo3r9YokSZCm6TP6he15EqLIw+GAxWKB2WyGXq+HSqWCarWKfr8P13XheR622+0z+oXteRKiyOVyiVarxcXL5TJKpRIPmtdqNXQ6HWw2m2f0C9vzJESRtLWpWbvd5gaO4/CgOX0A/QIUU8T2PImPZySdFbTNiys2mUxwuVw4pojteRKiSLqxqNF0OuXzg7Y7DZoPh0O+3ehmK2J7noQokopQscFggGazCd/3EQQBz7vdLuI4ftvI9jyJjyJpe8/nc4RhyKtHI4oivtFOp9PbrW97noQoUvkNFWkIFWkIFWkIFWkIFWkIFWkE4B8p8hoHAnYAWAAAAABJRU5ErkJggg=="},fcb6:function(A,t,s){A.exports=s.p+"img/app_logo.17b02fbc.png"}});
//# sourceMappingURL=app.f9c72aa6.js.map