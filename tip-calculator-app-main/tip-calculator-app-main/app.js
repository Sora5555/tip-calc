"use strict";

let five = document.querySelector('.five');
let ten = document.querySelector('.ten');
let fifteen = document.querySelector('.fifteen');
let twentyFive = document.querySelector('.twenty-five');
let fifty = document.querySelector('.fifty');

five.addEventListener('click', function(){
    calculateAll(5)
})


ten.addEventListener('click', function(){
    calculateAll(10)
})


fifteen.addEventListener('click', function(){
    calculateAll(15)
})

twentyFive.addEventListener('click', function(){
    calculateAll(25)
})


fifty.addEventListener('click', function(){
    calculateAll(50)
})


function calculateAll(percentage){
    let bill = document.querySelector('.input-box');
    let people = document.querySelector('.input-box-2');
    let total = parseInt((bill.value / people.value).toFixed(2));
    let tip =  parseInt((total * percentage / 100).toFixed(2));
    let totalinperson = total + tip;
    document.querySelector('.result').innerHTML = '$ ' + tip;
    document.querySelector('.result-2').innerHTML = '$ ' + totalinperson;
}