function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    var interest = principal * year * rate /100;

    var years = new Date().getFullYear()+parseInt(year);

    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
    "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
    "in the year <mark>" + years + "</mark>";
}

function updateRate(){

    var rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval;
    
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
        