// script.js 

// nav bar js

const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('open');

    if (menuIcon.classList.contains('open')) {
        menuIcon.textContent = '✖'; // croix
    } else {
        menuIcon.textContent = '≡'; // hamburger
    }
});

//modal js

//contact modal
document.addEventListener("DOMContentLoaded", function(){
    const chatBotBtnNav = document.getElementById("chatBotBtn"); // select the button on the nav

    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");

    // show the modal on click of the let's talk navigation
    chatBotBtnNav.addEventListener("click", function(){
        modal.style.display = "flex";
    });

    // hide the modal on click of X
    closeBtn.addEventListener("click", function(){
        modal.style.display = "none";
    });

    // hide the modal on anywhere click
    window.addEventListener("click", function(event){
        if (event.target === modal){
            modal.style.display = "none";
        }
    });
});

// chatbot js // send messages

const sendBtn = document.getElementById("send-button");
const clearBtn = document.getElementById("clear-button");
const messageInput = document.getElementById("message-input");
const chatArea = document.getElementById("chat-area")

// event listener for send button
sendBtn.addEventListener("click", () => {
    const messageText = messageInput.value.trim();
    if(messageText !== ''){

        //create p in chat area
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = messageText;
        chatArea.appendChild(messageParagraph);
        messageInput.value = "";
        messageInput.focus();
    }

    clearBtn.addEventListener("click", () => {
        chatArea.innerHTML="";
    })
});

// slider

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay:{
      delay:5000,
      disableOnInteraction:false,
    },
    // manual navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  
  });