const PASS="abbasiracer321";
const lock=document.getElementById("lock"),site=document.getElementById("site"),pw=document.getElementById("password"),err=document.getElementById("error");
let spoken=false;
function welcome(){if(spoken||!("speechSynthesis"in window))return;spoken=true;const u=new SpeechSynthesisUtterance("Welcome to Abbasi Racer website.");u.rate=.9;u.pitch=.9;u.volume=1;speechSynthesis.cancel();speechSynthesis.speak(u)}
function unlock(){if(pw.value===PASS){lock.classList.add("hidden");site.classList.remove("hidden");sessionStorage.unlocked="1";err.textContent="";welcome()}else{err.textContent="ACCESS DENIED";pw.value=""}}
document.getElementById("unlock").onclick=unlock;
pw.onkeydown=e=>e.key==="Enter"&&unlock();
document.getElementById("show").onclick=()=>{pw.type=pw.type==="password"?"text":"password";document.getElementById("show").textContent=pw.type==="password"?"SHOW":"HIDE"};
document.getElementById("relock").onclick=()=>{sessionStorage.removeItem("unlocked");site.classList.add("hidden");lock.classList.remove("hidden");pw.value="";spoken=false};
if(sessionStorage.unlocked==="1"){lock.classList.add("hidden");site.classList.remove("hidden")}
document.getElementById("year").textContent=new Date().getFullYear();
