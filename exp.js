function verif(){
    ch=document.getElementById("n").value;
    ch1=document.getElementById("p").value;
    ch2=document.getElementById("d").value;
    ch3=document.getElementById("e").value;
    t=document.getElementById("t");
    m=document.getElementById("m");
    s=document.getElementById("s");
    p=document.getElementById("p");
    se=document.getElementById("se");
    u=document.getElementById("u");
    b=document.getElementById("b");
if(ch==""){
    alert("veiuller saisir votre nom");
    return false;
}
//if(ch.charAt(0).toUpperCase!=ch.charAt(0)){
    //alert("la premiere caractere doit etre majiscule");
//}
if(ch1==""){
    alert("veiuller saisir votre prenom");
}
if(ch2==""){
    alert("veiuller saisir votre date de naissance");
}

if(ch3==""){
    alert("veiuller saisir votre email");
}
if(ch3.indexOf("@")==-1){
    alert("votre adresse email doit contenir @");
}
if(t.checked==false && m.checked==false && s.checked==false){
    alert("il doit coche au moins un centre d'interet");
}
if(p.checked==false && se.checked==false && u.checked==false){
    alert("il faut choisir le niveaux scolaire");
}
if(b.value==""){
    alert("il faut choisir votre langue");
}
}