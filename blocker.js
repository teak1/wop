function exec(){
  var search = this.location.search;
  document.body.innerHTML = JSON.stringify(this.location,null,2);
  console.log("hi");
}
setTimeout(exec,1000);
