//>>built
(function(h){var b={},g=h.document;b.disabled=!1;b.set=function(a,c){};b.get=function(a){};b.remove=function(a){};b.clear=function(){};b.transact=function(a,c,d){var f=b.get(a);null==d&&(d=c,c=null);"undefined"==typeof f&&(f=c||{});d(f);b.set(a,f)};b.getAll=function(){};b.forEach=function(){};b.serialize=function(a){return JSON.stringify(a)};b.deserialize=function(a){if("string"==typeof a)try{return JSON.parse(a)}catch(c){return a||void 0}};try{var p="localStorage"in h&&h.localStorage}catch(a){p=
!1}if(p){var e=h.localStorage;b.set=function(a,c){if(void 0===c)return b.remove(a);e.setItem(a,b.serialize(c));return c};b.get=function(a){return b.deserialize(e.getItem(a))};b.remove=function(a){e.removeItem(a)};b.clear=function(){e.clear()};b.getAll=function(){var a={};b.forEach(function(c,d){a[c]=d});return a};b.forEach=function(a){for(var c=0;c<e.length;c++){var d=e.key(c);a(d,b.get(d))}}}else if(g.documentElement.addBehavior){try{var k=new ActiveXObject("htmlfile");k.open();k.write('\x3cscript\x3edocument.w\x3dwindow\x3c/script\x3e\x3ciframe src\x3d"/favicon.ico"\x3e\x3c/iframe\x3e');
k.close();var l=k.w.frames[0].document;e=l.createElement("div")}catch(a){e=g.createElement("div"),l=g.body}g=function(a){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(e);l.appendChild(e);e.addBehavior("#default#userData");e.load("localStorage");c=a.apply(b,c);l.removeChild(e);return c}};var q=/[!"#$%&'()*+,/\\:;<=>?@[\]^`{|}~]/g,m=function(a){return a.replace(/^d/,"___$\x26").replace(q,"___")};b.set=g(function(a,c,d){c=m(c);if(void 0===d)return b.remove(c);a.setAttribute(c,
b.serialize(d));a.save("localStorage");return d});b.get=g(function(a,c){c=m(c);return b.deserialize(a.getAttribute(c))});b.remove=g(function(a,c){c=m(c);a.removeAttribute(c);a.save("localStorage")});b.clear=g(function(a){var c=a.XMLDocument.documentElement.attributes;a.load("localStorage");for(var d=0,f;f=c[d];d++)a.removeAttribute(f.name);a.save("localStorage")});b.getAll=function(a){var c={};b.forEach(function(d,f){c[d]=f});return c};b.forEach=g(function(a,c){for(var d=a.XMLDocument.documentElement.attributes,
f=0,n;n=d[f];++f)c(n.name,b.deserialize(a.getAttribute(n.name)))})}try{b.set("__storejs__","__storejs__"),"__storejs__"!=b.get("__storejs__")&&(b.disabled=!0),b.remove("__storejs__")}catch(a){b.disabled=!0}b.enabled=!b.disabled;"undefined"!=typeof module&&module.exports&&this.module!==module?module.exports=b:"function"===typeof define&&define.amd?define(b):h.store=b})(Function("return this")());