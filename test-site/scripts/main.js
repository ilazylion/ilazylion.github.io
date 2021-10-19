let myImage = document.querySelector('img');

myImage.onclick=function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='images/11.jpg'){
        myImage.setAttribute('src','images/12.jpg');
    }else{
        myImage.setAttribute('src','images/11.jpg');
    }
}

let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  localStorage.removeItem('name');//本地删除

  myButton.onclick = function() {
    setUserName();
 }
