var rsi_k;
var rsi_now = new Date();
var rsi_csid = 'K05540';if(typeof(csids)=="undefined"){var csids=[rsi_csid];}else{csids.push(rsi_csid);};function rsiClient(Ca){this._rsiaa=Ca;this._rsiba=0;this._rsica=1;this._rsida=0;this._rsiea=0;this._rsifa=0;this._rsiga="0902121";this._rsiha="pix04.revsci.net";this._rsiia="js";this._rsija="b";this._rsika="3";this._rsila=3;this._rsima=new Array();this._rsina=0;this._rsioa=null;this._rsipa=null;this._rsiqa=null;this._rsira=null;this._rsisa=null;this._rsita=null;this.DM_cat=function(Da){this._rsioa=Da;};this.DM_name=function(Ea){this._rsipa=Ea;};this.DM_keywords=function(st){this._rsiqa=st;};this.DM_event=function(Fa){this._rsira=Fa;};this.DM_addToLoc=function(n,v){this._rsisa=_rsiua(this._rsisa,n,v);};this.DM_addEncToLoc=function(n,v){this.DM_addToLoc(_rsiva(n),_rsiva(v));};this.DM_setLoc=function(u){this._rsisa=u;};this.rsi_c=function(Ca){this._rsiaa=Ca;};this.rsi_ral=function(Ga){this._rsiba=Ga;};this.rsi_riu=function(Ha){this._rsica=Ha;};this.rsi_tiu=function(Ia){this._rsida=Ia;};this.rsi_m=function(Ja){this._rsiea=Ja;};this.rsi_dw=function(Ka){this._rsifa=Ka;};this.rsi_s=function(La){this._rsiha=La;};this.rsi_t=function(Ma){this._rsiia=Ma;};this.rsi_en=function(Na){this._rsija=Na;};this.rsi_cn=function(Oa){this._rsika=Oa;};this.rsi_us=function(Pa){this._rsila=Pa;};this.DM_tag=function(){var Qa;if(this._rsina==0||this._rsiea==1){if(typeof(DM_prepClient)=="function"){DM_prepClient(this._rsiaa,this);}var Ra=this._rsiwa();if(this._rsiia=="gif"){Qa=new Image(2,3);Qa.src=Ra;this._rsima[this._rsima.length]=Qa;}else if(this._rsiia=="js"){if(this._rsifa==1){document.write("<script language=\"JavaScript\" type=\"text/javascript\" src=\""+Ra+"\"><"+"/script>");}else{var Sa=document.createElement("script");Sa.language="JavaScript";Sa.type="text/javascript";Sa.src=Ra;if(document.body==null){document.getElementsByTagName("head")[0].appendChild(Sa);}else{document.body.insertBefore(Sa,document.body.firstChild);}Qa=Sa;}}this._rsina=1;}this._rsixa();return Qa;};this._rsiwa=function(){var Ta="";Ta="DM_LOC="+_rsiva(this._rsisa);if(this._rsioa){Ta+="&DM_CAT="+_rsiva(this._rsioa);}if(this._rsira){Ta+="&DM_EVT="+_rsiva(this._rsira);}if(this._rsiqa){Ta+="&DM_KYW="+_rsiva(this._rsiqa);}if(this._rsica==1&&this._rsita){Ta+="&DM_REF="+_rsiva(this._rsita);}if(this._rsida==1){Ta+="&DM_TIT="+_rsiva(document.title);}if(this._rsipa){Ta+="&DM_NAM="+_rsiva(this._rsipa);}Ta+="&DM_EOM=1";var Ua="http"+(location.protocol=="https:"?"s":"")+"://";var Va="/"+this._rsiaa+"/"+this._rsija+this._rsika+"/0/"+this._rsila+"/"+this._rsiga+"/";var Wa=Math.floor(Math.random()*1000000000)+"."+this._rsiia;var Xa=Ua+this._rsiha+Va+Wa+"?D="+_rsiva(Ta)+"&C="+_rsiva(csids);var Ya=Xa.length;if(Ya>=2000){if(Xa.charAt(1998)=='%'){Xa=Xa.substr(0,1998);}else if(Xa.charAt(1999)=='%'){Xa=Xa.substr(0,1999);}else{Xa=Xa.substr(0,2000);}if(Xa.charAt(Xa.length-3)=='%'&&Xa.charAt(Xa.length-2)=='2'&&Xa.charAt(Xa.length-1)=='5'){Xa=Xa.substr(0,Xa.length-3);}}return Xa;};this._rsixa=function(){this._rsita=_rsiya(document.referrer.toString());this._rsisa=(this._rsiba==1)?this._rsita:_rsiya(window.location.href);this._rsioa=null;this._rsipa=null;this._rsiqa=null;this._rsira=null;};this._rsixa();}var _rsiva;if(typeof(encodeURIComponent)=="function"){_rsiva=encodeURIComponent;}else{var _rsiza=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");_rsiva=function(v){return v.toString().replace(_rsiza,_rsiAa);}}function _rsiua(u,n,v){return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;}function _rsiya(u){var i=u.indexOf('#');return(i>=0)?u.substr(0,i):u;}function _rsiBa(i){var Za=i.toString(16).toUpperCase();return Za.length<2?"0"+Za:Za;}function _rsiAa(c){var i=c.charCodeAt(0);if(isNaN(i))return "";if(i<128)return "%"+_rsiBa(i);if(i<2048)return "%"+_rsiBa(0xC0+(i>>6))+"%"+_rsiBa(0x80+(i&0x3F));if(i<65536)return "%"+_rsiBa(0xE0+(i>>12))+"%"+_rsiBa(0x80+(i>>6&0x3F))+"%"+_rsiBa(0x80+(i&0x3F));return "%"+_rsiBa(0xF0+(i>>18))+"%"+_rsiBa(0x80+(i>>12&0x3F))+"%"+_rsiBa(0x80+(i>>6&0x3F))+"%"+_rsiBa(0x80+(i&0x3F));}window[rsi_csid]=new rsiClient(rsi_csid);
function DM_cat(aa){window[rsi_csid].DM_cat(aa);}function DM_name(ba){window[rsi_csid].DM_name(ba);}function DM_keywords(kw){window[rsi_csid].DM_keywords(kw);}function DM_event(ca){window[rsi_csid].DM_event(ca);}function DM_addToLoc(n,v){window[rsi_csid].DM_addToLoc(n,v);}function DM_addEncToLoc(n,v){window[rsi_csid].DM_addEncToLoc(n,v);}function DM_setLoc(u){window[rsi_csid].DM_setLoc(u);}function DM_tag(){window[rsi_csid].DM_tag();}
