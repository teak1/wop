var keywords = ["minecraft","video game","card smith","cardsmith","code","flight"];
var inf = {};
var clr = false;
for(var i = 0;i<keywords.length;i++){
  if(document.body.innerHTML.split(keywords[i]).length>1){
    inf[keywords[i]]=true;
    clr=true;
  }else{
    inf[keywords[i]]=false;
  }
}
if(clr){
  alert(inf);
}
