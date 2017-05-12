var thisURL = "blocker.js";
function exec(){
  var search = "";
  var scr = document.getElementsByTagName("script");
  alert(scr.length);
  for(var i = 0;i<scr.length;i++){
    try{
      document.body.innerHTML+=scr[i].src;
      if(scr[i].src.split("?").includes(thisURL)){
        search=scr[i].src;
      }
    }catch(e){
      document.body.innerHTML=e;
    }
  }
  var interp = JSON.parse(search.split("").shift().join(""));
  document.body.innerHTML+= search + "<br/>";
}
setTimeout(exec,1000);
