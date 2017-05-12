var thisURL = "blocker.js";
function exec(){
  var search = "";
  var scr = document.getElementsByTagName("srcipt");
  for(var i = 0;i<scr.length;i++){
    if(scr[i].src.split("?").includes(thisSRC)){
      search=scr[i].src;
    }else{
      search+=scr[i].src+"<br/>";
    }
  }
  document.body.innerHTML = JSON.stringify(this.location,null,2);
  document.body.innerHTML+="<br/>"+search+"<br/>done!";
}
setTimeout(exec,1000);
