// OPERATINGS

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");

// OPERATORS

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var dividedBy = document.getElementById("divided-by");

// OTHERS

var result = document.querySelector(".display__result-container");
var calculus = document.querySelector(".display__calculus-container");
var erase = document.getElementById("erase");
var equal = document.getElementById("equal");
var firstSolving = true;
var lastValue = "";

// EVENTS

one.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '1';
});

two.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '2';
});

three.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '3';
});

four.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '4';
});

five.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '5';
});

six.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '6';
});

seven.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '7';
});

eight.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '8';
});

nine.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '9';
});

zero.addEventListener('click',function(){
    calculus.textContent = calculus.textContent + '0';
});

erase.addEventListener('click',function(){
    reset();
    calculus.style.opacity='1';
});

plus.addEventListener('click',function(){
    if(firstSolving == false)
        calculus.textContent = lastValue;
    
    calculus.textContent = calculus.textContent + '+';
});

minus.addEventListener('click',function(){
    if(firstSolving == false)
        calculus.textContent = lastValue;

    calculus.textContent = calculus.textContent + '-';
});

times.addEventListener('click',function(){
    if(firstSolving == false)
        calculus.textContent = lastValue;

    calculus.textContent = calculus.textContent + '*';
});

dividedBy.addEventListener('click',function(){
    if(firstSolving == false)
        calculus.textContent = lastValue;

    calculus.textContent = calculus.textContent + '/';
});

equal.addEventListener('click',function(){
    solve();
});

/* FUNCTIONS */

function reset(){
    calculus.textContent = "";
    result.textContent = 0;
    lastValue = "";
    firstSolving = true;
}

function solve(){
    var operator = "";
    var operating1 = "";
    var operating2 = "";
    var resultado = 0;
    var flag = false;
    var i = 0;

    do {
        if(calculus.textContent.charAt(i) != "+" && calculus.textContent.charAt(i) != "-" && calculus.textContent.charAt(i) != "*" &&  calculus.textContent.charAt(i) != "/")
            operating1 = operating1 + calculus.textContent.charAt(i);
        else {
            operator = calculus.textContent.charAt(i);
            flag = true;
        }

        i++;
    } while(flag != true);

    for(i; i < calculus.textContent.length;i++)
        operating2 = operating2 + calculus.textContent.charAt(i);

    switch(operator){
        case '+':
            resultado = parseFloat(operating1) + parseFloat(operating2);
            break;
        case '-':
            resultado = operating1 - operating2;
            break;
        case '*':
            resultado = operating1 * operating2;
            break;
        case '/':
            if(operating2 == 0)
                resultado = "Math error";
            else if(operating1 % operating2 == 0)
                    resultado = operating1 / operating2;
                else {
                    resultado = operating1 / operating2;
                    resultado = parseFloat(resultado.toFixed(8));
                }
            break;
    }
    result.textContent = resultado;
    lastValue = resultado.toString();
    firstSolving = false;
}