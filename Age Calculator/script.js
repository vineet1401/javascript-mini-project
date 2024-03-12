const dobinput = document.getElementById("dob");
const gntbtn = document.getElementById("cal-age")
const agediv = document.getElementById("result")


gntbtn.addEventListener("click", function(){
    const dob = new Date(dobinput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);

    agediv.innerHTML = `Your Age is ${age} years.`

});