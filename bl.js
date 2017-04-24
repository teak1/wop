var cls = false;
var keywords = ["minecraft","video game","card smith","cardsmith","learn code","flight","game","magic","larp"];
var excludes = ["https://www.google.com","https://github.com"];
var inf = {};
var clr = false;
for(var i = 0;i<keywords.length;i++){
  if(document.body.innerHTML.split(keywords[i]).length>1 && !excludes.includes(window.location.origin)){
    inf[keywords[i]]=true;
    clr=true;
  }else{
    inf[keywords[i]]=false;
  }
}
if(clr){
  console.log(JSON.stringify(inf));
  if(cls)window.close();
}
