function org_dashbuilder_DashbuilderRuntime(){var O="bootstrap",P="begin",Q="gwt.codesvr.org.dashbuilder.DashbuilderRuntime=",R="gwt.codesvr=",S="org.dashbuilder.DashbuilderRuntime",T="startup",U="DUMMY",V=0,W=1,X="iframe",Y="position:absolute; width:0; height:0; border:none; left: -1000px;",Z=" top: -1000px;",$="CSS1Compat",_="<!doctype html>",ab="",bb="<html><head></head><body></body></html>",cb="undefined",db="readystatechange",eb=10,fb="Chrome",gb='eval("',hb='");',ib="script",jb="javascript",kb="moduleStartup",lb="moduleRequested",mb="org_dashbuilder_DashbuilderRuntime",nb="Failed to load ",ob="head",pb="meta",qb="name",rb="org.dashbuilder.DashbuilderRuntime::",sb="::",tb="gwt:property",ub="content",vb="=",wb="gwt:onPropertyErrorFn",xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb="gwt:onLoadErrorFn",Ab='" for "gwt:onLoadErrorFn"',Bb="#",Cb="?",Db="/",Eb="img",Fb="clear.cache.gif",Gb="baseUrl",Hb="org.dashbuilder.DashbuilderRuntime.nocache.js",Ib="base",Jb="//",Kb="user.agent",Lb="webkit",Mb="safari",Nb="msie",Ob=11,Pb="ie10",Qb=9,Rb="ie9",Sb=8,Tb="ie8",Ub="gecko",Vb="gecko1_8",Wb=2,Xb=3,Yb=4,Zb="selectingPermutation",$b="org.dashbuilder.DashbuilderRuntime.devmode.js",_b="2BF142E6F3FFEA9A60C223D58D2DB5E4",ac="B4F1A7259859139A2F40E6C5114CA3DF",bc=":",cc=".cache.js",dc="link",ec="rel",fc="stylesheet",gc="href",hc="loadExternalRefs",ic="jquery-ui/jquery-ui.min.css",jc="bootstrap-daterangepicker/daterangepicker.css",kc="bootstrap-select/css/bootstrap-select.min.css",lc="uberfire-patternfly.css",mc="css/patternfly.min.css",nc="css/patternfly-additions.min.css",oc="css/bootstrap-datepicker3-1.6.4.min.cache.css",pc="css/bootstrap-switch-3.3.2.min.cache.css",qc="css/positioned-tabs-1.0.0.min.cache.css",rc="css/bootstrap-datetimepicker-2.4.4.min.cache.css",sc="css/bootstrap-slider-9.2.0.min.cache.css",tc="end",uc="http:",vc="file:",wc="_gwt_dummy_",xc="__gwtDevModeHook:org.dashbuilder.DashbuilderRuntime",yc="Ignoring non-whitelisted Dev Mode URL: ",zc=":moduleBase",o=window,p=document;function q(){var e=o.location.search;return-1!=e.indexOf(Q)||-1!=e.indexOf(R)}function r(e,t){o.__gwtStatsEvent&&o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:e,millis:(new Date).getTime(),type:t})}r(O,P),org_dashbuilder_DashbuilderRuntime.__sendStats=r,org_dashbuilder_DashbuilderRuntime.__moduleName=S,org_dashbuilder_DashbuilderRuntime.__errFn=null,org_dashbuilder_DashbuilderRuntime.__moduleBase=U,org_dashbuilder_DashbuilderRuntime.__softPermutationId=V,org_dashbuilder_DashbuilderRuntime.__computePropValue=null,org_dashbuilder_DashbuilderRuntime.__getPropMap=null,org_dashbuilder_DashbuilderRuntime.__installRunAsyncCode=function(){},org_dashbuilder_DashbuilderRuntime.__gwtStartLoadingFragment=function(){return null},org_dashbuilder_DashbuilderRuntime.__gwt_isKnownPropertyValue=function(){return!1},org_dashbuilder_DashbuilderRuntime.__gwt_getMetaProperty=function(){return null};var s=null,t=o.__gwt_activeModules=o.__gwt_activeModules||{},u;function v(){return w(),u}function w(){if(!u){var e=p.createElement(X);e.id=S,e.style.cssText=Y+Z,e.tabIndex=-1,p.body.appendChild(e),(u=e.contentWindow.document).open();var t=document.compatMode==$?_:ab;u.write(t+bb),u.close()}}function A(e){org_dashbuilder_DashbuilderRuntime.onScriptDownloaded=function(e){!function(e){function t(){return typeof p.readyState==cb?typeof p.body!=cb&&null!=p.body:/loaded|complete/.test(p.readyState)}var r=t();if(r)e();else{p.addEventListener&&p.addEventListener(db,i,!1);var n=setInterval((function(){i()}),eb)}function i(){if(!r){if(!t())return;r=!0,e(),p.removeEventListener&&p.removeEventListener(db,i,!1),n&&clearInterval(n)}}}((function(){!function(e){function t(e,t){e.removeChild(t)}var r,n=v(),i=n.body;if(navigator.userAgent.indexOf(fb)>-1&&window.JSON){var a=n.createDocumentFragment();a.appendChild(n.createTextNode(gb));for(var o=V;o<e.length;o++){var s=window.JSON.stringify(e[o]);a.appendChild(n.createTextNode(s.substring(W,s.length-W)))}a.appendChild(n.createTextNode(hb)),(r=n.createElement(ib)).language=jb,r.appendChild(a),i.appendChild(r),t(i,r)}else for(o=V;o<e.length;o++)(r=n.createElement(ib)).language=jb,r.text=e[o],i.appendChild(r),t(i,r)}(e)}))},r(kb,lb);var t=p.createElement(ib);t.src=e,org_dashbuilder_DashbuilderRuntime.__errFn&&(t.onerror=function(){org_dashbuilder_DashbuilderRuntime.__errFn(mb,new Error(nb+code))}),p.getElementsByTagName(ob)[V].appendChild(t)}function B(){for(var c={},d,e,f=p.getElementsByTagName(pb),g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){if(j=j.replace(rb,ab),j.indexOf(sb)>=V)continue;if(j==tb){if(k=i.getAttribute(ub),k){var l,m=k.indexOf(vb);m>=V?(j=k.substring(V,m),l=k.substring(m+W)):(j=k,l=ab),c[j]=l}}else if(j==wb){if(k=i.getAttribute(ub),k)try{d=eval(k)}catch(e){alert(xb+k+yb)}}else if(j==zb&&(k=i.getAttribute(ub),k))try{e=eval(k)}catch(e){alert(xb+k+Ab)}}}__gwt_getMetaProperty=function(e){var t=c[e];return null==t?null:t},s=d,org_dashbuilder_DashbuilderRuntime.__errFn=e}function C(){function e(e){var t=e.lastIndexOf(Bb);-1==t&&(t=e.length);var r=e.indexOf(Cb);-1==r&&(r=e.length);var n=e.lastIndexOf(Db,Math.min(r,t));return n>=V?e.substring(V,n+W):ab}var t,r=null!=(t=__gwt_getMetaProperty(Gb))?t:ab;return r==ab&&(r=function(){for(var t=p.getElementsByTagName(ib),r=V;r<t.length;++r)if(-1!=t[r].src.indexOf(Hb))return e(t[r].src);return ab}()),r==ab&&(r=function(){var e=p.getElementsByTagName(Ib);return e.length>V?e[e.length-W].href:ab}()),r==ab&&function(){var e=p.location;return e.href==e.protocol+Jb+e.host+e.pathname+e.search+e.hash}()&&(r=e(p.location.href)),r=function(t){if(t.match(/^\w+:\/\//));else{var r=p.createElement(Eb);r.src=t+Fb,t=e(r.src)}return t}(r),r}function D(e){return e.match(/^\//)||e.match(/^[a-zA-Z]+:\/\//)?e:org_dashbuilder_DashbuilderRuntime.__moduleBase+e}function F(){var e=[],t=V;function n(t,r){for(var n=e,i=V,a=t.length-W;i<a;++i)n=n[t[i]]||(n[t[i]]=[]);n[t[a]]=r}var i,a=[],u=[];function d(e){var t=u[e](),r=a[e];if(t in r)return t;var n=[];for(var i in r)n[r[i]]=i;throw s&&s(e,n,t),null}if(u[Kb]=function(){var e=navigator.userAgent.toLowerCase(),t=p.documentMode;return-1!=e.indexOf(Lb)?Mb:-1!=e.indexOf(Nb)&&t>=eb&&t<Ob?Pb:-1!=e.indexOf(Nb)&&t>=Qb&&t<Ob?Rb:-1!=e.indexOf(Nb)&&t>=Sb&&t<Ob?Tb:-1!=e.indexOf(Ub)||t>=Ob?Vb:ab},a[Kb]={gecko1_8:V,ie10:W,ie8:Wb,ie9:Xb,safari:Yb},__gwt_isKnownPropertyValue=function(e,t){return t in a[e]},org_dashbuilder_DashbuilderRuntime.__getPropMap=function(){var e={};for(var t in a)a.hasOwnProperty(t)&&(e[t]=d(t));return e},org_dashbuilder_DashbuilderRuntime.__computePropValue=d,o.__gwt_activeModules[S].bindings=org_dashbuilder_DashbuilderRuntime.__getPropMap,r(O,Zb),q())return D($b);try{n([Vb],_b),n([Mb],ac);var b=(i=e[d(Kb)]).indexOf(bc);-1!=b&&(t=parseInt(i.substring(b+W),eb),i=i.substring(V,b))}catch(e){}return org_dashbuilder_DashbuilderRuntime.__softPermutationId=t,D(i+cc)}function G(){function e(e){if(!__gwt_stylesLoaded[e]){var t=p.createElement(dc);t.setAttribute(ec,fc),t.setAttribute(gc,D(e)),p.getElementsByTagName(ob)[V].appendChild(t),__gwt_stylesLoaded[e]=!0}}o.__gwt_stylesLoaded||(o.__gwt_stylesLoaded={}),r(hc,P),e(ic),e(jc),e(kc),e(lc),e(mc),e(nc),e(oc),e(pc),e(qc),e(rc),e(sc),r(hc,tc)}t[S]={moduleName:S},org_dashbuilder_DashbuilderRuntime.__moduleStartupDone=function(e){var r=t[S].bindings;t[S].bindings=function(){for(var t=r?r():{},n=e[org_dashbuilder_DashbuilderRuntime.__softPermutationId],i=V;i<n.length;i++){var a=n[i];t[a[V]]=a[W]}return t}},org_dashbuilder_DashbuilderRuntime.__startLoadingFragment=function(e){return D(e)},org_dashbuilder_DashbuilderRuntime.__installRunAsyncCode=function(e){var t=v(),r=t.body,n=t.createElement(ib);n.language=jb,n.text=e,r.appendChild(n),r.removeChild(n)},B(),org_dashbuilder_DashbuilderRuntime.__moduleBase=C(),t[S].moduleBase=org_dashbuilder_DashbuilderRuntime.__moduleBase;var H=F();if(o){var I=!(o.location.protocol!=uc&&o.location.protocol!=vc);function J(){var e=wc;try{return o.sessionStorage.setItem(e,e),o.sessionStorage.removeItem(e),!0}catch(e){return!1}}if(o.__gwt_activeModules[S].canRedirect=I,I&&J()){var K=xc,L=o.sessionStorage[K];if(/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)||(L&&window.console&&console.log&&console.log(yc+L),L=ab),L&&!o[K]){o[K]=!0,o[K+zc]=C();var M=p.createElement(ib);M.src=L;var N=p.getElementsByTagName(ob)[V];return N.insertBefore(M,N.firstElementChild||N.children[V]),!1}}}return G(),r(O,tc),A(H),!0}org_dashbuilder_DashbuilderRuntime.succeeded=org_dashbuilder_DashbuilderRuntime();