(function(g){var window=this;var yta=function(a,b){var c=[];g.Jf(b,function(a){var b;try{b=g.aj.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.p(b)?g.$i(b)&&c.push(a):c.push(a)},a);
return c},zta=function(a,b){var c=yta(a,b);
(0,g.F)(c,function(a){g.aj.prototype.remove.call(this,a)},a)},Ata=function(a){return a.H?a.F+((0,g.E)()-a.A)/1E3:a.F},Bta=function(){var a=g.bj;
zta(a,a.g.Ad(!0))},v9=function(a){g.Iw.call(this,"ScreenServiceProxy");
this.Nc=a;this.o=[];this.o.push(this.Nc.$_s("screenChange",(0,g.z)(this.kL,this)));this.o.push(this.Nc.$_s("onlineScreenChange",(0,g.z)(this.RH,this)))},w9=function(a){g.Ew("cloudview",a)},Cta=function(a){w9("setApiReady_ "+a);
g.ka("yt.mdx.remote.cloudview.apiReady_",a,void 0)},x9=function(){return g.u("yt.mdx.remote.cloudview.instance_")},Dta=function(a){g.Fi[a]&&(a=g.Fi[a],(0,g.F)(a,function(a){g.Di[a]&&delete g.Di[a]}),a.length=0)},y9=function(){return g.u("yt.mdx.remote.connection_")},z9=function(a){g.ka("yt.mdx.remote.connectData_",a,void 0)},Eta=function(a){g.ka("yt.mdx.remote.currentScreenId_",a,void 0)},A9=function(){return g.u("yt.mdx.remote.currentScreenId_")},C9=function(){if(!B9){var a=g.u("yt.mdx.remote.screenService_");
B9=a?new v9(a):null}return B9},D9=function(a){g.ka("yt.mdx.remote.cloudview.initializing_",a,void 0)},E9=function(){return!!g.u("yt.mdx.remote.cloudview.apiReady_")},F9=function(a){w9("setCastInstalled_ "+a);
g.dj("yt-remote-cast-installed",a)},G9=function(a){g.Ew("cloudview",a)},Fta=function(a,b){x9().init(a,b)},H9=function(){return!!g.ej("yt-remote-cast-installed")},Gta=function(){w9("dispose");
var a=x9();a&&a.dispose();g.ka("yt.mdx.remote.cloudview.instance_",null,void 0);Cta(!1);g.Hi(I9);I9.length=0},Hta=function(){var a=window.document.createElement("a");
g.we(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Oa(a)},Ita=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Jta=function(a){var b=g.Bi();
if(b)if(b.clear(a),a)Dta(a);else for(var c in g.Fi)Dta(c)},J9=function(){return g.u("yt.mdx.remote.channelParams_")||{}},L9=function(a){var b=y9();
z9(null);a||Eta("");g.ka("yt.mdx.remote.connection_",a,void 0);K9&&((0,g.F)(K9,function(b){b(a)}),K9.length=0);
b&&!a?g.Ki("yt-remote-connection-change",!1):!b&&a&&g.Ki("yt-remote-connection-change",!0)},Kta=function(){return g.u("yt.mdx.remote.connectData_")},M9=function(){var a=A9();
if(!a)return null;var b=C9().Ed();return g.ii(b,a)},Lta=function(a,b){F9(!0);
D9(!1);Fta(a,function(a){a?(Cta(!0),g.Ji("yt-remote-cast2-api-ready")):(G9("Failed to initialize cast API."),F9(!1),g.fj("yt-remote-cast-available"),g.fj("yt-remote-cast-receiver"),Gta());b(a)})},Mta=function(){return H9()?x9()?x9().getCastSession():(G9("getCastSelector: Cast is not initialized."),null):(G9("getCastSelector: Cast API is not installed!"),null)},Nta=function(){if(g.ooa){var a=2,b=g.tw(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.yw("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.vw,c)}},Ota=function(){var a=Hta(),b=window.document.getElementById(a),c=b&&g.ch(b,"loaded");
c||b&&!c||(b=Ita(a,function(){g.ch(b,"loaded")||(g.bh(b,"loaded","true"),g.Ji(a),g.ni(g.va(Jta,a),0))}))},Pta=function(a){return(0,g.Q)(a,function(a){return{key:a.id,
name:a.name}})},O9=function(a,b){A9();
M9()&&M9();Eta(a.id);var c=new g.Uy(N9,a,J9());c.connect(b,Kta());c.subscribe("beforeDisconnect",function(a){g.Ki("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){y9()&&(y9(),L9(null))});
L9(c)},P9=function(){var a=g.ij();
if(!a)return null;var b=C9().Ed();return g.ii(b,a)},Q9=function(a){g.Ew("remote",a)},R9=function(){var a=y9();
return!!a&&3!=a.getProxyState()},S9=function(){E9()?x9().stopSession():G9("stopSession called before API ready.");
var a=y9();a&&(a.disconnect(1),L9(null))},Qta=function(){var a;
a=C9().Nc.$_gos();var b=M9();b&&y9()&&(g.hi(a,b)||a.push(b));return Pta(a)},U9=function(a,b){g.$m.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.Jy;this.A=this.o=null;this.H=(0,g.z)(this.hG,this);this.F=(0,g.z)(this.Qi,this);this.G=(0,g.z)(this.gG,this);this.J=(0,g.z)(this.rG,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Rp,this),Rta(this))):c=3;0!=c&&(b?this.Rp(c):g.ni((0,g.z)(function(){this.Rp(c)},this),0));
var d=Mta();d&&T9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},V9=function(a){return new g.Oy(a.B.getPlayerContextData())},Sta=function(a,b,c,d,e){var f=V9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.Sy(f,b,d);g.p(c)&&(g.Qy(f,c),l.currentTime=c);g.p(k)&&(l.listId=k);W9(a,"setPlaylist",l);e||X9(a,f)},Rta=function(a){(0,g.F)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.va(this.kI,a),this))},a)},Tta=function(a){(0,g.F)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},Y9=function(a,b){50>a.C.sc()&&g.Ly(a.C,b)},Z9=function(a,b,c){var d=V9(a);
g.Qy(d,c);-1E3!=d.g&&(d.g=b);X9(a,d)},W9=function(a,b,c){a.B.sendMessage(b,c)},X9=function(a,b){Tta(a);
a.B.setPlayerContextData(g.Ty(b));Rta(a)},T9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Qi(null));
a.A=b;a.A&&($9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Qi(a.A.media[0]))},Uta=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=V9(a);b.contentId!=d.videoId&&$9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.Qy(d,a.o.getEstimatedTime());X9(a,d)}else $9("No cast media video. Ignoring state update.")},$9=function(a){g.Ew("CP",a)},a$=function(a,b,c){return(0,g.z)(function(a){this.Tb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Tb("Retrying "+b+" using MDx browser channel."),W9(this,b,c))},a)},Vta=function(a){var b=!1;
x9()||(a=new g.ix(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.dj("yt-remote-cast-available",a);g.Ki("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){w9("onReceiverSelected: "+a.friendlyName);
g.dj("yt-remote-cast-receiver",a);g.Ki("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){w9("onReceiverResumed: "+a.friendlyName);
g.dj("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){w9("onSessionChange: "+g.ei(a));
a||g.fj("yt-remote-cast-receiver");g.Ki("yt-remote-cast2-session-change",a)}),g.ka("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
w9("cloudview.createSingleton_: "+b);return b},Wta=function(){var a=0<=g.fc.search(/\ (CrMo|Chrome|CriOS)\//);
return g.xi||a},b$=function(a,b){E9()?x9().setConnectedScreenStatus(a,b):G9("setConnectedScreenStatus called before ready.")},Xta=function(){w9("clearCurrentReceiver");
g.fj("yt-remote-cast-receiver")},Yta=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Nta();a({command:"cast.sender.init"});return}}if(window.chrome)if(Nta(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.qw();55<=b?a="55":50<=b&&(a="50");g.yw("//www.gstatic.com/eureka/clank"+a+g.ww,g.vw)}else g.zw(0);else g.vw()},Zta=function(a){a?(g.dj("yt-remote-session-app",a.app),g.dj("yt-remote-session-name",a.name)):(g.fj("yt-remote-session-app"),g.fj("yt-remote-session-name"));
g.ka("yt.mdx.remote.channelParams_",a,void 0)},$ta=function(){var a=J9();
if(g.Sb(a)){var a=g.hj(),b=g.ej("yt-remote-session-name")||"",c=g.ej("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ka("yt.mdx.remote.channelParams_",a,void 0)}},aua=function(){var a=P9();
a?(Q9("Resume connection to: "+g.ei(a)),O9(a,0)):(g.rj(),Xta(),Q9("Skipping connecting because no session screen found."))},bua=function(a){Q9("remote.onCastSessionChange_: "+g.ei(a));
if(a){var b=M9();b&&b.id==a.id?b$(b.id,"YouTube TV"):(b&&S9(),O9(a,1))}else y9()&&S9()},cua=function(){var a=Qta(),b=M9();
b||(b=P9());return g.Wa(a,function(a){return b&&g.bi(b,a.key)?!0:!1})},dua=function(){var a=g.ej("yt-remote-cast-receiver");
return a?a.friendlyName:null},eua=function(a,b,c,d){Wta()?Vta(b)&&(D9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Lta(a,c):(window.__onGCastApiAvailable=function(b,d){b?Lta(a,c):(G9("Failed to load cast API: "+d),F9(!1),D9(!1),g.fj("yt-remote-cast-available"),g.fj("yt-remote-cast-receiver"),Gta(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Ota():Yta())):w9("Cannot initialize because not running Chrome")},
fua=function(a){this.B=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Vf(a)||"";b&&(this.B=":"+b);this.A=g.Uf(a)||"";a=g.fc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Na(a,"10.0")&&(this.o=!1))},c$=function(a,b,c){g.H.call(this);
this.H=a;this.X=b;b.addEventListener("onVolumeChange",this.bl,this);b.addEventListener("onCaptionsTrackListChanged",this.Av,this);b.addEventListener("captionschanged",this.kv,this);b.addEventListener("captionssettingschanged",this.qp,this);b.addEventListener("videoplayerreset",this.Ti,this);b.addEventListener("mdxautoplaycancel",this.ls,this);this.C=!1;this.g=c;c.isDisposed();c.subscribe("proxyStateChange",this.Nv,this);c.subscribe("remotePlayerChange",this.Si,this);c.subscribe("remoteQueueChange",
this.Ti,this);c.subscribe("autoplayUpNext",this.hv,this);c.subscribe("previousNextChange",this.Kv,this);c.subscribe("nowAutoplaying",this.Dv,this);c.subscribe("autoplayDismissed",this.gv,this);this.suggestion=null;this.D=new g.sl(64);this.o=new g.Kd(this.Tw,500,this);g.J(this,this.o);this.A=new g.Kd(this.Uw,1E3,this);g.J(this,this.A);this.B={};this.G=new g.Kd(this.gx,1E3,this);g.J(this,this.G);this.F=new g.kw(this.rN,1E3,this);g.J(this,this.F);this.J=g.w;this.qp();this.Ti();this.Si()},d$=function(a,
b){var c=a.H,d=a.X.getVideoData().lengthSeconds;
c.H=b||0;c.g.Ra("progresssync",b,d)},gua=function(a){d$(a,0);
a.o.stop();e$(a,new g.sl(64))},h$=function(a,b){if(f$(a)&&!a.C){var c=null;
b&&(c={style:a.X.rj()},g.Yb(c,b));a.g.Nw(g$(a),c);a.B=V9(a.g).o}},i$=function(a,b){var c=a.X.ve();
c?Sta(a.g,g$(a),b,c.g,c.listId.toString()):Sta(a.g,g$(a),b);e$(a,new g.sl(1))},hua=function(a,b){if(b){var c=a.X.Hc("captions","tracklist",{xu:1});
c&&c.length?(a.X.bf("captions","track",b),a.C=!1):(a.X.Vp("captions"),a.C=!0)}else a.X.bf("captions","track",{})},f$=function(a){return V9(a.g).videoId==g$(a)},g$=function(a){return a.X.getVideoData().videoId},e$=function(a,b){a.A.stop();
var c=a.D;if(b.o!=c.o||b.g!=c.g){var d=g.S(b,2);if(d!=g.S(a.D,2)){var e=a.X;(e=g.Vl(e.app,e.playerType||1))&&g.LU(e,d)}a.D=b;iua(a.H,c,b)}},j$=function(){var a=cua();
!a&&H9()&&dua()&&(a={key:"cast-selector-receiver",name:dua()});return a},jua=function(){var a=Qta();
H9()&&g.ej("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},kua=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.bj&&Bta();g.kj();N9||(N9=new fua,g.tj()&&(N9.g="/api/loungedev"));K9||(K9=g.u("yt.mdx.remote.deferredProxies_")||[],g.ka("yt.mdx.remote.deferredProxies_",K9,void 0));$ta();var c=C9();if(!c){var d=new g.Vw(N9);g.ka("yt.mdx.remote.screenService_",d,void 0);c=C9();eua(a,d,function(a){a?A9()&&b$(A9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.Ki("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.u("yt.mdx.remote.initialized_")&&
(g.ka("yt.mdx.remote.initialized_",!0,void 0),Q9("Initializing: "+g.tf(b)),k$.push(g.Gi("yt-remote-cast2-availability-change",function(){g.Ki("yt-remote-receiver-availability-change")})),k$.push(g.Gi("yt-remote-cast2-receiver-selected",function(){z9(null);
g.Ki("yt-remote-auto-connect","cast-selector-receiver")})),k$.push(g.Gi("yt-remote-cast2-receiver-resumed",function(){g.Ki("yt-remote-receiver-resumed","cast-selector-receiver")})),k$.push(g.Gi("yt-remote-cast2-session-change",bua)),k$.push(g.Gi("yt-remote-connection-change",function(a){a?b$(A9(),"YouTube TV"):P9()||(b$(null,null),Xta())})),a=J9(),b.isAuto&&(a.id+="#dial"),g.ym("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,Q9(" -- with channel params: "+g.tf(a)),
Zta(a),c.start(),A9()||aua())},l$=function(){H9()?x9()?E9()?(w9("Requesting cast selector."),x9().requestSession()):(w9("Wait for cast API to be ready to request the session."),I9.push(g.Gi("yt-remote-cast2-api-ready",l$))):G9("requestCastSelector: Cast is not initialized."):G9("requestCastSelector: Cast API is not installed!")},m$=function(a){g.iu.call(this,a);
this.A={key:g.gi(),name:g.P("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.sl(64);this.H=0},iua=function(a,b,c){a.F=c;
a.g.Ra("presentingplayerstatechange",new g.gz(c,b))},n$=function(a,b,c){if(b.key!=a.B.key)if(b.key==a.A.key)S9();
else{a.B=b;var d;if(!c){c=a.g.ve();d=a.g.getVideoData().videoId;var e;if(c){e=[];for(var f=0;f<c.B;f++)e[f]=c.Sb(f).videoId}else e=[a.g.getVideoData().videoId];d={videoIds:e,listId:a.g.af(),videoId:d,index:Math.max(a.g.Mx(),0),currentTime:a.g.getCurrentTime()}}a=d;Q9("Connecting to: "+g.tf(b));"cast-selector-receiver"==b.key?(z9(a||null),b=a||null,E9()?x9().setLaunchParams(b):G9("setLaunchParams called before ready.")):!a&&R9()&&A9()==b.key?g.Ki("yt-remote-connection-change",!0):(S9(),z9(a||null),
a=C9().Ed(),(b=g.ii(a,b.key))&&O9(b,1))}};
g.B(v9,g.Iw);g.h=v9.prototype;g.h.Ed=function(a){return this.Nc.$_gs(a)};
g.h.contains=function(a){return!!this.Nc.$_c(a)};
g.h.get=function(a){return this.Nc.$_g(a)};
g.h.start=function(){this.Nc.$_st()};
g.h.Ul=function(a,b,c){this.Nc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Nc.$_r(a,b,c)};
g.h.Kl=function(a,b,c,d){this.Nc.$_un(a,b,c,d)};
g.h.R=function(){for(var a=0,b=this.o.length;a<b;++a)this.Nc.$_ubk(this.o[a]);this.o.length=0;this.Nc=null;v9.M.R.call(this)};
g.h.kL=function(){this.aa("screenChange")};
g.h.RH=function(){this.aa("onlineScreenChange")};
var B9=null,I9=[],K9=null,N9=null;g.B(U9,g.$m);g.h=U9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.w,a$(this,"play")):W9(this,"play"),Z9(this,1,g.Ry(V9(this))),this.aa("remotePlayerChange")):Y9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.w,a$(this,"pause")):W9(this,"pause"),Z9(this,2,g.Ry(V9(this))),this.aa("remotePlayerChange")):Y9(this,this.pause)};
g.h.Bx=function(a){if(1==this.g){if(this.o){var b=V9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.ib()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.w,a$(this,"seekTo",{newTime:a}))}else W9(this,"seekTo",{newTime:a});Z9(this,3,a);this.aa("remotePlayerChange")}else Y9(this,g.va(this.Bx,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.w,a$(this,"stopVideo")):W9(this,"stopVideo");var a=V9(this);a.index=-1;a.videoId="";g.Py(a);X9(this,a);this.aa("remotePlayerChange")}else Y9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=V9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){$9("set receiver volume: "+d)},this),(0,g.z)(function(){this.Tb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){$9("set receiver muted: "+b)},this),(0,g.z)(function(){this.Tb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W9(this,"setVolume",e)}c.muted=b;c.volume=a;X9(this,c)}else Y9(this,g.va(this.setVolume,a,b))};
g.h.Nw=function(a,b){if(1==this.g){var c=V9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.tf(b.style),g.Yb(d,c.o));W9(this,"setSubtitlesTrack",d);X9(this,c)}else Y9(this,g.va(this.Nw,a,b))};
g.h.Qp=function(a,b){if(1==this.g){W9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Dc.id});var c=V9(this);c.audioTrackId=b.Dc.id;X9(this,c)}else Y9(this,g.va(this.Qp,a,b))};
g.h.Ax=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.Sy(c,a,b);X9(this,c)}W9(this,"previous")}else Y9(this,g.va(this.Ax,a,b))};
g.h.zx=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.Sy(c,a,b);X9(this,c)}W9(this,"next")}else Y9(this,g.va(this.zx,a,b))};
g.h.Us=function(){1==this.g?W9(this,"dismissAutoplay"):Y9(this,this.Us)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.aa("proxyStateChange",a,this.g)}U9.M.dispose.call(this)};
g.h.R=function(){Tta(this);this.B=null;this.C.clear();T9(this,null);U9.M.R.call(this)};
g.h.Rp=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.aa("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.My(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.kI=function(a,b){this.aa(a,b)};
g.h.hG=function(a){if(!a)this.Qi(null),T9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=V9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)$9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X9(this,b)}};
g.h.Qi=function(a){$9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Uta(this),this.aa("remotePlayerChange")};
g.h.gG=function(a){a?(Uta(this),this.aa("remotePlayerChange")):this.Qi(null)};
g.h.rG=function(){var a=Mta();a&&T9(this,a)};
g.h.Tb=function(a){g.Ew("CP",a)};
var k$=[];g.h=fua.prototype;g.h.ng=function(a,b,c){var d=this.g;if(g.p(c)?c:this.o)d="https://"+this.A+this.B+this.g;return g.cg(d+a,b||{})};
g.h.Pp=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Eb:g.va(this.fL,c,!0),onError:g.va(this.eL,d),Xc:g.va(this.gL,d)};b&&(c.Ib=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Oi(a,c)};
g.h.fL=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.eL=function(a,b){a(Error("Request error: "+b.status))};
g.h.gL=function(a){a(Error("request timed out"))};
g.B(c$,g.H);g.h=c$.prototype;
g.h.R=function(){c$.M.R.call(this);this.o.stop();this.A.stop();this.J();this.X.removeEventListener("onVolumeChange",this.bl,this);this.X.removeEventListener("onCaptionsTrackListChanged",this.Av,this);this.X.removeEventListener("captionschanged",this.kv,this);this.X.removeEventListener("videoplayerreset",this.Ti,this);this.X.removeEventListener("captionssettingschanged",this.qp,this);this.X.removeEventListener("mdxautoplaycancel",this.ls,this);this.g.Ka("proxyStateChange",this.Nv,this);this.g.Ka("remotePlayerChange",
this.Si,this);this.g.Ka("remoteQueueChange",this.Ti,this);this.g.Ka("autoplayUpNext",this.hv,this);this.g.Ka("previousNextChange",this.Kv,this);this.g.Ka("nowAutoplaying",this.Dv,this);this.g.Ka("autoplayDismissed",this.gv,this);this.g=this.H=null};
g.h.By=function(a,b){2==this.g.g||(f$(this)?this.uD.apply(this,arguments):this.qD.apply(this,arguments))};
g.h.kv=function(a){this.By("control_subtitles_set_track",g.Sb(a)?null:a)};
g.h.qp=function(){var a=this.X.Hc("captions","track");g.Sb(a)||h$(this,a)};
g.h.qD=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":i$(this,this.X.getCurrentTime());break;case "control_seek":i$(this,c[0]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.Qp(g$(this),c)}};
g.h.uD=function(a,b){if(1081!=V9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":V9(this.g).ib()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.$g(c[0],c[1]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.Qp(g$(this),c)}}};
g.h.bl=function(a){if(f$(this)){this.g.Ka("remotePlayerChange",this.Si,this);var b=Math.round(a.volume);a=!!a.muted;var c=V9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Si,this)}};
g.h.Av=function(){g.Sb(this.B)||hua(this,this.B);this.C=!1};
g.h.Nv=function(a,b){this.A.stop();2==b&&this.Uw()};
g.h.Si=function(){if(f$(this)){this.o.stop();var a=V9(this.g);switch(a.g){case 1081:e$(this,new g.sl(8));break;case 1:this.Tw();e$(this,new g.sl(8));break;case 1083:case 3:e$(this,new g.sl(9));break;case 0:e$(this,new g.sl(2));this.F.stop();d$(this,this.X.getVideoData().lengthSeconds);break;case 1082:e$(this,new g.sl(4));break;case 2:e$(this,new g.sl(4));d$(this,g.Ry(a));break;case -1:e$(this,new g.sl(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.P("YTP_MDX_PLAYER_ERROR")},e$(this,
new g.sl(128,a))}var a=V9(this.g).o,b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.B=a,hua(this,a));a=V9(this.g);-1==a.volume||Math.round(this.X.getVolume())==a.volume&&this.X.Id()==a.muted||this.G.isActive()||this.gx()}else gua(this)};
g.h.Kv=function(){this.X.Ra("mdxpreviousnextchange")};
g.h.Ti=function(){f$(this)||gua(this)};
g.h.ls=function(){this.g.Us()};
g.h.hv=function(a){a&&(a=g.Oi("/watch_queue_ajax",{method:"GET",wc:{action_get_watch_queue_item:1,video_id:a},Eb:(0,g.z)(this.iJ,this)}))&&(this.J=(0,g.z)(a.abort,a))};
g.h.iJ=function(a,b){var c=new g.Zs({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.X.Ra("mdxautoplayupnext",c)};
g.h.Dv=function(a){(0,window.isNaN)(a)||this.X.Ra("mdxnowautoplaying",a)};
g.h.gv=function(){this.X.Ra("mdxautoplaycanceled")};
g.h.rN=function(a,b){-1==V9(this.g).g?i$(this,a):b&&this.g.Bx(a)};
g.h.gx=function(){if(f$(this)){var a=V9(this.g);this.X.removeEventListener("onVolumeChange",this.bl,this);a.muted?this.X.mute():this.X.wf();this.X.setVolume(a.volume);this.X.addEventListener("onVolumeChange",this.bl,this)}};
g.h.Tw=function(){this.o.stop();if(!this.g.isDisposed()){var a=V9(this.g);a.ib()&&e$(this,new g.sl(8));d$(this,g.Ry(a));this.o.start()}};
g.h.Uw=function(){this.A.stop();this.o.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.A.start()};
g.B(m$,g.iu);g.h=m$.prototype;g.h.create=function(){kua("embedded"==g.U(this.g).g);this.D.push(g.Gi("yt-remote-before-disconnect",this.dG,this));this.D.push(g.Gi("yt-remote-connection-change",this.sI,this));this.D.push(g.Gi("yt-remote-receiver-availability-change",this.Lv,this));this.D.push(g.Gi("yt-remote-auto-connect",this.qI,this));this.D.push(g.Gi("yt-remote-receiver-resumed",this.pI,this));this.Lv()};
g.h.load=function(){this.g.gn();m$.M.load.call(this);this.C=new c$(this,this.g,this.o);var a;a=(a=Kta())?a.currentTime:0;var b=R9()?new U9(y9(),void 0):null;0==a&&b&&(a=g.Ry(V9(b)));0!=a&&(this.H=a||0,this.g.Ra("progresssync",a,void 0));iua(this,this.F,this.F);g.h2(this.g.app,6)};
g.h.unload=function(){this.g.Ra("mdxautoplaycanceled");this.B=this.A;g.Eb(this.C,this.o);this.o=this.C=null;m$.M.unload.call(this);g.h2(this.g.app,5)};
g.h.R=function(){g.Hi(this.D);m$.M.R.call(this)};
g.h.uj=function(a,b){this.loaded&&this.C.By.apply(this.C,arguments)};
g.h.XC=function(){return this.loaded?this.C.suggestion:null};
g.h.ty=function(){return this.o?V9(this.o).L:!1};
g.h.hasNext=function(){return this.o?V9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.SM=function(){var a=V9(this.o),b=this.g.getVideoData(),c=g.km(this.g),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.E)()-a.A)/1E3:a.B;var l=1>=Ata(a)-this.getCurrentTime(),m=a.J,n=Ata(a),a=0<a.C?a.C+((0,g.E)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.TM=function(){this.o&&this.o.zx()};
g.h.UM=function(){this.o&&this.o.Ax()};
g.h.dG=function(a){1==a&&(this.J=this.o?V9(this.o):null)};
g.h.sI=function(){var a=R9()?new U9(y9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Db(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.Ic(g.Ry(a)));this.g.Ra("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.Lv=function(){this.G=[this.A].concat(jua());var a=j$()||this.A;n$(this,a,!this.loaded);this.g.ya("onMdxReceiversChange")};
g.h.qI=function(){var a=j$();n$(this,a)};
g.h.pI=function(){this.B=j$()};
g.h.RM=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?l$():n$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&l$(),!0):!1}};
g.h.VM=function(){W9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Xd=function(){return!1};
window._exportCheck==g.xa&&g.ka("ytmod.player.remote",m$,void 0);})(_yt_player);
