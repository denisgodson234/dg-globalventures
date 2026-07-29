// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 5.1 SCRIPT
// GROQ AI CHATBOT VERSION
// ======================================



// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}




document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});







// ===============================
// AI CHATBOT
// ===============================


const chatMessages = document.getElementById("chat-messages");
const questionInput = document.getElementById("user-question");





// Add message to chat


function addMessage(message,type){


    const div = document.createElement("div");


    if(type === "user"){

        div.className = "user-message";

    }

    else {

        div.className = "ai-message";

    }



    div.innerHTML = message;


    chatMessages.appendChild(div);



    chatMessages.scrollTop =
    chatMessages.scrollHeight;


    return div;


}








// Typing animation


function showTyping(){


    const typing = document.createElement("div");


    typing.className = "ai-message";


    typing.id = "typing";


    typing.innerHTML =
    "DG Global AI is typing...";


    chatMessages.appendChild(typing);



    chatMessages.scrollTop =
    chatMessages.scrollHeight;



}




function removeTyping(){


    const typing =
    document.getElementById("typing");



    if(typing){

        typing.remove();

    }


}








// Send question to Groq AI


async function askAI(){


    const question =
    questionInput.value.trim();



    if(question === ""){


        return;

    }





    // Show user message


    addMessage(question,"user");



    questionInput.value = "";



    showTyping();





    try {



        const response = await fetch("/ask",{


            method:"POST",


            headers:{


                "Content-Type":"application/json"


            },


            body:JSON.stringify({


                question:question


            })


        });






        const data =
        await response.json();




        removeTyping();




        addMessage(
            data.answer,
            "ai"
        );





    }


    catch(error){



        console.log(error);



        removeTyping();



        addMessage(

        "Sorry, I cannot connect to DG Global AI right now. Please contact us on WhatsApp: +2347069575671",

        "ai"

        );


    }



}








// Press Enter to send


if(questionInput){


    questionInput.addEventListener("keypress",(event)=>{


        if(event.key === "Enter"){


            askAI();


        }


    });


}








// ===============================
// SCROLL ANIMATION
// ===============================


const sections =
document.querySelectorAll("section");



sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform=
    "translateY(40px)";

    section.style.transition=
    "0.8s ease";


});





window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position =
        section.getBoundingClientRect().top;



        const screenHeight =
        window.innerHeight;




        if(position < screenHeight - 100){


            section.style.opacity="1";


            section.style.transform=
            "translateY(0)";


        }


    });


});








// ===============================
// FOOTER YEAR UPDATE
// ===============================


const year =
new Date().getFullYear();



const footer =
document.querySelector("footer p");



if(footer){


    footer.innerHTML =
    `© ${year} Denis Godson Global Ventures. All Rights Reserved.`;

}