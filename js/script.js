
setInterval(function() {
    let a = 4;
    let hodnota = parseInt(document.getElementById("starsBorn").innerHTML);
        document.getElementById("starsBorn").innerHTML = hodnota + a;

    let b = 30;
    let hodnotaDva = parseInt(document.getElementById("starsDied").innerHTML);
        document.getElementById("starsDied").innerHTML = hodnotaDva + b;
 
    let hodnotaTri = parseInt(document.getElementById("earthTravel").innerHTML);
        document.getElementById("earthTravel").innerHTML = hodnotaTri + b;

    let c = 14.8;
    let hodnotaStyri = parseInt(document.getElementById("universe").innerHTML);
        document.getElementById("universe").innerHTML = hodnotaStyri + c;
        
}, 1000);

