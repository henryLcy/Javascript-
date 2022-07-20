window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var milesimos = document.getElementById("tens")
    var segundos = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
   buttonStart.onclick = function(){

    clearInterval(Interval);
    interval = setInterval(startTimer);
   }

   buttonStop.onclick = function() {
    clearInterval(interval);
   }

   buttonReset.onclick = function(){
    clearInterval(interval);
    tens = '00';
    seconds = '00'
    segundos.innerHTML = seconds;
    milesimos.innerHTML = tens;
   }

   function startTimer(){
    tens++;

    if(tens <= 9){
        milesimos.innerHTML = '0'+tens;
    }

    if(tens > 9){
        milesimos.innerHTML = tens;
    }

    if(tens > 99) {   
        seconds++;
        segundos.innerHTML = '0' + seconds;
        tens = 0
        milesimos.innerHTML = '0'+ 0;
    }
    
    if(seconds > 9){
        segundos.innerHTML = seconds;
    }
   }
    
  
  }