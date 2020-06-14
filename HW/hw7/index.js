"use strict"
// /////////////////////////////1////////////////////////////////////
// const list = document.querySelector("#categories");
// console.log(`В списке ${list.children.length} категории.`);

// const items = document.querySelectorAll(".item");
// const arr = Array.from(items);
// Array.from(list.children).forEach(el=>{console.log(el.firstElementChild.textContent)
// console.log(`Категории: ${el.children[1].childElementCount}`);
// });
// //////////////////////////////2//////////////////////////////////////

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];

//   const list = document.querySelector("#ingredients");
//   ingredients.forEach(el=>{const li = document.createElement("li");
//     li.textContent = el;
//     list.appendChild(li)
//     });
/////////////////////////////3////////////////////////////////
//     const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.querySelector('#gallery')


// images.forEach(el=>{
//     const img = document.createElement('img');
//     const li = document.createElement('li')
//     img.setAttribute('src',el.url)
//     img.setAttribute('alt',el.alt)
//     img.style.width = "100px";
//     img.style.height = "100px";
//     gallery.style.display = 'flex';
//     gallery.style.justifyContent = 'space-around';
//     gallery.style.listStyle = 'none';
//     li.append(img)
//     gallery.insertAdjacentElement('afterbegin',li)
// })

// ///////////////////4///////////////////////////////////////

// const div = document.querySelector("#counter");
// const clickHandler = ({target}) => {
//     let str = "";
//     if(target.dataset.action === "decrement"){
//         str = +div.children[1].textContent - 1;
//     }else if(target.dataset.action === "increment") {
//         str = +div.children[1].textContent + 1;
//     }else{
//         return; 
//     }
//     div.children[1].textContent = str;
// }
// div.children[0].addEventListener('click', clickHandler)
// div.children[2].addEventListener('click', clickHandler)

//////////////////////////////5/////////////////////////////


// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// const name = function({target}){
//    if(target.value.length === 0){
//     nameOutput.textContent = 'Незнакомец';
// } else{
//     nameOutput.textContent = target.value
// }
// }
// nameInput.addEventListener('input',name)




// //////////////////6//////////////////////////////////////////
// const input = document.querySelector("#validation-input");
// const checkSumOfSymbols= function(){
//     if(input.value.length<=input.dataset.length){
//         input.className='valid';

//     }else {
//         input.className='invalid';
//     }
// }
// input.addEventListener('focusout',checkSumOfSymbols);
// ////////////////////////////////7//////////////////////////////////

// const input = document.querySelector('#font-size-control');
// const span = document.querySelector('#text');
// function ggg(){
//     console.log(input.value);
//    span.style.fontSize=input.value+'px';
    
// }
// input.addEventListener("input",ggg);



// const box = document.querySelector('.div');
// box.addEventListener('click',({target})=>console.log(target))
// // // ===========================8==================================

// const controls = document.querySelector('#controls');
// const boxes = document.querySelector('#boxes');
// function createBoxes(amount){
//     let size = 30;
//    for(let i=0;i<amount;i++){
//     const div = document.createElement('div');
// let r = (Math.floor(Math.random()*255));
// let g = (Math.floor(Math.random()*255));
// let b= (Math.floor(Math.random()*255));
// div.style.width=size+'px';
// div.style.height=size+'px';
// div.style.backgroundColor = `rgb(${r},${g},${b})`;
// size +=10;
// boxes.append(div);


//    }
// }
// function destroyBoxes(){
//     boxes.innerHTML='';
// }
// function eventHandler({target}){
//     if(target.dataset.action==='render'){
//         createBoxes(controls.firstElementChild.value)


//     }else if(target.dataset.action==='destroy'){
//         destroyBoxes();


//     }else{
//         return;
//     }
// }
// controls.addEventListener('click',eventHandler);