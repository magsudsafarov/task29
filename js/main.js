var date = new Date().getHours();
console.log(date);

const first=document.querySelector('.first');
console.log(first);

if(date >=6 && date <=20) { 
  document.body.style.backgroundColor="white";
}
else{
  document.body.style.backgroundColor="black";
  first.style.backgroundColor="red";
}
