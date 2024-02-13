var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }  
}
addLoadEvent(function(){
    var lhid = document.createElement('input');
    lhid.setAttribute('type','hidden');
    lhid.setAttribute('name','lang');
    lhid.setAttribute('value',icl_lang);     
    src = document.getElementById('searchform');   
    if(src){
        src.appendChild(lhid);
        src.action=icl_home; 
    }
});

function icl_retry_mtr(a){
    var id = a.getAttribute('id');
    spl = id.split('_');
    var loc = location.href.replace(/#(.*)$/,'').replace(/(&|\?)(retry_mtr)=([0-9]+)/g,'').replace(/&nonce=([0-9a-z]+)(&|$)/g,'');
    if(-1 == loc.indexOf('?')){
        url_glue='?';
    }else{
        url_glue='&';
    }    
    location.href=loc+url_glue+'retry_mtr='+spl[3]+'&nonce='+spl[4];
    return false;
}

}
/*
     FILE ARCHIVED ON 15:41:34 Jun 30, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:39 Feb 13, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.132
  exclusion.robots.policy: 0.12
  cdx.remote: 0.113
  esindex: 0.011
  LoadShardBlock: 886.37 (6)
  PetaboxLoader3.datanode: 470.533 (7)
  load_resource: 287.626
  PetaboxLoader3.resolve: 193.164
*/