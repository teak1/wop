var letters = "êh~BhîÊØÚPHH";

function exec() {
    var cls = true;
    var keywords = ["minecraft", "video game", "card smith", "cardsmith", "learn code", "flight", "game", "magic", "larp"];
    var excludes = ["https://www.google.com", "https://github.com", "https://kahoot.it", "https://mail.google.com", "https://quizizz.com", "https://quizlet.com", "https://youtube.com"];
    var inf = {};
    var clr = false;
    for (var i = 0; i < keywords.length; i++) {
        if (document.body.innerHTML.split(keywords[i]).length > 1 && !excludes.includes(window.location.origin)) {
            inf[keywords[i]] = true;
            cls=true;
            clr = true;
        } else {
            inf[keywords[i]] = false;
        }
    }
    if (clr) {
        if (confirm("override redirect?")) {
            var pswd = prompt("password");
            if(pswd===null){
                window.location = "https://www.google.com";
            }else if (letters === getPassword(pswd)) {
                clr = false;
              	cls = false;
                exec = new Function("");
            }
        }
        console.log(JSON.stringify(inf));
        //alert(JSON.stringify(inf));
        if (cls) window.location = "https://www.google.com";
    }
}
setTimeout(exec, 1000);

function getPassword(p) {
    var o = "";
    var b = 0;
    for (var i = 0; i < p.length; i++) {
        b = letters.charCodeAt(i);
        o += String.fromCodePoint(b += p.charCodeAt(i));
    }
    return o;
}
