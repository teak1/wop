function exec(){
  var search = this.location.search;
  document.body.innerHTML = JSON.stringify(this.location,null,2);
  document.body.innerHTML+="<br/>test";
}
setTimeout(exec,1000);
