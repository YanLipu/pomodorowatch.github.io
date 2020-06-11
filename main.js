var seg = 60
var min = 24

//Função que inicia o cronometro
function startTime() {
    test = setInterval(workSession, 1000)
    document.getElementById("start").hidden = true
    document.getElementById("pause").hidden = false
    document.getElementById("stop").hidden = false
    document.getElementById("reset").hidden = false
    
}

function workSession(){    
    seg = seg - 1    
    document.getElementById('txt').innerHTML = min + ":" + seg;
    if(seg == 0){                    
        min = min - 1
        seg = 60
    }
    if(min == 0){
        document.getElementById("my_audio").play();      
        clearInterval(test)
        min = 4
        console.log("chegou ate aqui 1")
        test = setInterval(restSession, 1000)
        
    } 
}

function restSession(){
    seg = seg - 1    
    document.getElementById('txt').innerHTML = min + ":" + seg;
    if(seg == 0){                    
        min = min - 1
        seg = 60
    }
    if(min == 0){
        document.getElementById("my_audio").play();       
        clearInterval(test)
        min = 24
        console.log("chegou ate aqui 2")
        test = setInterval(workSession, 1000)
    
    } 
}
// function checkTime(i) {
//     if (i < 10) {
//         document.getElementById('txt').innerHTML = "0" + min + ":" + "0" + seg
//         console.log(i)
//     };  // add zero in front of numbers < 10
//     return i;
//   }

//Função que para a contagem
function stop(){
    clearInterval(test)
    document.getElementById("start").hidden = false
}


//Função que reseta a contagem
function reset(){
    clearInterval(test)
    seg = 60
    min = 24
    document.getElementById('txt').innerHTML = "25" + ":" + "00";
    document.getElementById("start").hidden = false
    document.getElementById("pause").hidden = true
    document.getElementById("stop").hidden = true
    document.getElementById("reset").hidden = true
}