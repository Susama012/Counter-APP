// Counter initialize with zero
let count = 0;

//Adding functionality for decrement button
document.getElementById("decrease").onclick = function(){
    count--;
    document.getElementById("counter").innerHTML = count;
}

//Adding functionality for reset button
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

//Adding functionality for increment button
document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("counter").innerHTML = count;
}
