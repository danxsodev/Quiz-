function clicar(x,y){
    document.getElementById(x).style.color = "green";
    document.getElementById(y).value= document.getElementById(x).innerText;
}
function errado(){
    document.getElementsByClassName("r2").style.color = "red";
}