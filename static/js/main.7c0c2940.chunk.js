(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,s){t.exports=s(42)},30:function(t,e,s){},42:function(t,e,s){"use strict";s.r(e);var o=s(0),n=s.n(o),a=s(21),u=s.n(a),c=(s(30),s(15)),r=s.n(c),l=s(22),i=s(6),p=s(7),h=s(9),f=s(8),m=s(10),d=s(12),y=s(1),g=s(11),v=function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={loading:!0,outputs:[],typeSelection:null,displayOutputs:[],personalDisplay:!1,outputColourClasses:["output-c0","output-c1","output-c2","output-c3","output-c4","output-c5","output-c6","output-c7","output-c8","output-c9","output-c10","output-c11"],outputColourClassesActive:["output-c0 focusGrow","output-c1 focusGrow","output-c2 focusGrow","output-c3 focusGrow","output-c4 focusGrow","output-c5 focusGrow","output-c6 focusGrow","output-c7 focusGrow","output-c8 focusGrow","output-c9 focusGrow","output-c10 focusGrow","output-c11 focusGrow"],inFocus:null,oCCpos:0,pageSelection:null},s.setDisplay=s.setDisplay.bind(Object(d.a)(Object(d.a)(s))),s.setFocus=s.setFocus.bind(Object(d.a)(Object(d.a)(s))),s}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(r.a.mark(function t(){var e,s,o,n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:1337/types");case 2:return e=t.sent,t.next=5,fetch("http://localhost:1337/outputs");case 5:if((s=t.sent).ok){t.next=9;break}return console.log("##outputsResponse = "+s),t.abrupt("return");case 9:return t.next=11,s.json();case 11:return o=t.sent,t.next=14,e.json();case 14:for(n=t.sent,console.log(n),n.sort(function(t,e){return t.Sequence-e.Sequence}),o.sort(function(t,e){return t.Sequence-e.Sequence}),a=0;a<o.length;a++)o[a].types.sort(function(t,e){return t.Sequence-e.Sequence});this.setState({loading:!1,outputs:o,types:n}),this.setDisplay(null);case 21:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"setFocus",value:function(t){console.log("hi :)"),this.state.inFocus!==t?(this.setState({inFocus:t}),console.log("this.state.inFocus = ",this.state.inFocus)):console.log("no change in focus")}},{key:"render",value:function(){var t=this;return this.state.loading?n.a.createElement("h2",{className:"outputList-title"},"Waiting for API..."):n.a.createElement("div",{className:"container"},n.a.createElement(b,null),n.a.createElement(O,null),n.a.createElement(y.c,null,n.a.createElement(y.a,{exact:!0,path:"/page/:permalink",render:function(e){return n.a.createElement(w,Object.assign({},e,{outputs:t.state.outputs,pageSelection:t.state.pageSelection}))}}),n.a.createElement(y.a,{path:"/",render:function(e){return n.a.createElement("div",null,n.a.createElement(j,{workTypes:t.state.types,wopperState:t.state.outputs,setDisplay:t.setDisplay,colourClasses:t.state.outputColourClasses,cClass:t.state.oCCpos}),n.a.createElement(k,Object.assign({},e,{workTypes:t.state.types,wopperState:t.state.outputs,freshDisplays:t.state.displayOutputs,colourClasses:t.state.outputColourClasses,orderedTypes:t.state.types,boxSets:t.state.boxSets,offSets:t.state.offSets,setFocus:t.setFocus,isFocus:t.state.isFocus})))}})),n.a.createElement(C,null))}},{key:"setDisplay",value:function(t){console.log("t= "+t);var e=[];if(this.state.personalDisplay){console.log("set"),this.setState({typeSelection:t,displayOutputs:0}),console.log("state t = "+t);for(var s=this.state.outputs,o=0;o<s.length;o++){console.log(s.length),console.log(s[o].types);for(var n=0;n<s[o].types.length;n++)console.log("sO[i].types[j].Type= "+s[o].types[n].Type),s[o].types[n].Type===t&&(console.log("add "+s[o].types[n].Type),e.push(s[o]))}}else{console.log("not set"),e=this.state.outputs,console.log(this.state.displayOutputs),this.setState({personalDisplay:!0})}this.setState({displayOutputs:e})}}]),e}(o.Component),b=function(t){function e(){return Object(i.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"headWanger"},n.a.createElement("a",{href:"/"},"S-J Inputs and Outputs "))}}]),e}(o.Component),O=function(t){function e(){return Object(i.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"strap-line"},"Making Cool things, both Physical and Digital")}}]),e}(o.Component),j=function(t){function e(){return Object(i.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"pinger",value:function(t){console.log("pinger type.Type= "+t),this.props.wopperState.typeSelection=t,console.log(this.props.wopperState.typeSelection),this.props.setDisplay(t)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"control-wanger"},n.a.createElement("ul",null,this.props.workTypes.map(function(e,s){return n.a.createElement("li",{id:e.Sequence,key:e.id}," ",n.a.createElement("a",{className:(o=t.props.colourClasses,a=e.Sequence,o[a]),href:"#",onClick:function(){return t.pinger(e.Type)}}," ",e.Type," ")," ");var o,a})))}}]),e}(o.Component),k=function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={isFocus:null,classToAdd:""},s}return Object(m.a)(e,t),Object(p.a)(e,[{key:"handleMouseOver",value:function(t){this.state.isFocus;this.setState({isFocus:t}),this.setState({classToAdd:"focusGrow"}),console.log(t),this.props.setFocus(t)}},{key:"handleMouseOut",value:function(t){this.setState({isFocus:null}),console.log("and im out!")}},{key:"handleClick",value:function(t){console.log(t),this.setState({pageSelection:t})}},{key:"setURL",value:function(t){return"/page/:"+t}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"outputList"},n.a.createElement("div",{className:"outputList-container"},console.log(this.props.freshDisplays),this.props.freshDisplays.map(function(e,s){return n.a.createElement("div",{className:"outputBox",id:e.id,key:e.id},e.types.map(function(s,o){return n.a.createElement("div",{id:s.Type,key:s.id,className:E(s.Type,t.props.orderedTypes,t.state.classToAdd,e.id,t.state.isFocus),style:S(e.types.length,o)})}),n.a.createElement(g.b,{to:t.setURL(e.permalink),onMouseOver:function(){return t.handleMouseOver(e.id)},onMouseOut:function(){return t.handleMouseOut(e.id)},onClick:function(){return t.handleClick(e.id)}},n.a.createElement("img",{className:"thumbHero",src:"http://localhost:1337/"+e.thumb.url,alt:e.Name})),n.a.createElement(g.b,{className:"titleHero",to:t.setURL(e.permalink),onClick:function(){return t.handleClick(e.id)}},e.Name," "))})))}}]),e}(o.Component),w=function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={selectedOutput:[],other:"ting"},s}return Object(m.a)(e,t),Object(p.a)(e,[{key:"updateState",value:function(){}},{key:"render",value:function(){var t;console.log(this.props);var e=this.props.match.params.permalink;console.log(e),e=e.replace(/^:/,""),console.log(e);for(var s=0;s<=this.props.outputs.length-1;s++){var o=this.props.outputs[s];o.permalink===e&&(console.log("Match"),t=o,console.log(this.state.selection))}return n.a.createElement("div",{className:"feature-item"},n.a.createElement("div",{className:"page-banner"},n.a.createElement("img",{className:"banner-hero",src:"http://localhost:1337/"+t.Banner.url,alt:t.Name})),n.a.createElement("div",{className:"pageBody"},"We are looking at",t.Name," ",n.a.createElement("br",null),t.Description))}}]),e}(o.Component);function S(t,e){var s=Math.trunc(t/2);0===s&&(s=1);var o,n,a=4*(s-e);return e<s?(o=-1*a,n=a):e>=s&&(o=-1*a+4,n=a-4),{left:o+"px",top:n+"px"}}function E(t,e,s,o,n){var a;a=o==n?s:"";for(var u=e.length,c=1;c<=u;c++){if(e[c-1].Type===t)return"output-c"+c.toString()+" colourBox "+a}}var C=function(t){function e(){return Object(i.a)(this,e),Object(h.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"foot-wanger"},"foot stuff")}}]),e}(o.Component),N=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(g.a,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.7c0c2940.chunk.js.map