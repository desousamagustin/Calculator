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

var result = document.querySelector(".calculator__display");
var erase = document.getElementById("erase");
var equal = document.getElementById("equal");
var operating1 = 0, operating2 = 0, operator = "";

/* EVENTS */

one.addEventListener('click',function(){
    result.textContent = result.textContent + '1';
});

two.addEventListener('click',function(){
    result.textContent = result.textContent + '2';
});

three.addEventListener('click',function(){
    result.textContent = result.textContent + '3';
});

four.addEventListener('click',function(){
    result.textContent = result.textContent + '4';
});

five.addEventListener('click',function(){
    result.textContent = result.textContent + '5';
});

six.addEventListener('click',function(){
    result.textContent = result.textContent + '6';
});

seven.addEventListener('click',function(){
    result.textContent = result.textContent + '7';
});

eight.addEventListener('click',function(){
    result.textContent = result.textContent + '8';
});

nine.addEventListener('click',function(){
    result.textContent = result.textContent + '9';
});

zero.addEventListener('click',function(){
    result.textContent = result.textContent + '0';
});

erase.addEventListener('click',function(){
    reset();
});

plus.addEventListener('click',function(){
    operating1 = result.textContent;
    operator = '+';
    clean();
});

minus.addEventListener('click',function(){
    operating1 = result.textContent;
    operator = '-';
    clean();
});

times.addEventListener('click',function(){
    operating1 = result.textContent;
    operator = '*';
    clean();
});

dividedBy.addEventListener('click',function(){
    operating1 = result.textContent;
    operator = '/';
    clean();
});

equal.addEventListener('click',function(){
    operating2 = result.textContent;
    solve();
});

/* FUNCTIONS */

function clean(){
    result.textContent = "";
}

function reset(){
    clean();
    operating1 = 0;
    operating2 = 0;
    operator = 0;
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
                    res = res.toFixed(10);
                }
            break;
        }
    result.textContent = res;
}