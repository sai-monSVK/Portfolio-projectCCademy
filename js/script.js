
setInterval(function() {
    let a = 2000;
    let hodnota = parseInt(document.getElementById("starsBorn").innerHTML);
        document.getElementById("starsBorn").innerHTML = hodnota + a;

    let b = 150;
    let hodnotaDva = parseInt(document.getElementById("starsDied").innerHTML);
        document.getElementById("starsDied").innerHTML = hodnotaDva + b;
 
    let hodnotaTri = parseInt(document.getElementById("earthTravel").innerHTML);
        document.getElementById("earthTravel").innerHTML = hodnotaTri + b;

    let c = 74;
    let hodnotaStyri = parseInt(document.getElementById("universe").innerHTML);
        document.getElementById("universe").innerHTML = hodnotaStyri + c;
        
}, 5000);

