let btn=document.getElementById("btn");

let card=document.querySelector(".card")
btn.addEventListener("click",function(){
  document.querySelector(".card").style.flexDirection="column";
})


function timer() {
  const time = new Date();
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  console.log(hr, min, sec);
  document.getElementById("clock").innerText = hr + ":" + min + ":" + sec;
}
setInterval(timer, 1000);


const selectValue = () => {
  document.getElementById("temp").innerText =
    document.getElementById("choose").value;
};