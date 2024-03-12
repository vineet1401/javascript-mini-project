function updateClock() {
    const currTime = new Date();

    const hrele = document.getElementById("hour-element");
    const minele = document.getElementById("minute-element");
    const secele = document.getElementById("second-element");

    let hour = currTime.getHours();
    let minute = currTime.getMinutes();
    let second = currTime.getSeconds();
  

      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
  
  
    // hrele.innerText = currTime.getHours();
    hrele.innerText = hour;
    // minele.innerText = currTime.getMinutes();
    minele.innerText = minute;
    // secele.innerText = currTime.getSeconds();
    secele.innerText = second;
    
}

setInterval(updateClock, 1000);