// gana sehaki

//contact modal
document.addEventListener("DOMContentLoaded", function(){
    const chatNowBtnNav = document.querySelector(".chatNowBtnNav"); // select the button on the nav
    const chatNowBtn = document.getElementById("chatNowBtn");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");

    // show the modal on click of chat now CALL TO ACTION
    chatNowBtn.addEventListener("click", function(){
        modal.style.display = "flex";
    });

    // show the modal on click of the let's talk navigation
    chatNowBtnNav.addEventListener("click", function(){
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

//my skills section reload
 

 
