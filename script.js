(function(){var win=window,doc=document,nav=navigator,loc=win.location,pnt=win.parent,pdoc=pnt.document,ploc=pnt.location,referer=(loc.href!=ploc.href)?pdoc.referrer:doc.referrer,requrl=loc.protocol+'//'+loc.host+loc.pathname+loc.search,cok=(nav.cookieEnabled)?true:false,ua=nav.userAgent.toLowerCase(),ver=(ua.match(/.+(?:on|me|rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],saf=/^(?!.*chrome)(?=.*safari)(?!.*edge).*/.test(ua),opr=/opera/.test(ua),mie=/(msie|trident)/.test(ua)&&!opr,oie=mie&&parseInt(ver,10)<9?true:false,moz=/mozilla/.test(ua)&&!/(compatible|webkit)/.test(ua),ios=/(iphone|ipod|ipad)/.test(ua),aid=/android/.test(ua),mob=/mobile/.test(ua),trk=function(){var t=(new Date()).getTime();this.atime=t;return this;};trk.prototype={atime:null,type:{load:'0',clik:'1',bclk:'2',adse:'g'},ckr:'_THKclick',urt:'//thk.lei202.com/portal/track.php',gtl:function(){if(doc.getElementById('title')){var elmT=doc.getElementsByTagName('title')[0];return(mie)?elmT.innerHTML:elmT.firstChild.nodeValue;}
else{return doc.title;}},urg:function(url,ttl,referer,type){return this.urt+'?LT='+type+'&RF='+encodeURIComponent(referer)+'&UR='+encodeURIComponent(url)+'&TI='+encodeURIComponent(ttl)+'&SW='+screen.width+'&SH='+screen.height+'&SC='+screen.colorDepth+'&CC='+cok+'&s='+Math.floor(Math.random()*100);},snd:function(url,dom){if(dom){var ite=doc.getElementById('item');var bde=(ite)?ite:doc.getElementsByTagName('body').item(0);var nn=doc.createElement('script');nn.async=false;nn.defer=true;nn.src=url;bde.appendChild(nn);this.wat(0.4);}
else{if(oie){var nn=doc.createElement('div');nn.innerHTML='&nbsp;<script defer="defer" type="text/javascript" src="'+url+'" ></script>';doc.body.appendChild(nn);}
else{var nn=doc.createElement('script');nn.async=false;nn.defer=true;nn.type='text/javascript';nn.src=url;var s=doc.getElementsByTagName('script');var cc=s[s.length-1];cc.parentNode.insertBefore(nn,cc);}}
return this;},cct:function(e){var url=ttl=rel='';var tge=this.gge(e);var tgn=tge.nodeName.toLowerCase();var cck=function(url,rel,ckr){return(url&&url.match("^(https?:\/\/|ftp:\/\/|\/\/)")&&(!url.match(loc.host)||rel==ckr))?true:false;}
switch(tgn){case'a':url=tge.href;ttl=(mie)?tge.innerText:tge.textContent;rel=(typeof tge.rel!=="undefined")?tge.rel:'';if(cck(url,rel,this.ckr))this.snd(this.urg(url,ttl,requrl,this.type.clik),true);break;case'input':case'button':if(tge.type.toLowerCase()=='button'||tge.type.toLowerCase()=='submit'||tge.type.toLowerCase()=='image'){if(tge.value){url=requrl+'#'+tge.value;ttl='['+tge.value+'] ('+this.gtl()+')';}
else if(tge.id){url=requrl+'#'+tge.id;ttl='['+tge.id.toLowerCase()+'] ('+this.gtl()+')';}
else{url=requrl+'#'+tge.type;ttl='['+tge.type.toLowerCase()+'] ('+this.gtl()+')';}
this.snd(this.urg(url,ttl,requrl,this.type.bclk),true);}
break;default:if(typeof tge.parentNode.href!=="undefined"){url=tge.parentNode.href;ttl=(typeof tge.alt!=="undefined")?tge.alt:((oie)?tge.innerText:tge.firstChild.nodeValue);rel=(typeof tge.parentNode.rel!=="undefined")?tge.parentNode.rel:'';if(cck(url,rel,this.ckr))this.snd(this.urg(url,ttl,requrl,this.type.clik),true);}
break;}},ada:[],adi:[],ado:false,ade:null,igt:null,adt:function(){if(this.ado){for(var i=0;i<this.ada.length;i++){if(this.ada[i]==this.ade){var url=encodeURIComponent('Unit='+(i+1)+',Size='+this.ada[i].width+'x'+this.ada[i].height);this.snd(this.urg(url,url,requrl,this.type.adse),true);this.ado=false;break;}}}},ads:function(e){var ife=doc.getElementsByTagName('iframe');var findAd=false;for(var i=0;i<ife.length;i++){findAd=false;if(ife[i].src.indexOf('googlesyndication.com')>-1||ife[i].src.indexOf('googleads.g.doubleclick.net')>-1)findAd=true;if(ife[i].id&&ife[i].id.indexOf('aswift_')>-1&&ife[i].parentNode.tagName.toLowerCase()=='ins'&&typeof ife[i].parentNode.id!=="undefined"&&ife[i].parentNode.id.indexOf('aswift_')>-1)findAd=true;if(findAd){this.ada[this.ada.length]=ife[i];if(oie){this.aev('focus',trk.tfr.adf,ife[i]);this.aev('blur',trk.tfr.adb,ife[i]);this.aev('beforeunload',trk.tfr.adt,win);}
else{this.aev('mouseover',trk.tfr.adf,ife[i]);this.aev('mouseout',trk.tfr.adb,ife[i]);if(ios||aid||mob){this.aev('click',trk.tfr.adt,win);}
else if(opr){this.aev('unload',trk.tfr.adt,win);}
else{this.aev('beforeunload',trk.tfr.adt,win);}
this.aev('DOMContentLoaded',trk.tfr.adt,ife[i]);}}}},adf:function(e){this.ado=true;this.ade=this.gge(e);},adb:function(){this.ado=false;this.ade=null;},drd:function(c){if(oie){(function(){try{doc.documentElement.doScroll('left');}
catch(error){setTimeout(arguments.callee,0);return;}
c.apply(doc);})();}
else{if(doc.addEventListener){doc.addEventListener('DOMContentLoaded',c,false);}
else{win.attachEvent?win.attachEvent('onload',c):win.addEventListener('load',c,false);}}},aev:function(e,c,o){if((typeof o.nodeType!=="undefined"&&(o.nodeType===1||o.nodeType===9))||o===win){o.attachEvent?o.attachEvent('on'+e,c):o.addEventListener(e,c,false);}
return o;},gge:function(e){return win.event?win.event.srcElement:e.target;},wat:function(sec){var w=(new Date()).getTime()+(sec*1000);while(true){if((new Date()).getTime()>w)return;}},dtk:function(){this.snd(this.urg(requrl,this.gtl(),referer,this.type.load),false);if(mie){this.aev("click",trk.tfr.cct,doc);this.aev("contextmenu",trk.tfr.cct,doc);}
else{this.aev("click",trk.tfr.cct,doc);}
this.drd(trk.tfr.ads);return this;}}
trk.tfr={cct:function(e){__trk.cct(e);},adt:function(e){__trk.adt(e);},ads:function(e){__trk.ads(e);},adf:function(e){__trk.adf(e);},adb:function(e){__trk.adb(e);}}
win.__trk=new trk();__trk.dtk();})()