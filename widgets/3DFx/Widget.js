// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"dijit/_WidgetsInTemplateMixin":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser"],function(I,E,y,q,l){return y("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,contextRequire:null,_beforeFillContent:function(){if(/dojoType|data-dojo-type/i.test(this.domNode.innerHTML)){var f=this.domNode;this.containerNode&&!this.searchContainerNode&&(this.containerNode.stopParser=!0);l.parse(f,{noStart:!this._earlyTemplatedStartup,
template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,contextRequire:this.contextRequire,scope:"dojo"}).then(q.hitch(this,function(t){this._startupWidgets=t;for(var k=0;k<t.length;k++)this._processTemplateNode(t[k],function(p,u){return p[u]},function(p,u,C){return u in p?p.connect(p,u,C):p.on(u,C,!0)});this.containerNode&&this.containerNode.stopParser&&delete this.containerNode.stopParser}));if(!this._startupWidgets)throw Error(this.declaredClass+": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
}},_processTemplateNode:function(f,t,k){return t(f,"dojoType")||t(f,"data-dojo-type")?!0:this.inherited(arguments)},startup:function(){I.forEach(this._startupWidgets,function(f){f&&!f._started&&f.startup&&f.startup()});this._startupWidgets=null;this.inherited(arguments)}})})},"dojo/parser":function(){define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),function(I,
E,y,q,l,f,t,k,p,u,C,M,L,O,S,e){function m(b){return eval("("+b+")")}function c(b){var d=b._nameCaseMap,h=b.prototype;if(!d||d._extendCnt<g){d=b._nameCaseMap={};for(var n in h)"_"!==n.charAt(0)&&(d[n.toLowerCase()]=n);d._extendCnt=g}return d}function a(b,d){d||(d=I);var h=d._dojoParserCtorMap||(d._dojoParserCtorMap={}),n=b.join();if(!h[n]){for(var r=[],v=0,B=b.length;v<B;v++){var F=b[v];r[r.length]=h[F]=h[F]||y.getObject(F)||~F.indexOf("/")&&d(F)}b=r.shift();h[n]=r.length?b.createSubclass?b.createSubclass(r):
b.extend.apply(b,r):b}return h[n]}new Date("X");var g=0;p.after(y,"extend",function(){g++},!0);L={_clearCache:function(){g++;_ctorMap={}},_functionFromScript:function(b,d){var h="",n="",r=b.getAttribute(d+"args")||b.getAttribute("args");d=b.getAttribute("with");r=(r||"").split(/\s*,\s*/);d&&d.length&&q.forEach(d.split(/\s*,\s*/),function(v){h+="with("+v+"){";n+="}"});return new Function(r,h+b.innerHTML+n)},instantiate:function(b,d,h){d=d||{};h=h||{};var n=(h.scope||E._scopeName)+"Type",r="data-"+
(h.scope||E._scopeName)+"-",v=r+"type",B=r+"mixins",F=[];q.forEach(b,function(H){var J=n in d?d[n]:H.getAttribute(v)||H.getAttribute(n);if(J){var z=H.getAttribute(B);J=z?[J].concat(z.split(/\s*,\s*/)):[J];F.push({node:H,types:J})}});return this._instantiate(F,d,h)},_instantiate:function(b,d,h,n){function r(v){d._started||h.noStart||q.forEach(v,function(B){"function"!==typeof B.startup||B._started||B.startup()});return v}b=q.map(b,function(v){var B=v.ctor||a(v.types,h.contextRequire);if(!B)throw Error("Unable to resolve constructor for: '"+
v.types.join()+"'");return this.construct(B,v.node,d,h,v.scripts,v.inherited)},this);return n?u(b).then(r):r(b)},construct:function(b,d,h,n,r,v){function B(T){N&&y.setObject(N,T);for(x=0;x<G.length;x++)p[G[x].advice||"after"](T,G[x].method,y.hitch(T,G[x].func),!0);for(x=0;x<Q.length;x++)Q[x].call(T);for(x=0;x<R.length;x++)T.watch(R[x].prop,R[x].func);for(x=0;x<U.length;x++)S(T,U[x].event,U[x].func);return T}var F=b&&b.prototype;n=n||{};var H={};n.defaults&&y.mixin(H,n.defaults);v&&y.mixin(H,v);var J=
d.attributes;var z=n.scope||E._scopeName;v="data-"+z+"-";var w={};"dojo"!==z&&(w[v+"props"]="data-dojo-props",w[v+"type"]="data-dojo-type",w[v+"mixins"]="data-dojo-mixins",w[z+"type"]="dojotype",w[v+"id"]="data-dojo-id");var x=0,A;z=[];for(var N,P;A=J[x++];){var K=A.name,D=K.toLowerCase();A=A.value;switch(w[D]||D){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;case "data-dojo-props":P=A;break;case "data-dojo-id":case "jsid":N=A;break;case "data-dojo-attach-point":case "dojoattachpoint":H.dojoAttachPoint=
A;break;case "data-dojo-attach-event":case "dojoattachevent":H.dojoAttachEvent=A;break;case "class":H["class"]=d.className;break;case "style":H.style=d.style&&d.style.cssText;break;default:if(K in F||(K=c(b)[D]||K),K in F)switch(typeof F[K]){case "string":H[K]=A;break;case "number":H[K]=A.length?Number(A):NaN;break;case "boolean":H[K]="false"!=A.toLowerCase();break;case "function":""===A||-1!=A.search(/[^\w\.]+/i)?H[K]=new Function(A):H[K]=y.getObject(A,!1)||new Function(A);z.push(K);break;default:D=
F[K],H[K]=D&&"length"in D?A?A.split(/\s*,\s*/):[]:D instanceof Date?""==A?new Date(""):"now"==A?new Date:C.fromISOString(A):D instanceof k?E.baseUrl+A:m(A)}else H[K]=A}}for(J=0;J<z.length;J++)w=z[J].toLowerCase(),d.removeAttribute(w),d[w]=null;if(P)try{P=m.call(n.propsThis,"{"+P+"}"),y.mixin(H,P)}catch(T){throw Error(T.toString()+" in data-dojo-props\x3d'"+P+"'");}y.mixin(H,h);r||(r=b&&(b._noScript||F._noScript)?[]:O("\x3e script[type^\x3d'dojo/']",d));var G=[],Q=[],R=[],U=[];if(r)for(x=0;x<r.length;x++)w=
r[x],d.removeChild(w),h=w.getAttribute(v+"event")||w.getAttribute("event"),n=w.getAttribute(v+"prop"),P=w.getAttribute(v+"method"),z=w.getAttribute(v+"advice"),J=w.getAttribute("type"),w=this._functionFromScript(w,v),h?"dojo/connect"==J?G.push({method:h,func:w}):"dojo/on"==J?U.push({event:h,func:w}):H[h]=w:"dojo/aspect"==J?G.push({method:P,advice:z,func:w}):"dojo/watch"==J?R.push({prop:n,func:w}):Q.push(w);b=(r=b.markupFactory||F.markupFactory)?r(H,d,b):new b(H,d);return b.then?b.then(B):B(b)},scan:function(b,
d){function h(D){if(!D.inherited){D.inherited={};var G=D.node,Q=h(D.parent);G={dir:G.getAttribute("dir")||Q.dir,lang:G.getAttribute("lang")||Q.lang,textDir:G.getAttribute(J)||Q.textDir};for(var R in G)G[R]&&(D.inherited[R]=G[R])}return D.inherited}var n=[],r=[],v={},B=(d.scope||E._scopeName)+"Type",F="data-"+(d.scope||E._scopeName)+"-",H=F+"type",J=F+"textdir";F+="mixins";var z=b.firstChild,w=d.inherited;if(!w){w=function R(G,Q){return G.getAttribute&&G.getAttribute(Q)||G.parentNode&&R(G.parentNode,
Q)};w={dir:w(b,"dir"),lang:w(b,"lang"),textDir:w(b,J)};for(var x in w)w[x]||delete w[x]}x={inherited:w};for(var A,N;;)if(z)if(1!=z.nodeType)z=z.nextSibling;else if(A&&"script"==z.nodeName.toLowerCase())(w=z.getAttribute("type"))&&/^dojo\/\w/i.test(w)&&A.push(z),z=z.nextSibling;else if(N)z=z.nextSibling;else if(w=z.getAttribute(H)||z.getAttribute(B),b=z.firstChild,w||b&&(3!=b.nodeType||b.nextSibling)){N=null;if(w){var P=z.getAttribute(F);A=P?[w].concat(P.split(/\s*,\s*/)):[w];try{N=a(A,d.contextRequire)}catch(D){}N||
q.forEach(A,function(D){~D.indexOf("/")&&!v[D]&&(v[D]=!0,r[r.length]=D)});P=N&&!N.prototype._noScript?[]:null;x={types:A,ctor:N,parent:x,node:z,scripts:P};x.inherited=h(x);n.push(x)}else x={node:z,scripts:A,parent:x};A=P;N=z.stopParser||N&&N.prototype.stopParser&&!d.template;z=b}else z=z.nextSibling;else{if(!x||!x.node)break;z=x.node.nextSibling;N=!1;x=x.parent;A=x.scripts}var K=new M;r.length?(d.contextRequire||I)(r,function(){K.resolve(q.filter(n,function(D){if(!D.ctor)try{D.ctor=a(D.types,d.contextRequire)}catch(R){}for(var G=
D.parent;G&&!G.types;)G=G.parent;var Q=D.ctor&&D.ctor.prototype;D.instantiateChildren=!(Q&&Q.stopParser&&!d.template);D.instantiate=!G||G.instantiate&&G.instantiateChildren;return D.instantiate}))}):K.resolve(n);return K.promise},_require:function(b,d){b=m("{"+b.innerHTML+"}");var h=[],n=[],r=new M;d=d&&d.contextRequire||I;for(var v in b)h.push(v),n.push(b[v]);d(n,function(){for(var B=0;B<h.length;B++)y.setObject(h[B],arguments[B]);r.resolve(arguments)});return r.promise},_scanAmd:function(b,d){var h=
new M,n=h.promise;h.resolve(!0);var r=this;O("script[type\x3d'dojo/require']",b).forEach(function(v){n=n.then(function(){return r._require(v,d)});v.parentNode.removeChild(v)});return n},parse:function(b,d){!b||"string"==typeof b||"nodeType"in b||(d=b,b=d.rootNode);var h=b?f.byId(b):t.body();d=d||{};var n=d.template?{template:!0}:{},r=[],v=this;b=this._scanAmd(h,d).then(function(){return v.scan(h,d)}).then(function(B){return v._instantiate(B,n,d,!0)}).then(function(B){return r=r.concat(B)}).otherwise(function(B){console.error("dojo/parser::parse() error",
B);throw B;});y.mixin(r,b);return r}};E.parser=L;l.parseOnLoad&&e(100,L,"parse");return L})},"dojo/_base/url":function(){define(["./kernel"],function(I){var E=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,y=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,q=function(){for(var l=arguments,f=[l[0]],t=1;t<l.length;t++)if(l[t]){var k=new q(l[t]+"");f=new q(f[0]+"");if(""==k.path&&!k.scheme&&!k.authority&&!k.query)null!=k.fragment&&(f.fragment=k.fragment),k=f;else if(!k.scheme&&
(k.scheme=f.scheme,!k.authority&&(k.authority=f.authority,"/"!=k.path.charAt(0)))){f=(f.path.substring(0,f.path.lastIndexOf("/")+1)+k.path).split("/");for(var p=0;p<f.length;p++)"."==f[p]?p==f.length-1?f[p]="":(f.splice(p,1),p--):0<p&&(1!=p||""!=f[0])&&".."==f[p]&&".."!=f[p-1]&&(p==f.length-1?(f.splice(p,1),f[p-1]=""):(f.splice(p-1,2),p-=2));k.path=f.join("/")}f=[];k.scheme&&f.push(k.scheme,":");k.authority&&f.push("//",k.authority);f.push(k.path);k.query&&f.push("?",k.query);k.fragment&&f.push("#",
k.fragment)}this.uri=f.join("");l=this.uri.match(E);this.scheme=l[2]||(l[1]?"":null);this.authority=l[4]||(l[3]?"":null);this.path=l[5];this.query=l[7]||(l[6]?"":null);this.fragment=l[9]||(l[8]?"":null);null!=this.authority&&(l=this.authority.match(y),this.user=l[3]||null,this.password=l[4]||null,this.host=l[6]||l[7],this.port=l[9]||null)};q.prototype.toString=function(){return this.uri};return I._Url=q})},"dojo/date/stamp":function(){define(["../_base/lang","../_base/array"],function(I,E){var y=
{};I.setObject("dojo.date.stamp",y);y.fromISOString=function(q,l){y._isoRegExp||(y._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var f=y._isoRegExp.exec(q);q=null;if(f){f.shift();f[1]&&f[1]--;f[6]&&(f[6]*=1E3);l&&(l=new Date(l),E.forEach(E.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "),function(p){return l["get"+p]()}),function(p,u){f[u]=f[u]||p}));q=new Date(f[0]||1970,f[1]||0,f[2]||1,f[3]||0,f[4]||
0,f[5]||0,f[6]||0);100>f[0]&&q.setFullYear(f[0]||1970);var t=0,k=f[7]&&f[7].charAt(0);"Z"!=k&&(t=60*(f[8]||0)+(Number(f[9])||0),"-"!=k&&(t*=-1));k&&(t-=q.getTimezoneOffset());t&&q.setTime(q.getTime()+6E4*t)}return q};y.toISOString=function(q,l){var f=function(u){return 10>u?"0"+u:u};l=l||{};var t=[],k=l.zulu?"getUTC":"get",p="";"time"!=l.selector&&(p=q[k+"FullYear"](),p=["0000".substr((p+"").length)+p,f(q[k+"Month"]()+1),f(q[k+"Date"]())].join("-"));t.push(p);"date"!=l.selector&&(p=[f(q[k+"Hours"]()),
f(q[k+"Minutes"]()),f(q[k+"Seconds"]())].join(":"),k=q[k+"Milliseconds"](),l.milliseconds&&(p+="."+(100>k?"0":"")+f(k)),l.zulu?p+="Z":"time"!=l.selector&&(q=q.getTimezoneOffset(),l=Math.abs(q),p+=(0<q?"-":"+")+f(Math.floor(l/60))+":"+f(l%60)),t.push(p));return t.join("T")};return y})},"widgets/3DFx/VizCards/VizCards":function(){define("dojo/Evented dojo/_base/declare dojo/_base/array dojo/_base/Color dojo/_base/lang dojo/_base/html dojo/dom-class dojo/dom-construct dojo/dom-style dojo/number dojo/on dojo/query dojox/gfx jimu/utils dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/VizCards.html".split(" "),
function(I,E,y,q,l,f,t,k,p,u,C,M,L,O,S,e,m){I=E("VizCards",[S,e,I],{declaredClass:"esri.widgets.VizCards",templateString:m,css:{root:"esri-viz-cards",content:"content"},constructor:function(c,a){this.rtl=!1;this.options={view:null,features:[],vizField:null,displayField:null,color:"#ff0000",showPercent:!1};l.mixin(this.options,c);this.domNode=a;this._currentSelectedCardNode=null},postCreate:function(){this.inherited(arguments);0<M(".dj_rtl").length&&(this.rtl=!0);this.own(C(this.contentNode,"click",
l.hitch(this,this._clickCard)))},startup:function(){this.inherited(arguments);this._updateCards()},destroy:function(){this.view=null;this.inherited(arguments)},clear:function(){this.containerNode.innerHTML=""},update:function(c){l.mixin(this.options,c);this._updateCards()},selectCard:function(c){var a=this.domNode.id+"_card_"+c;this.unselectCards();if(a=M("#"+a,this.domNode)[0])t.add(a,"selected"),this._currentSelectedCardNode=a;a=f.getContentBox(this.containerNode).w;var g=180*c-a/2+90;this.rtl&&
(g=180*(this.options.features.length-c)-a/2-90);0>g&&(g=0);this.containerNode.scrollLeft=g},unselectCards:function(){this._currentSelectedCardNode&&(t.remove(this._currentSelectedCardNode,"selected"),this._currentSelectedCardNode=null)},_getTotal:function(){var c=this.options.vizField,a=0;y.forEach(this.options.features,function(g){a+=g.attributes[c]});return a},_updateCards:function(){var c=this.contentNode;p.set(c,"color",VizCards.CONTENT_COLOR);var a=this.options.features,g=this._getTotal();c.innerHTML=
"";var b=0;this.rtl&&(b=180*a.length);this.containerNode.scrollLeft=b;p.set(c,"width",180*a.length+"px");b=a.length;for(var d=null,h,n,r=null,v=this.options.showPercent&&400>=b,B=0;B<b;B++){d=a[B];h=d.attributes;d=h[this.options.vizField];n=u.format(d);r||(r=Math.floor(150/n.length+3),10>r&&(r=10),60<r&&(r=60));var F=h[this.options.displayField];null!==d&&(h=k.create("div",{id:this.domNode.id+"_card_"+B},c),t.add(h,"card"),F=k.create("div",{innerHTML:O.sanitizeHTML(B+1+". "+F)},h),t.add(F,"header"),
n=k.create("div",{innerHTML:O.sanitizeHTML(n)},h),v?(t.add(n,"value"),n=parseInt(d/g*100,10),F=n+"%",0<d&&1>n&&(F="\x3c1%"),h=k.create("div",{},h),t.add(h,"area"),d=k.create("div",{},h),t.add(d,"chart"),h=k.create("div",{innerHTML:O.sanitizeHTML(F)},h),t.add(h,"pct"),this._createChart(d,n)):(t.add(n,"valueBig"),p.set(n,"fontSize",r+"px")))}},_createChart:function(c,a){var g=f.getContentBox(c),b=Math.min(g.w,g.h);g=b/2;var d=b/2,h=g-3;c=L.createSurface(c,b,b);c.clear();c.createCircle({cx:g,cy:d,r:h}).setStroke({width:6,
color:q.fromArray([255,255,255,.15]),cap:"round"});0<a&&(100<=a&&(a=99),b=360*a/100,a=!1,180<=b&&(a=!0),b=this._getEndPoint(h,b,g,d),d-=h,c.createPath().moveTo(g,d).arcTo(h,h,0,a,!0,b.x,b.y).setStroke({width:6,color:this.options.color,cap:"round"}))},_getEndPoint:function(c,a,g,b){var d=a;0<a&&90>a?d+=270:90<a&&(d=a-90);a=d*Math.PI/180;return{x:g+Math.cos(a)*c,y:b+Math.sin(a)*c}},_clickCard:function(c){c=c.target||c.srcElement;if(!t.contains(c,"card"))for(;c&&c.parentNode&&(c=c.parentNode,!t.contains(c,
"card")););if(c){var a=c.id.replace(this.domNode.id+"_card_","");a=parseInt(a,10);isNaN(a)||null==a||(t.contains(c,"selected")?(this.unselectCards(),this.emit("selection",{})):(this.unselectCards(),t.add(c,"selected"),this._currentSelectedCardNode=c,this.emit("selection",{data:this.options.features[a]})))}}});I.CONTENT_COLOR="#FFF";return I})},"dojox/gfx":function(){define(["dojo/_base/lang","./gfx/_base","./gfx/renderer!"],function(I,E,y){E.switchTo(y);return E})},"dojox/gfx/_base":function(){define("dojo/_base/kernel dojo/_base/lang dojo/_base/Color dojo/_base/sniff dojo/_base/window dojo/_base/array dojo/dom dojo/dom-construct dojo/dom-geometry".split(" "),
function(I,E,y,q,l,f,t,k,p){var u=E.getObject("dojox.gfx",!0),C=u._base={};u._hasClass=function(e,m){return(e=e.getAttribute("className"))&&0<=(" "+e+" ").indexOf(" "+m+" ")};u._addClass=function(e,m){var c=e.getAttribute("className")||"";(!c||0>(" "+c+" ").indexOf(" "+m+" "))&&e.setAttribute("className",c+(c?" ":"")+m)};u._removeClass=function(e,m){var c=e.getAttribute("className");c&&e.setAttribute("className",c.replace(new RegExp("(^|\\s+)"+m+"(\\s+|$)"),"$1$2"))};C._getFontMeasurements=function(){var e=
{"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,small:0,medium:0,large:0,"x-large":0,"xx-large":0},m;if(q("ie")){var c=l.doc.documentElement.style.fontSize||"";c||(l.doc.documentElement.style.fontSize="100%")}var a=k.create("div",{style:{position:"absolute",left:"0",top:"-100px",width:"30px",height:"1000em",borderWidth:"0",margin:"0",padding:"0",outline:"none",lineHeight:"1",overflow:"hidden"}},l.body());for(m in e)a.style.fontSize=m,e[m]=16*Math.round(12*a.offsetHeight/16)/12/
1E3;q("ie")&&(l.doc.documentElement.style.fontSize=c);l.body().removeChild(a);return e};var M=null;C._getCachedFontMeasurements=function(e){if(e||!M)M=C._getFontMeasurements();return M};var L=null,O={};C._getTextBox=function(e,m,c){var a=arguments.length,g;L||(L=k.create("div",{style:{position:"absolute",top:"-10000px",left:"0",visibility:"hidden"}},l.body()));var b=L;b.className="";var d=b.style;d.borderWidth="0";d.margin="0";d.padding="0";d.outline="0";if(1<a&&m)for(g in m)g in O||(d[g]=m[g]);2<
a&&c&&(b.className=c);b.innerHTML=e;b.getBoundingClientRect?(d=b.getBoundingClientRect(),d={l:d.left,t:d.top,w:d.width||d.right-d.left,h:d.height||d.bottom-d.top}):d=p.getMarginBox(b);b.innerHTML="";return d};C._computeTextLocation=function(e,m,c,a){var g={};switch(e.align){case "end":g.x=e.x-m;break;case "middle":g.x=e.x-m/2;break;default:g.x=e.x}g.y=e.y-c*(a?.75:1);return g};C._computeTextBoundingBox=function(e){if(!u._base._isRendered(e))return{x:0,y:0,width:0,height:0};var m=e.getShape();var c=
e.getFont()||u.defaultFont;e=e.getTextWidth();c=u.normalizedLength(c.size);m=C._computeTextLocation(m,e,c,!0);return{x:m.x,y:m.y,width:e,height:c}};C._isRendered=function(e){for(e=e.parent;e&&e.getParent;)e=e.parent;return null!==e};var S=0;C._getUniqueId=function(){do var e=I._scopeName+"xUnique"+ ++S;while(t.byId(e));return e};C._fixMsTouchAction=function(e){e.rawNode.style.touchAction="none"};E.mixin(u,{defaultPath:{type:"path",path:""},defaultPolyline:{type:"polyline",points:[]},defaultRect:{type:"rect",
x:0,y:0,width:100,height:100,r:0},defaultEllipse:{type:"ellipse",cx:0,cy:0,rx:200,ry:100},defaultCircle:{type:"circle",cx:0,cy:0,r:100},defaultLine:{type:"line",x1:0,y1:0,x2:100,y2:100},defaultImage:{type:"image",x:0,y:0,width:0,height:0,src:""},defaultText:{type:"text",x:0,y:0,text:"",align:"start",decoration:"none",rotated:!1,kerning:!0},defaultTextPath:{type:"textpath",text:"",align:"start",decoration:"none",rotated:!1,kerning:!0},defaultStroke:{type:"stroke",color:"black",style:"solid",width:1,
cap:"butt",join:4},defaultLinearGradient:{type:"linear",x1:0,y1:0,x2:100,y2:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultRadialGradient:{type:"radial",cx:0,cy:0,r:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultPattern:{type:"pattern",x:0,y:0,width:0,height:0,src:""},defaultFont:{type:"font",style:"normal",variant:"normal",weight:"normal",size:"10pt",family:"serif"},getDefault:function(){var e={};return function(m){var c=e[m];if(c)return new c;c=e[m]=
function(){};c.prototype=u["default"+m];return new c}}(),normalizeColor:function(e){return e instanceof y?e:new y(e)},normalizeParameters:function(e,m){var c;if(m){var a={};for(c in e)c in m&&!(c in a)&&(e[c]=m[c])}return e},makeParameters:function(e,m){var c=null;if(!m)return E.delegate(e);var a={};for(c in e)c in a||(a[c]=E.clone(c in m?m[c]:e[c]));return a},formatNumber:function(e,m){var c=e.toString();if(0<=c.indexOf("e"))c=e.toFixed(4);else{var a=c.indexOf(".");0<=a&&5<c.length-a&&(c=e.toFixed(4))}return 0>
e?c:m?" "+c:c},makeFontString:function(e){return e.style+" "+e.variant+" "+e.weight+" "+e.size+" "+e.family},splitFontString:function(e){var m=u.getDefault("Font");e=e.split(/\s+/);if(!(5>e.length)){m.style=e[0];m.variant=e[1];m.weight=e[2];var c=e[3].indexOf("/");m.size=0>c?e[3]:e[3].substring(0,c);var a=4;0>c&&("/"==e[4]?a=6:"/"==e[4].charAt(0)&&(a=5));a<e.length&&(m.family=e.slice(a).join(" "))}return m},cm_in_pt:72/2.54,mm_in_pt:7.2/2.54,px_in_pt:function(){return u._base._getCachedFontMeasurements()["12pt"]/
12},pt2px:function(e){return e*u.px_in_pt()},px2pt:function(e){return e/u.px_in_pt()},normalizedLength:function(e){if(0===e.length)return 0;if(2<e.length){var m=u.px_in_pt(),c=parseFloat(e);switch(e.slice(-2)){case "px":return c;case "pt":return c*m;case "in":return 72*c*m;case "pc":return 12*c*m;case "mm":return c*u.mm_in_pt*m;case "cm":return c*u.cm_in_pt*m}}return parseFloat(e)},pathVmlRegExp:/([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,pathSvgRegExp:/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g,
equalSources:function(e,m){return e&&m&&e===m},switchTo:function(e){var m="string"==typeof e?u[e]:e;m&&(f.forEach("Group Rect Ellipse Circle Line Polyline Image Text Path TextPath Surface createSurface fixTarget".split(" "),function(c){u[c]=m[c]}),"string"==typeof e?u.renderer=e:f.some(["svg","vml","canvas","canvasWithEvents","silverlight"],function(c){return u.renderer=u[c]&&u[c].Surface===u.Surface?c:null}))}});return u})},"dojox/gfx/renderer":function(){define(["./_base","dojo/_base/lang","dojo/_base/sniff",
"dojo/_base/window","dojo/_base/config"],function(I,E,y,q,l){var f=null;y.add("vml",function(t,k,p){p.innerHTML='\x3cv:shape adj\x3d"1"/\x3e';t="adj"in p.firstChild;p.innerHTML="";return t});return{load:function(t,k,p){function u(){k(["dojox/gfx/"+C],function(O){I.renderer=C;f=O;p(O)})}if(f&&"force"!=t)p(f);else{var C=l.forceGfxRenderer;t=!C&&(E.isString(l.gfxRenderer)?l.gfxRenderer:"svg,vml,canvas,silverlight").split(",");for(var M,L;!C&&t.length;)switch(t.shift()){case "svg":"SVGAngle"in q.global&&
(C="svg");break;case "vml":y("vml")&&(C="vml");break;case "silverlight":try{y("ie")?(M=new ActiveXObject("AgControl.AgControl"),M.IsVersionSupported("1.0"))&&(L=!0):navigator.plugins["Silverlight Plug-In"]&&(L=!0)}catch(O){L=!1}finally{M=null}L&&(C="silverlight");break;case "canvas":q.global.CanvasRenderingContext2D&&(C="canvas")}"canvas"===C&&!1!==l.canvasEvents&&(C="canvasWithEvents");l.isDebug&&console.log("gfx renderer \x3d "+C);"svg"==C&&"undefined"!=typeof window.svgweb?window.svgweb.addOnLoad(u):
u()}}}})},"widgets/3DFx/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/3DFx/VizCards/templates/VizCards.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"${css.root}" role\x3d"presentation"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"contentNode" class\x3d"${css.content}"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/3DFx/Widget.html":'\x3cdiv\x3e\r\n  \x3ccanvas class\x3d"labelCanvas" data-dojo-attach-point\x3d"labelCanvas"\x3e\x3c/canvas\x3e\r\n  \x3cdiv class\x3d"panelBottom"\x3e\r\n    \x3c!--Panel Container --\x3e\r\n    \x3cdiv class\x3d"panelContainer"\x3e\r\n      \x3c!-- Panel Inner --\x3e\r\n      \x3cdiv class\x3d"panelInner"\x3e\r\n        \x3c!-- Panel Content --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"panelMsgBlock"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"panelContent" class\x3d"panelContent"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Footer --\x3e\r\n    \x3cdiv class\x3d"panelFooter" data-dojo-attach-point\x3d"footerNode" class\x3d"jimu-main-background"\x3e\r\n      \x3cdiv class\x3d"panelFooterContent"\x3e\r\n        \x3cdiv class\x3d"btnPlay" data-dojo-attach-point\x3d"btnPlay" data-dojo-attach-event\x3d"onclick:_toggleVizTimer"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"panelTitle" data-dojo-attach-point\x3d"titleNode"\x3eTitle\x3c/div\x3e\r\n        \x3cdiv class\x3d"panelPages"\x3e\r\n          \x3cul class\x3d"pages" data-dojo-attach-point\x3d"pages"\x3e\r\n          \x3c/ul\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"btnClose" data-dojo-attach-point\x3d"btnClose" data-dojo-attach-event\x3d"onclick:_close"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/3DFx/css/style.css":".esri-viz-cards {position: absolute; width: 100%; height: 100%; overflow-x: auto; overflow-y: hidden;}.esri-viz-cards .content {margin: 0; padding: 0; width: auto; height: 100%; white-space: nowrap; overflow: visible;}.esri-viz-cards .card {position: relative; float: left; width: 150px; height: 100%; margin-left: 10px; margin-right: 20px; overflow: hidden; text-overflow: ellipsis; cursor: pointer; display: block;}.dj_rtl .esri-viz-cards .card {float: right;}.esri-viz-cards .card.selected {color: #ffffff;}.esri-viz-cards .header {position: absolute; width: 100%; height: 20px; line-height: 20px; font-size: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards .card.selected .header {border-bottom: 1px solid #ffffff;}.esri-viz-cards .value {position: absolute; top: 20px; width: 100%; height: 17px; line-height: 17px; font-size: 12px; overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards .valueBig {position: absolute; top: 20px; width: 100%; height: 60px; line-height: 60px; font-size: 20px; overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards .area {position: absolute; left: 30px; top: 37px; width: 80px; height: 70px; display: block;}.esri-viz-cards .chart {position: absolute; width: 100%; height: 100%; display: block;}.esri-viz-cards .pct {position: absolute; top: 50%; margin-top: -15px; width: 100%; height: 30px; line-height: 30px; font-size: 20px; text-align: center; overflow: hidden; text-overflow: ellipsis;}.esri-viz-cards::-webkit-scrollbar {width: 6px; height: 6px; background-color: rgba(255, 255, 255, 0.25);}.esri-viz-cards::-webkit-scrollbar-thumb {background-color: rgba(255, 255, 255, 0.5);}.esri-viz-cards {scrollbar-base-color: #000000; scrollbar-3dlight-color: #000000; scrollbar-highlight-color: #000000; scrollbar-track-color: #707070; scrollbar-arrow-color: #606060; scrollbar-shadow-color: #000000; scrollbar-dark-shadow-color: #000000; scrollbar-face-color: #606060;}.jimu-widget-viz {color: #ffffff; background-color: rgba(0,0,0,0.8); left: 0px !important; right: 0px !important; bottom: 0px; height: 160px !important; display: block; z-index: 100 !important; overflow: hidden;}.jimu-widget-viz .labelCanvas {position: absolute; top: -50px; height: 50px;}.jimu-widget-viz .panelBottom {position: absolute; width: 100%; height: 160px; left: 0px; top: 0px; color: #ffffff; padding: 0px;}.jimu-widget-viz .panelFooter {position: absolute; bottom: 0px; left: 0px; right: 0px; height: 40px; line-height: 40px; overflow: hidden; background-color: #393939; background-color: rgba(0, 0, 0, 0.25); border-bottom: 1px solid #353535; border-bottom: 1px solid rgba(0, 0, 0, 0.3);}.jimu-widget-viz .panelFooterContent {position: absolute; left: 10px; right: 24px; top: 8px; height: 24px; line-height: 24px; overflow-x: hidden; overflow-y: hidden; display: inline-block; white-space: nowrap; width: auto;}.jimu-rtl .jimu-widget-viz .panelFooterContent {position: absolute; left: 24px; right: 10px;}.jimu-widget-viz .panelTitle {float: left; margin-left: 10px; font-size: 14px;}.jimu-rtl .jimu-widget-viz .panelTitle {float: right; margin-right: 10px;}.jimu-widget-viz .panelPages {float: right;}.jimu-rtl .jimu-widget-viz .panelPages {float: left;}.jimu-widget-viz .pages {list-style-type: none; height: 24px; margin: auto; padding: 2px; display: block; cursor: pointer;}.jimu-widget-viz .pages li {width: 20px; height: 20px; display: inline-block; background: url(images/dot.png); margin: 0;}.jimu-widget-viz .pages li:hover {background: url(images/doton.png);}.jimu-widget-viz .pages li.active {background: url(images/doton.png);}.jimu-widget-viz .btnPlay {float: left; width: 24px; height: 24px; display: block; cursor: pointer; background-image: url('images/play.png'); background-repeat: no-repeat; background-position: center center; background-size: 24px;}.jimu-rtl .jimu-widget-viz .btnPlay {float: right;}.jimu-widget-viz .playing {background-image: url('images/pause.png'); background-repeat: no-repeat; background-position: center center; background-size: 24px;}.jimu-widget-viz .btnClose {position: absolute; left: auto; right: 0px; width: 24px; height: 40px; line-height: 40px; text-align: center; display: block; cursor: pointer; background-image: url('images/x.png'); background-repeat: no-repeat; background-position: center center; background-size: 18px;}.jimu-rtl .jimu-widget-viz .btnClose {position: absolute; left: 0px; right: auto;}.jimu-widget-viz .panelContainer {position: absolute; width: 100%; height: 120px; overflow: hidden; display: block;}.jimu-widget-viz .panelInner {position: absolute; top: 3px; left: 0px; right: 0px; height: 117px; display: block; overflow: hidden;}.jimu-widget-viz .loading {background-image: url('images/loading.gif'); background-repeat: no-repeat; background-position: center 10px;}",
"*now":function(I){I(['dojo/i18n!*preload*widgets/3DFx/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/Color dojo/_base/html dojo/_base/lang dojo/_base/array dojo/Deferred dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on dijit/_WidgetsInTemplateMixin esri/request jimu/BaseWidget jimu/utils jimu/dijit/LoadingShelter fx3d/layers/FxLayer ./VizCards/VizCards dojo/domReady!".split(" "),function(I,E,y,q,l,f,t,k,p,u,C,M,L,O,S,e,m,c){return I([O,M],{baseClass:"jimu-widget-viz",name:"3DFx",postCreate:function(){this.inherited(arguments);this.vizFeatures=
[];this.vizMax=0;this.vizCards=null;this.vizPage=0;this._featuresLoadedDfd=new f;this._sortedFeatures={}},startup:function(){this.inherited(arguments);this.loadingCover=new e({hidden:!0});this.loadingCover.placeAt(this.sceneView.map.id);this.loadingCover.startup();var a=this._getStyleColor();this.panelMsgBlock.innerHTML="";a.then(q.hitch(this,function(g){g&&(this.config.color=g);this.config.vizLayer&&0!==this.config.vizFields.length?(this.loadingCover.show(),L(this.config.vizLayer.url+"/query",{query:{f:"json",
returnGeometry:!1,returnCountOnly:!0,where:"1\x3d1"},callbackParamName:"callback"}).then(q.hitch(this,function(b){b.data.count?400<b.data.count?this.config.showPercent=!1:this.panelMsgBlock.innerHTML="":this.panelMsgBlock.innerHTML="";this._initUI();this._initLayers();this._initViz()}))):this.panelMsgBlock.innerHTML=S.sanitizeHTML("\x3cp align\x3d'center'\x3e"+this.nls.viz_error+"\x3c/p\x3e")}))},onOpen:function(){this.inherited(arguments);this.loadingCover.hidden&&this.loadingCover.show();this._styleSync();
this._showLayers()},onClose:function(){this._hideLayers();this._stopVizTimer();this.loadingCover.hide();this.vizCards&&this.vizCards.unselectCards();this.inherited(arguments)},onDeActive:function(){},destroy:function(){this._stopVizTimer();this._removeFxLayer();this._sortedFeatures={};this._featuresLoadedDfd=null;this.loadingCover.destroy();this.inherited(arguments)},_close:function(){this.widgetManager.closeWidget(this.id)},_styleSync:function(){this._getStyleColor().then(q.hitch(this,function(a){u.set(this.footerNode,
"backgroundColor",a);this.vizCards&&u.set(this.vizCards.contentNode,"color",c.CONTENT_COLOR);this.config.color=a;this._updatePath();this.fxLayer&&this.fxLayer.set("renderingInfo",this._getRenderingInfo())}))},onAppConfigChanged:function(a,g){this.appConfig=a;if("closed"!==this.state)switch(g){case "styleChange":this._styleSync()}},setPosition:function(a,g){if("BoxTheme"===this.appConfig.theme.name||"DartTheme"===this.appConfig.theme.name||"LaunchpadTheme"===this.appConfig.theme.name)this.inherited(arguments);
else{this.position={left:"0px",right:"0px",bottom:"0px",height:"140px"};var b=S.getPositionStyle(this.position);b.position="absolute";g=this.sceneView.map.id;y.place(this.domNode,g);y.setStyle(this.domNode,b);this.started&&this.resize();"TabTheme"===this.appConfig.theme.name&&(b=this.widgetManager.getControllerWidgets()[0],this.widgetManager.minimizeWidget(b.id))}},_updatePath:function(){this.vizCards&&this.vizCards.update({color:this._getColor()})},_getStyleColor:function(a){return S.getStyleColorInTheme(a)},
_initUI:function(){this.vizCards=new c({view:this.sceneView,showPercent:this.config.showPercent},this.panelContent);this.vizCards.on("selection",q.hitch(this,this._featureSelection));this.vizCards.startup();"global"===this.sceneView.viewingMode?u.set(this.btnPlay,"display","block"):u.set(this.btnPlay,"display","none")},_initLayers:function(){this.sceneView.map.findLayerById(this.config.vizLayer.id).when().then(q.hitch(this,function(a){this.vizLayer=a;this.vizLayerVisibility=a.visible;this.vizLayer.visible=
!1;this._addFxLayer()}))},_getColor:function(){if(this.config.cycleColors){var a=this.vizPage,g=this.config.colors.length;return this.config.colors[a-Math.floor(a/g)*g]}return this.config.color},_getColors:function(){var a=this._getColor(),g=E.fromString("#ffffff");a=E.fromString(a);var b=E.blendColors(a,g,.3);g=E.blendColors(a,g,.8);return[a.toRgb(),b.toRgb(),g.toRgb()]},_getRenderingInfo:function(){var a=this._getColors();switch(this.config.vizType){case "PointExtrude":var g={visible:!0,repeat:1,
animationInterval:this.config.interval/1E3,shapeType:"Cylinder",radius:this.config.maxWidth,height:this.config.maxHeight,transparency:100,bottomColor:a[0],topColors:[a[0],a[1]]};break;case "Pulse":g={visible:!0,repeat:1E3,animationInterval:this.config.interval/1E3,shapeType:"Circle",radius:this.config.maxWidth,transparency:80,solidColor:a[0],haloColor:a[1]};break;case "Bounce":g={visible:!0,repeat:1E3,animationInterval:this.config.interval/1E3,dashHeight:this.config.maxHeight,radius:100,transparency:100,
haloColors:a};break;case "GridSurface":g={visible:!0,repeat:1,animationInterval:this.config.interval/1E3,width:this.config.maxWidth,height:this.config.maxHeight,transparency:60,colors:[a[0],a[1],a[2]]};break;case "Fireball":case "JetTrail":g={visible:!0,repeat:1E3,animationInterval:this.config.interval/1E3,radius:30,transparency:90,colors:[a[0],a[0]]};break;case "AreaExtrude":g={visible:!0,repeat:1,animationInterval:this.config.interval/1E3,height:this.config.maxHeight,transparency:100,bottomColor:a[0],
topColors:[a[0],a[1]]}}"JetTrail"===this.config.vizType&&(g.showEndPoints=this.config.showJetTrailEndPoints);return g},_removeFxLayer:function(){this.fxLayer&&(this.fxLayer.remove(),this.fxLayer=null)},_addFxLayer:function(){this._removeFxLayer();var a=this._getRenderingInfo(),g=[];l.forEach(this.config.vizFields,function(b){g.push(b.field)});this.fxLayer=new m(this.config.vizLayer.url,{view:this.sceneView,vizType:this.config.vizType,vizFields:g,displayField:this.config.displayField,renderingInfo:a});
this.fxLayer.on("all-features-loaded",q.hitch(this,this._allFeaturesLoaded));this.fxLayer.on("selected-feature-from-globe",q.hitch(this,this._selectedFeatureFromGlobe));this.fxLayer.on("abandon-selected-feature",q.hitch(this,this._abandonSelectedFeature));this.fxLayer.on("fx3d-ready",function(){this.loadingCover.hide()}.bind(this));this.fxLayer.watch("visible",q.hitch(this,function(b){!1===b&&this._stopVizTimer()}));this.sceneView.map.add(this.fxLayer)},_selectedFeatureFromGlobe:function(a){this.fxLayer&&
this.fxLayer.hideLabel();this._featuresLoadedDfd.then(function(){if(a.selectedFeature){var g=this._getFeatureIndex(a.selectedFeature);this.vizCards&&this.vizCards.selectCard(g)}}.bind(this))},_abandonSelectedFeature:function(){this.vizCards&&this.vizCards.unselectCards()},_allFeaturesLoaded:function(a){this._featuresLoadedDfd.resolve();this.vizFeatures=a.graphics;this._setVizPage(0,!0)},_showLayers:function(){this.vizLayer&&(this.vizLayer.visible=!1);this.fxLayer&&(this.fxLayer.visible=!0);this.loadingCover.hide()},
_hideLayers:function(){this.vizLayer&&(this.vizLayer.visible=this.vizLayerVisibility);this.fxLayer&&(this.fxLayer.visible=!1)},_initViz:function(){this._initVizPages()},_initVizPages:function(){var a=this.pages;a.innerHTML="";if(1<this.config.vizFields.length){for(var g=0;g<this.config.vizFields.length;g++){var b=this.config.vizFields[g];b=p.create("li",{id:this.id+"-page"+g,title:b.label||b.alias},a);C(b,"click",q.hitch(this,this._setVizPage,g))}t.byId("page0")&&k.add("page0","active")}this.vizPage=
0},_setVizPage:function(a,g){this.loadingCover.hidden&&this.loadingCover.show();this._featuresLoadedDfd.then(function(){var b=this.id+"-page"+this.vizPage,d=this.id+"-page"+a;t.byId(b)&&k.remove(b,"active");this.vizPage=a;t.byId(d)&&k.add(d,"active");setTimeout(function(){this._processViz(g)}.bind(this),300)}.bind(this))},_toggleVizTimer:function(){this.playing?this._stopVizTimer():this._startVizTimer()},_startVizTimer:function(){this._stopVizTimer();this.vizTimer=setInterval(q.hitch(this,this._doViz),
10*this.config.interval);this.fxLayer&&(this.fxLayer.visible=!0,this.fxLayer.startSpinning());this.playing=!0;k.add(this.btnPlay,"playing")},_stopVizTimer:function(){this.vizTimer&&(clearInterval(this.vizTimer),this.vizTimer=null);this.fxLayer&&this.fxLayer.pauseSpinning();this.playing=!1;this.btnPlay&&k.remove(this.btnPlay,"playing")},_doViz:function(){var a=this.vizPage+1;a>=this.config.vizFields.length&&(a=0);this._setVizPage(a)},_processViz:function(a){var g=this.config.vizFields[this.vizPage],
b=g.field,d=this.config.displayField;this.titleNode.innerHTML=S.sanitizeHTML(g.label||g.alias);if(this.fxLayer&&!0!==a){var h=this._getRenderingInfo();this.fxLayer.when().then(function(){this.fxLayer.switchVizField(b,h)}.bind(this))}a=this._sortedFeatures[b];a||(a=l.filter(this.vizFeatures,function(n){return null!==n.attributes[b]?!0:!1}),0<a.length&&(a.sort(function(n,r){return n.attributes[b]<r.attributes[b]?1:n.attributes[b]>r.attributes[b]?-1:0}),l.forEach(a,function(n,r){n.attributes.index=r}),
this.vizMax=a[0].attributes[b]),this._sortedFeatures[b]=a);this.filteredFeatures=a;d={features:a,vizField:b,displayField:d,color:this._getColor()};this.vizCards.update(d);this.loadingCover.hide()},_featureSelection:function(a){a.data?(a=a.data,this.playing&&this._stopVizTimer(),this.fxLayer&&this.fxLayer.showLabel(a)):this.fxLayer&&this.fxLayer.hideLabel()},_getFeatureIndex:function(a){var g=this.config.displayField,b=a.attributes[g],d=0;l.some(this.filteredFeatures,function(h){if(h.attributes[g]===
b)return!0;d+=1});return d}})});