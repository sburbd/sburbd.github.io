(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n.n(r),l=n(1),s=n(2),o=n(5),u=n(3),m=n(4),b=n(6),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement("h2",null,"- PEAK HOMESTUCK -"),i.a.createElement("h4",null,"aka Zich Sburbd"),i.a.createElement("p",{className:"zich-subtitle"},"* (where zich rhymes with peach)"),i.a.createElement("br",null),i.a.createElement("p",null,"he/him - 21 - UK"),i.a.createElement("p",null,"(web) Developer"),i.a.createElement("p",null,"check out my projects!"))}}]),t}(a.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(p,null))}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("br",null),[{name:"HS Comic Maker",style:"hscm",url:"https://sburbd.github.io/Homestuck-Comic-Maker"},{name:"Fansim Basemod",style:"hsch",url:"https://github.com/sburbd/friendsim-basemod"},{name:"Fansim Tutorial",style:"hsch",url:"https://sburbd.github.io/fansim"},{name:"Hiveswap Quirk Converter",style:"hsqc",url:"https://sburbd.github.io/hiveswap-quirk-generator"}].map(function(e,t){return i.a.createElement(f,{key:t,name:e.name,style:e.style,url:e.url})}),i.a.createElement("p",null,"All of the code can be viewed on ",i.a.createElement("a",{href:"https://github.com/sburbd",target:"_blank"},"GitHub")))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("a",{href:this.props.url,target:"_blank"},i.a.createElement("div",{className:"linkbtns "+this.props.style},i.a.createElement("p",null,this.props.name)))}}]),t}(a.Component),j=d,O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement("br",null),[{name:"Github",style:"github",url:"https://github.com/sburbd"},{name:"HS Twitter",style:"twitter",url:"https://twitter.com/sburbd"},{name:"Main Twitter",style:"twitter2",url:"https://twitter.com/zilchbot"}].map(function(e,t){return i.a.createElement(v,{key:t,name:e.name,style:e.style,url:e.url})}))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("a",{href:this.props.url,target:"_blank"},i.a.createElement("div",{className:"linkbtns "+this.props.style},i.a.createElement("p",null,this.props.name)))}}]),t}(a.Component),y=O,E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.details,t=this.props.actIn,n=[h,j,y];return i.a.createElement("div",{id:"content"},e.map(function(e,a){return i.a.createElement(k,{index:a,key:e.id,id:e.id+"-content",actIn:t,title:e.label,divName:e.divName,divTitle:n[a]})}))}}]),t}(a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,className:this.props.actIn===this.props.index?"visible":"invisible"},i.a.createElement(this.props.divTitle,null))}}]),t}(a.Component),g=E,w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){return n.setState({activeIndex:e})},n.state={activeIndex:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=[{id:"about",label:"About"},{id:"projects",label:"projects"},{id:"links",label:"links"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"btn-container"},t.map(function(t,n){return i.a.createElement(C,{key:t.id,id:t.id,index:n,isActive:e.state.activeIndex===n,label:t.label,onClick:e.handleClick})})),i.a.createElement(g,{handleClick:this.handleClick,details:t,actIn:this.state.activeIndex}))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){return n.props.onClick(n.props.index)},n.handleClick=n.handleClick.bind(Object(b.a)(Object(b.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{id:this.props.id,onClick:this.handleClick,className:"buttons "+(this.props.isActive?"active-btn":"default-btn")},this.props.label)}}]),t}(a.Component),I=w,N=(n(14),n(16),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={height:window.innerHeight};return i.a.createElement("div",{className:"page",style:e},i.a.createElement("button",{className:"switcher",onClick:function(){document.getElementById("transition-color").classList.toggle("fade"),setTimeout(function(){document.getElementById("transition-color").classList.toggle("fade")},500),setTimeout(function(){var e=document.getElementById("theme-color"),t=document.getElementById("cssStyles");t.href.includes("prospit")?t.setAttribute("href","derse.css"):t.setAttribute("href","prospit.css"),e.classList.toggle("fade")},200),setTimeout(function(){document.getElementById("theme-color").classList.toggle("fade")},300)}},"prospit/derse"),i.a.createElement("div",{className:"main animated fadeInBottom"},i.a.createElement(I,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.e0eebd7c.chunk.js.map