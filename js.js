var box = document.getElementById("#caixinha");
function clicar(){
    document.getElementById("certo").style.color = "green";
    document.getElementById("caixinha").value= document.getElementById("certo").innerText;
}
function errado(){
    document.getElementsByClassName("r2").style.color = "red";
}