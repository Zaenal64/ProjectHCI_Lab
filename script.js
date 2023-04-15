function validate(){

    var quantity = document.forms["buy"]["quantity"].value

    if(quantity.value = 0){
        alert("Must fill quantity")
    }
   var name =  document.forms["buy"]["name"].value;

   if(name.length <= 5){
       alert("Name must consist of more than 5 characters")
   }

   var email = document.forms["buy"]["email"].value;
   var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if(!email.match(regex)){
    alert("Invalid email address")
   }

   var phone = document.forms["buy"]["phone"].value;
    regex = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g

    if(!phone.match(regex)){
        alert("Invalid phone number")
    }


   
  


}

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter ) + 'px';


next.addEventListener('click',()=>{
    
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prev.addEventListener('click',()=>{
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

slider.addEventListener('transitioned', () =>{
    if(images[counter].id === 'last'){
        slider.style.transition = "none";
        counter = images.length -2;
        slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if(images[counter].id === 'first'){
        slider.style.transition = "none";
        counter = images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});