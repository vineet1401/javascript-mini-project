function calculateMaturity(){

    // get the input value from the form elements
    const principle = parseFloat(document.getElementById('principle').value)
    const interest = parseFloat(document.getElementById('interest').value)
    const tenure = parseFloat(document.getElementById('tenure').value)

    // perform calculation
    const maturityAmount = principle + (principle * interest * tenure)/100;

    //display the result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

// Attact the event lsitener to the button

document.getElementById("cal-button").addEventListener('click', calculateMaturity);