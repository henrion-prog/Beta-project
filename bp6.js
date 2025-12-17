alert("Welcome to my portfolio");
const mainName=
document.querySelector("h1");
mainName.addEventListener("click",function()
{
    mainName.style.color="blue";
});
function showTime(){
    const time=new
    Date().toLocaleTimeString();
    alert("Current time;" + time);
}