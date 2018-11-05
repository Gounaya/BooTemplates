!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,R(),fa=this,c=c||{},ka=c.constants||{},c.easing)for(var d in c.easing)U[d]=c.easing[d];ra=c.edgeStrategy||"set",ia={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},ja=!1!==c.forceHeight,ja&&(Ia=c.scale||1),la=c.mobileDeceleration||y,na=!1!==c.smoothScrolling,oa=c.smoothScrollingDuration||z,pa={targetTop:fa.getScrollTop()},Qa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Qa?(ha=b.getElementById("skrollr-body"),ha&&ea(),V(),Ca(e,[s,v],[t])):Ca(e,[s,u],[t]),fa.refresh(),ua(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;b===Na&&a===Ma||(Na=b,Ma=a,Oa=!0)});var g=S();return function a(){Y(),ta=g(a)}(),fa}var e,f,g={get:function(){return fa},init:function(a){return fa||new d(a)},VERSION:"0.6.26"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z=200,A="end",B="center",C="bottom",D="___skrollable_id",E=/^(?:input|textarea|button|select)$/i,F=/^\s+|\s+$/g,G=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,H=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,I=/^(@?[a-z\-]+)\[(\w+)\]$/,J=/-([a-z0-9_])/g,K=function(a,b){return b.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,N=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,O=/[a-z\-]+-gradient/g,P="",Q="",R=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(P=c.match(a)||+c==c&&b[c].match(a))break;if(!P)return void(P=Q="");P=P[0],"-"===P.slice(0,1)?(Q=P,P={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[P]):Q="-"+P.toLowerCase()+"-"}},S=function(){var b=a.requestAnimationFrame||a[P.toLowerCase()+"RequestAnimationFrame"],c=Fa();return!Qa&&b||(b=function(b){var d=Fa()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Fa(),b()},e)}),b},T=function(){var b=a.cancelAnimationFrame||a[P.toLowerCase()+"CancelAnimationFrame"];return!Qa&&b||(b=function(b){return a.clearTimeout(b)}),b},U={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(a<=.5083)b=3;else if(a<=.8489)b=9;else if(a<=.96208)b=27;else{if(!(a<=.99981))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ga=[],Pa=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;d<e;d++){var g=a[d],h=g,i=[],j=na,k=ra,l=!1;if(f&&D in g&&delete g[D],g.attributes){for(var m=0,n=g.attributes.length;m<n;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(G);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(J,K)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&"start"!==u&&u!==A?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===A?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ia))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(null===(h=b.querySelector(p.value)))throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&D in g?(y=g[D],w=ga[y].styleAttr,x=ga[y].classAttr):(y=g[D]=Pa++,w=g.style.cssText,x=Ba(g)),ga[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ca(g,[o],[])}}}for(ya(),d=0,e=a.length;d<e;d++){var z=ga[a[d][D]];z!==c&&(Z(z),_(z))}return fa},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===C?g-=d:b===B&&(g-=d/2),c===C?g+=h:c===B&&(g+=h/2),(g+=fa.getScrollTop())+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Fa(),e=fa.getScrollTop();return ma={startTop:e,topDiff:a-e,targetTop:a,duration:b.duration||x,startTime:d,endTime:d+(b.duration||x),easing:U[b.easing||w],done:b.done},ma.topDiff||(ma.done&&ma.done.call(fa,!1),ma=c),fa},d.prototype.stopAnimateTo=function(){ma&&ma.done&&ma.done.call(fa,!0),ma=c},d.prototype.isAnimatingTo=function(){return!!ma},d.prototype.isMobile=function(){return Qa},d.prototype.setScrollTop=function(b,c){return qa=!0===c,Qa?Ra=i.min(i.max(b,0),Ha):a.scrollTo(0,b),fa},d.prototype.getScrollTop=function(){return Qa?Ra:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ha},d.prototype.on=function(a,b){return ia[a]=b,fa},d.prototype.off=function(a){return delete ia[a],fa},d.prototype.destroy=function(){T()(ta),wa(),Ca(e,[t],[s,u,v]);for(var a=0,b=ga.length;a<b;a++)da(ga[a].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ha&&g.setStyle(ha,"transform","none"),fa=c,ha=c,ia=c,ja=c,Ha=0,Ia=1,ka=c,la=c,Ja="down",Ka=-1,Ma=0,Na=0,Oa=!1,ma=c,na=c,oa=c,pa=c,qa=c,Pa=0,ra=c,Qa=!1,Ra=0,sa=c};var V=function(){var d,g,h,j,o,p,q,r,s,t,u,v;ua(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,E.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),fa.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:E.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,fa.setScrollTop(Ra-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p;if(w*w+f*f<49){if(!E.test(d.tagName)){d.focus();var x=b.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(x)}return}d=c;var y=r/v;y=i.max(i.min(y,3),-3);var z=i.abs(y/la),A=y*z+.5*la*z*z,B=fa.getScrollTop()-A,C=0;B>Ha?(C=(Ha-B)/A,B=Ha):B<0&&(C=-B/A,B=0),z*=1-C,fa.animateTo(B+.5|0,{easing:"outCubic",duration:z})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},W=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=za();for(j=0,k=ga.length;j<k;j++)for(a=ga[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;f<g;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(da(b),h.frame=fa.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,da(b,!0)),h.frame+=m,ja&&!h.isEnd&&h.frame>Ha&&(Ha=h.frame);for(Ha=i.max(Ha,Aa()),j=0,k=ga.length;j<k;j++){for(a=ga[j],d=a.keyFrames,f=0,g=d.length;f<g;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ha-h.offset+m);a.keyFrames.sort(Ga)}},X=function(a,b){for(var c=0,d=ga.length;c<d;c++){var e,f,i=ga[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ca(j,[p],[r,q]),w&&x>-1&&(xa(j,n.eventType,Ja),i.lastFrameIndex=-1)):(Ca(j,[r],[p,q]),w&&x<m&&(xa(j,s.eventType,Ja),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":da(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ca(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ca(j,[o,q],[p,r]),i.edge=0);for(var z=0;z<m-1;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=ba(A.props[e].value,B.props[e].value,C),f=ca(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===Ja?xa(j,A.eventType,Ja):xa(j,B.eventType,Ja),i.lastFrameIndex=z);break}}},Y=function(){Oa&&(Oa=!1,ya());var a,b,d=fa.getScrollTop(),e=Fa();if(ma)e>=ma.endTime?(d=ma.targetTop,a=ma.done,ma=c):(b=ma.easing((e-ma.startTime)/ma.duration),d=ma.startTop+b*ma.topDiff|0),fa.setScrollTop(d,!0);else if(!qa){var f=pa.targetTop-d;f&&(pa={startTop:Ka,topDiff:d-Ka,targetTop:d,startTime:La,endTime:La+oa}),e<=pa.endTime&&(b=U.sqrt((e-pa.startTime)/oa),d=pa.startTop+b*pa.topDiff|0)}if(Qa&&ha&&g.setStyle(ha,"transform","translate(0, "+-Ra+"px) "+sa),qa||Ka!==d){Ja=d>Ka?"down":d<Ka?"up":Ja,qa=!1;var h={curTop:d,lastTop:Ka,maxTop:Ha,direction:Ja};!1!==(ia.beforerender&&ia.beforerender.call(fa,h))&&(X(d,fa.getScrollTop()),Ka=d,ia.render&&ia.render.call(fa,h)),a&&a.call(fa,!1)}La=e},Z=function(a){for(var b=0,c=a.keyFrames.length;b<c;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=H.exec(h.props));)f=g[1],e=g[2],d=f.match(I),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?$(e):[e.slice(1)],i[f]={value:e,easing:U[d]};h.props=i}},$=function(a){var b=[];return N.lastIndex=0,a=a.replace(N,function(a){return a.replace(L,function(a){return a/255*100+"%"})}),Q&&(O.lastIndex=0,a=a.replace(O,function(a){return Q+a})),a=a.replace(L,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},_=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;b<c;b++)aa(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)aa(a.keyFrames[b],d)},aa=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},ba=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;d<e;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ca=function(a){var b=1;return M.lastIndex=0,a[0].replace(M,function(){return a[b++]})},da=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;e<f;e++)d=a[e],(c=ga[d[D]])&&(b?(d.style.cssText=c.dirtyStyleAttr,Ca(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Ba(d),d.style.cssText=c.styleAttr,Ca(d,c.classAttr)))},ea=function(){sa="translateZ(0)",g.setStyle(ha,"transform",sa);var a=j(ha),b=a.getPropertyValue("transform"),c=a.getPropertyValue(Q+"transform");b&&"none"!==b||c&&"none"!==c||(sa="")};g.setStyle=function(a,b,c){var d=a.style;if("zIndex"===(b=b.replace(J,K).replace("-","")))isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{P&&(d[P+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(a){}};var fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;g<h;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Sa.push({element:b,name:f,listener:d})},va=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;d<e;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},wa=function(){for(var a,b=0,c=Sa.length;b<c;b++)a=Sa[b],va(a.element,a.name,a.listener);Sa=[]},xa=function(a,b,c){ia.keyframe&&ia.keyframe.call(fa,a,b,c)},ya=function(){var a=fa.getScrollTop();Ha=0,ja&&!Qa&&(f.style.height=""),W(),ja&&!Qa&&(f.style.height=Ha+e.clientHeight+"px"),Qa?fa.setScrollTop(i.min(fa.getScrollTop(),Ha)):fa.setScrollTop(a,!0),qa=!0},za=function(){var a,b,c=e.clientHeight,d={};for(a in ka)b=ka[a],"function"==typeof b?b=b.call(fa):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Aa=function(){var a=ha&&ha.offsetHeight||0;return i.max(a,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight)-e.clientHeight},Ba=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ca=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;h<i;h++)g=Ea(g).replace(Ea(e[h])," ");g=Da(g);for(var j=0,k=d.length;j<k;j++)-1===Ea(g).indexOf(Ea(d[j]))&&(g+=" "+d[j]);b[f]=Da(g)},Da=function(a){return a.replace(F,"")},Ea=function(a){return" "+a+" "},Fa=Date.now||function(){return+new Date},Ga=function(a,b){return a.frame-b.frame},Ha=0,Ia=1,Ja="down",Ka=-1,La=Fa(),Ma=0,Na=0,Oa=!1,Pa=0,Qa=!1,Ra=0,Sa=[];"function"==typeof define&&define.amd?define("skrollr",function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);