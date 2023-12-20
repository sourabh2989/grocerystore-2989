let serachform=document.querySelector('.seacrh-f');

document.querySelector('#search-btn').onclick=()=>{
    // serachform.classList.toggle('active');
    serachform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
};

let shoppingcart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    serachform.classList.remove('active');
    shoppingcart.classList.toggle('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    
};



let loginform =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    serachform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
};

let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    serachform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.toggle('active');
};

window.onscroll=()=>{
    serachform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    };
    





    var swiper = new Swiper(".product-slider",{
       loop:true,
        spaceBetween: 20,

       autoplay:{
        delay:7500,
        disableOnInteraction:false,
       },
       breakpoints:{
            0:{ slidesPerView: 1,
        
          },
          768: {
            slidesPerView: 2,
         
          },
          1020: {
            slidesPerView: 3,
       
          },
        },
      });


    