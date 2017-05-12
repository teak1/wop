var thisURL = "blocker.js";
function exec(){
  var search = "";
  var scr = document.getElementsByTagName("script");
  alert(scr.length);
  for(var i = 0;i<scr.length;i++){
    try{
      document.body.innerHTML+=scr[i].src;
      if(scr[i].src.split("?").includes(thisSRC)){
        search=scr[i].src;
      }else{
        search+=scr[i].src+"<br/>";
      }
    }catch(e){
      document.body.innerHTML=e;
    }
  }
  document.body.innerHTML+= JSON.stringify(this.location,null,2);
  document.body.innerHTML+="<br/>"+search+"<br/>done!";
}
setTimeout(exec,1000);
