/* OPERATINGS */

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

/* OPERATORS */

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var dividedBy = document.getElementById("divided-by");

/* OTHERS */

var result = document.querySelector(".display__result-container");
var calculus = document.querySelector(".display__calculus-container");
var erase = document.getElementById("erase");
var equal = document.getElementById("equal");
var operating1 = 0, operating2 = 0, operator = "";

/* EVENTS */

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
    calculus.style.opacity='1';
    operating1 = calculus.textContent;
    operator = '+';
    clean();
});

minus.addEventListener('click',function(){
    calculus.style.opacity='1';
    operating1 = calculus.textContent;
    operator = '-';
    clean();
});

times.addEventListener('click',function(){
    calculus.style.opacity='1';
    operating1 = calculus.textContent;
    operator = '*';
    clean();
});

dividedBy.addEventListener('click',function(){
    calculus.style.opacity='1';
    operating1 = calculus.textContent;
    operator = '/';
    clean();
});

equal.addEventListener('click',function(){
    operating2 = calculus.textContent;
    solve();
});

/* FUNCTIONS */

function clean(){
    calculus.textContent = "";
}

function reset(){
    clean();
    operating1 = 0;
    operating2 = 0;
    operator = 0;
    result.textContent = 0;
}

function solve(){
    var res = 0;
    switch(operator){
        case '+':
            res = parseFloat(operating1) + parseFloat(operating2);
            break;
        case '-':
            res = operating1 - operating2;
            break;
        case '*':
            res = operating1 * operating2;
            break;
        case '/':
            if(operating2 == 0)
                res = "Math error";
            else if(operating1 % operating2 == 0)
                    res = operating1 / operating2;
                else {
                    res = operating1 / operating2;
                    res = parseFloat(res.toFixed(10));
                }
            break;
        }
    result.textContent = res;
    calculus.textContent = res;
    calculus.style.opacity='0';
}