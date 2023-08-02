/* Declare variables below to save the different sections (divs) of your story*/
let opening=document.querySelector(".story-opening");
let buttonOne=document.querySelector(".option-one");
let buttonTwo=document.querySelector(".option-two");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");
let optionOneScreenButton=document.querySelector(".option-one-screen-button");
let optionTwoScreenButton=document.querySelector(".option-two-screen-button");
let title=document.querySelector(".title");
let ending2=document.querySelector(".ending-two");






buttonOne.onclick=function(){
optionOneScreen.style.display= "block";
opening.style.display="none";
title.style.display="none";
buttonOne.style.display="none";
buttonTwo.style.display="none";


};

optionOneScreenButton.onclick=function(){
optionOneEnd.style.display="block";
optionOneScreen.style.display="none";


};


buttonTwo.onclick=function(){
optionTwoScreen.style.display= "block";
opening.style.display="none";
title.style.display="none";
buttonOne.style.display="none";
buttonTwo.style.display="none";



};


optionTwoScreenButton.onclick=function(){
optionTwoEnd.style.display="block";
optionTwoScreen.style.display="none";


  
};

ending2.onclick=function(){



};