(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),l=n(1),s=n(2),o=n(4),u=n(3),m=n(5),d=n(6),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement("h2",null,"-PEAK HOMESTUCK-"),r.a.createElement("h4",null,"aka Zich Sburbd"),r.a.createElement("p",{className:"subtitle"},"* (where zich rhymes with peach)"),r.a.createElement("br",null),r.a.createElement("img",{width:"260px",src:"theatreofcooltysmall.png",alt:"my icon is from Theatre of Coolty (The Movie), written by duckface and acted out by NakedBee"}),r.a.createElement("p",{className:"subtitle"},"fyi, my icon is from ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=aIavjRkRKT0",target:"_blank",rel:"noopener noreferrer"},"Theatre of Coolty")),r.a.createElement("p",null,"he/him - 22 - UK"),r.a.createElement("p",null,"(web) Developer"),r.a.createElement("p",null,"check out my projects!"))}}]),t}(a.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(p,null))}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),[{name:"HS Comic Maker",style:"hscm",url:"https://sburbd.github.io/Homestuck-Comic-Maker"},{name:"Fansim Basemod",style:"fsbm",url:"https://github.com/sburbd/friendsim-basemod"},{name:"Fansim Tutorial",style:"fst",url:"https://sburbd.github.io/fansim"}].map(function(e,t){return r.a.createElement(f,{key:t,name:e.name,style:e.style,url:e.url})}),r.a.createElement("p",null,"All of the code can be viewed on ",r.a.createElement("a",{href:"https://github.com/sburbd",target:"_blank",rel:"noopener noreferrer"},"GitHub")))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"linkbtns "+this.props.style},r.a.createElement("p",null,this.props.name)))}}]),t}(a.Component),y=h,j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement("br",null),[{name:"Github",style:"github",url:"https://github.com/sburbd"},{name:"HS Twitter",style:"twitter",url:"https://twitter.com/sburbd"},{name:"Main Twitter",style:"twitter2",url:"https://twitter.com/zichington"}].map(function(e,t){return r.a.createElement(O,{key:t,name:e.name,style:e.style,url:e.url})}))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"linkbtns "+this.props.style},r.a.createElement("p",null,this.props.name)))}}]),t}(a.Component),E=j,v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.details,t=this.props.actIn,n=[b,y,E];return r.a.createElement("div",{id:"content"},e.map(function(e,a){return r.a.createElement(k,{index:a,key:e.id,id:e.id+"-content",actIn:t,title:e.label,divName:e.divName,divTitle:n[a]})}))}}]),t}(a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,className:this.props.actIn===this.props.index?"visible":"invisible"},r.a.createElement(this.props.divTitle,null))}}]),t}(a.Component),g=v,w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){return n.setState({activeIndex:e})},n.state={activeIndex:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=[{id:"about",label:"About"},{id:"projects",label:"projects"},{id:"links",label:"links"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"btn-container"},t.map(function(t,n){return r.a.createElement(C,{key:t.id,id:t.id,index:n,isActive:e.state.activeIndex===n,label:t.label,onClick:e.handleClick})})),r.a.createElement(g,{handleClick:this.handleClick,details:t,actIn:this.state.activeIndex}))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){return n.props.onClick(n.props.index)},n.handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{id:this.props.id,onClick:this.handleClick,className:"buttons "+(this.props.isActive?"active-btn":"default-btn")},this.props.label)}}]),t}(a.Component),I=w,N=(n(14),n(16),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={height:window.innerHeight};function t(){document.getElementById("transition-color").classList.toggle("fade"),setTimeout(function(){document.getElementById("transition-color").classList.toggle("fade")},500),setTimeout(function(){var e=document.getElementById("theme-color"),t=document.getElementById("cssStyles");t.href.includes("prospit")?(t.setAttribute("href","derse.css"),document.getElementById("switch").style.display="block",document.getElementById("switch2").style.display="none"):(t.setAttribute("href","prospit.css"),document.getElementById("switch").style.display="none",document.getElementById("switch2").style.display="block"),e.classList.toggle("fade")},200),setTimeout(function(){document.getElementById("theme-color").classList.toggle("fade")},300)}return r.a.createElement("div",{className:"page",style:e},r.a.createElement("div",{id:"switch",onClick:t}),r.a.createElement("div",{id:"switch2",onClick:t}),r.a.createElement("div",{className:"main animated fadeInBottom"},r.a.createElement(I,null)))}}]),t}(a.Component));c.a.render(r.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.11b4071e.chunk.js.map