let percentage = document.getElementById("percentInput");
let amount = document.getElementById("amountInput");
let form = document.getElementById("formEvent");
let display = document.getElementById("displayResult");


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(!percentage.value || !amount.value){
        alert("Please enter values in the fields");
    } else {
        let x = parseFloat(percentage.value);
        let y = parseFloat(amount.value);
        let percent = x/100;
        let conversion = percent*y;
        
        return display.innerText = "Is equal to:" + " " + conversion.toFixed(2);

    }
});

