
var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");

tombol.addEventListener("click", function(e){

    var tombolClick = e.target;
    var nilaiTombol  = tombolClick.innerText;
    
    //"INI ADALAH STRING" + INIVARIABLE + "STRING LAGI"
    //"INI ADALAH STRING" + INIFUNCTION()
    //"VARIABLE + INIFUNCTION()

    if (nilaiTombol == "C"){
        layar.value = "";
    }
    else if (nilaiTombol == "<"){
        layar.value = layar.value.slice(0, -1);
    }
    else if (nilaiTombol == "="){
        layar.value = eval(layar.value);
    }
    else{
        layar.value = layar.value + nilaiTombol;
    }

});