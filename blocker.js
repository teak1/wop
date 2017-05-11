function exec(){
  var search = window.location.search;
  document.body.innerHTML = JSON.stringify(window.location,null,2);
  alert("hi");
}
setTimeout(exec,1000);
