function exec(){
  var search = window.location.search;
  document.body.innerHTML = JSSON.stringify(window.location,null,2);
}
setTimeout(exec,1000);
