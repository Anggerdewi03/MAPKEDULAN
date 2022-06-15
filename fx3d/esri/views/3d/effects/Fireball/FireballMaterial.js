//>>built
require({cache:{"url:fx3d/views/3d/effects/Fireball/FireballMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\x3c!-- Copyright @ 2022 Esri. All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions. --\x3e\x3csnippets\x3e\x3csnippet name\x3d"fireballFS"\x3e\x3c![CDATA[uniform sampler2D ps;uniform float ls;uniform vec3 ml;uniform vec4 ms;uniform vec4 os;uniform vec4 so;uniform vec3 ol;uniform bool drawPath;varying vec4 gc;varying vec3 cc;varying vec3 dc;void main(){float a\x3dls*0.01;gl_FragColor.rgb\x3dgc.rgb;gl_FragColor.a\x3d1.0;if(!drawPath){\r\n#ifdef GLOBAL\r\ngl_FragColor\x3d(texture2D(ps,gl_PointCoord)*gl_FragColor);if(gl_FragColor.r\x3e\x3d0.15\x26\x26gl_FragColor.g\x3e\x3d0.15\x26\x26gl_FragColor.b\x3e\x3d0.15){gl_FragColor.rgb-\x3dvec3(0.15,0.15,0.15);}\r\n#else\r\ngl_FragColor\x3d(texture2D(ps,gl_PointCoord)*gl_FragColor)+vec4(0.27,0.27,0.27,0.0);\r\n#endif\r\ngl_FragColor.a*\x3da;}else{gl_FragColor.a*\x3d(0.3*a);}if(gl_FragColor.r\x3c\x3d1e-6\x26\x26gl_FragColor.g\x3c\x3d1e-6\x26\x26gl_FragColor.b\x3c\x3d1e-6){gl_FragColor.rgb\x3dvec3(0.1,0.1,0.1);gl_FragColor.a\x3d0.1;}}]]\x3e\x3c/snippet\x3e\x3csnippet name\x3d"fireballVS"\x3e\x3c![CDATA[attribute vec3 $auxpos1;uniform mat4 ss;uniform mat4 es;uniform sampler2D sm;uniform vec2 el;uniform sampler2D ei;uniform vec2 oo;uniform float mp;uniform float mo;uniform float sl;uniform vec2 io;uniform bool drawPath;uniform sampler2D pp;uniform bool pm;varying vec4 gc;varying vec3 cc;varying vec3 dc; $linearInterpolator  $lonlat2position  $localTrans  $curveInter void main(void){float a\x3dfract($auxpos1.x*2.0/oo.x);float b\x3dfloor($auxpos1.x*2.0/oo.y)/oo.y;vec4 c\x3dtexture2D(ei,vec2(a,b));if(abs(c.r-$auxpos1.x)\x3cEpsilon){vec3 d\x3dc.gba;a\x3dfract(($auxpos1.x*2.0+1.0)/oo.x);b\x3dfloor(($auxpos1.x*2.0+1.0)/oo.y)/oo.y;vec4 e\x3dtexture2D(ei,vec2(a,b));vec3 f\x3de.gba;vec3 g,h,i,j;float k,l;float m\x3d1.0;float n\x3d0.0;\r\n#ifdef GLOBAL\r\nd\x3dlonlat2position(d);f\x3dlonlat2position(f);g\x3d(d+f)*0.5;h\x3dnormalize(g);i\x3dd-f;k\x3dlength(i);g\x3dh*(length(g)+k*0.6);if(k\x3c\x3d1000.0){l\x3d32.0;}else if(k\x3c\x3d10000.0){l\x3d24.0;}else if(k\x3c\x3d500000.0){l\x3d18.0;}else if(k\x3c\x3d1000000.0){l\x3d40.0;}else{l\x3dfloor(k*0.00001);}if(drawPath){n\x3d$auxpos1.z;}else{n\x3dmod($auxpos1.z+(l*2.0+1.0)/mp*sl,l*2.0+1.0);}if((n\x3e\x3dl)\x26\x26(n\x3c(l*2.0+1.0))){m\x3d-1.0;n-\x3dl;}vec3 o\x3dnormalize(i);vec3 p\x3dg+o*(k*0.6*m);float q\x3dn/l;q\x3dclamp(q,0.0,1.0);if(m\x3c\x3d0.0){j\x3dgetPoint(q,g,p,f,f);}else{j\x3dgetPoint(q,d,d,p,g);}cc\x3dnormalize(j);\r\n#else\r\nd\x3dwgs84ToWebMerc(d);f\x3dwgs84ToWebMerc(f);g\x3d(d+f)*0.5;h\x3dvec3(0.0,0.0,1.0);i\x3dd-f;k\x3dlength(i);g\x3dg+h*(k*0.3);if(k\x3c\x3d1000.0){l\x3d48.0;}else if(k\x3c\x3d10000.0){l\x3d42.0;}else if(k\x3c\x3d100000.0){l\x3d32.0;}else if(k\x3c\x3d1000000.0){l\x3d24.0;}else if(k\x3c\x3d2000000.0){l\x3d36.0;}else{l\x3dfloor(k*0.000006);}if(drawPath){n\x3d$auxpos1.z;}else{n\x3dmod($auxpos1.z+(l*2.0+1.0)/mp*sl,l*2.0+1.0);}if((n\x3e\x3dl)\x26\x26(n\x3c(l*2.0+1.0))){m\x3d-1.0;n-\x3dl;}vec3 o\x3dnormalize(i);vec3 p\x3dg+o*(k*0.3*m);float q\x3dn/l;q\x3dclamp(q,0.0,1.0);if(m\x3c\x3d0.0){j\x3dgetPoint(q,g,p,f,f);}else{j\x3dgetPoint(q,d,d,p,g);}cc\x3dvec3(0.0,0.0,1.0);\r\n#endif\r\ngl_Position\x3dss*es*vec4(j,1.0);dc\x3dj;a\x3dfract($auxpos1.y/el.x);b\x3dfloor($auxpos1.y/el.y)/el.y;float r\x3d(texture2D(sm,vec2(a,b))).r;float s\x3dgetLinearValue(io,r);if(!drawPath){gl_PointSize\x3dmo*pow(2.718,s);}gc\x3dtexture2D(pp,vec2(s,0.5));}else{vec3 j\x3dvec3(0.0,0.0,0.0);gl_Position\x3dss*es*vec4(j,1.0);dc\x3dj;if(!drawPath) gl_PointSize\x3dmo;gc\x3dvec4(1.0,1.0,0.0,1.0);cc\x3dnormalize(j);}}]]\x3e\x3c/snippet\x3e\x3c/snippets\x3e'}});
define("dojo/text!./FireballMaterial.xml dojo/_base/declare ../../webgl-engine-extensions/GLSLShader ../../webgl-engine-extensions/GLSLProgramExt ../../support/fx3dUtils ../Materials".split(" "),function(h,k,g,l,p,m){return k([m],{declaredClass:"esri.views.3d.effects.Fireball.FireballMaterial",constructor:function(a){this._gl=a.gl;this._shaderSnippets=a.shaderSnippets;this._program=null;this._pushState=a.pushState;this._restoreState=a.restoreState;this._srcAlpha=770;this._dstAlpha=1;this._viewingMode=
a.viewingMode;"local"==a.viewingMode&&(this._srcAlpha=770,this._dstAlpha=771)},destroy:function(){this._program&&(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(a,b,c){var d="";if(null!=c)if(Array.isArray(c))for(var e=0,n=c.length;e<n;e++){var f=c[e];d+="#define "+f+"\n"}else for(f in c)d+="#define "+f+"\n";return this._shaderSnippets[a]+"\n"+d+b},loadShaders:function(a){if(this._shaderSnippets){null!=this._shaderSnippets.fireballVS&&null!=this._shaderSnippets.fireballFS||
this._shaderSnippets._parse(h);var b=[];"global"==this._viewingMode?b.push("GLOBAL"):b.push("LOCAL");var c=this._addDefines("defines",this._shaderSnippets.fireballVS,b);a=new g(35633,c,this._gl);c=this._addDefines("defines2",this._shaderSnippets.fireballFS,b);b=new g(35632,c,this._gl);this._program=new l([a,b],this._gl);this._program.init()}return this._initResources()},getProgram:function(){return this._program},_initResources:function(){return!0},bind:function(a,b){this._program.use();this._program.uniformMatrix4fv("ss",
a.proj);this._program.uniformMatrix4fv("es",a.view);this._program.uniform3fv("ol",a.camPos);this._program.uniform3fv("ml",a.lightingData.direction);this._program.uniform4fv("ms",a.lightingData.ambient);this._program.uniform4fv("os",a.lightingData.diffuse);this._program.uniform4fv("so",a.lightingData.specular);this._oldTex=this._gl.getParameter(32873);var c=this.getOldActiveUnit(b);a.sm.bind(c+1);this._program.uniform1i("sm",c+1);this._program.uniform2fv("el",a.el);this._program.uniform2fv("io",[a.io,
a.is]);a.ei.bind(c+2);this._program.uniform1i("ei",c+2);this._program.uniform2fv("oo",a.oo);this._gl.activeTexture(33984+c+3);this._gl.bindTexture(3553,a.ps);this._program.uniform1i("ps",c+3);this._gl.activeTexture(33984+c+4);this._gl.bindTexture(3553,a.pp);this._program.uniform1i("pp",c+4);this._program.uniform1f("mp",a.mp);this._program.uniform1f("mo",a.mo);this._program.uniform1f("ls",a.ls);this._program.uniform1f("sl",a.time);this._program.uniform1i("pm",a.reachedRepeatLimit);0!=b._depthWriteEnabled&&
(this._pushState(["setDepthWriteEnabled",b._depthWriteEnabled]),b.setDepthWriteEnabled(!1));1!=b._depthTestEnabled&&(this._pushState(["setDepthTestEnabled",b._depthTestEnabled]),b.setDepthTestEnabled(!0));1!=b._blendEnabled&&(this._pushState(["setBlendingEnabled",b._blendEnabled]),b.setBlendingEnabled(!0))},bindBoolean:function(a,b){this._program.uniform1i(a,b)},blend:function(a,b){a?a&&(this._pushState(["setBlendFunctionSeparate",[b._state.blendFunction.srcRGB,b._state.blendFunction.dstRGB,b._state.blendFunction.srcAlpha,
b._state.blendFunction.dstAlpha]]),b.setBlendFunction(770,771)):(this._pushState(["setBlendFunctionSeparate",[b._state.blendFunction.srcRGB,b._state.blendFunction.dstRGB,b._state.blendFunction.srcAlpha,b._state.blendFunction.dstAlpha]]),b.setBlendFunction(this._srcAlpha,this._dstAlpha))},release:function(a){this._gl.activeTexture(33984+a._state.activeTexture+1);this._gl.bindTexture(3553,this._oldTex);this._restoreState(a);this._gl.useProgram(null)}})});