// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 5 SCRIPT
// REAL AI FAQ CONNECTION
// ======================================


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}



// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});






// ===============================
// AI FAQ ASSISTANT
// CONNECT TO /ask ROUTE
// ===============================


async function askAI() {


    const questionInput = document.getElementById("user-question");

    const responseBox = document.getElementById("ai-response");


    const question = questionInput.value.trim();



    if (question === "") {


        responseBox.innerHTML =
        "Please enter a question first.";


        return;

    }



    responseBox.innerHTML =
    "DG Global AI Assistant is thinking...";




    try {


        const response = await fetch("/ask", {


            method: "POST",


            headers: {

                "Content-Type": "application/json"

            },


            body: JSON.stringify({

                question: question

            })


        });





        const data = await response.json();




        responseBox.innerHTML = data.answer;



    } catch (error) {


        console.log(error);



        responseBox.innerHTML =
        "Sorry, I cannot connect to the AI assistant right now. Please contact us on WhatsApp: +2347069575671";


    }



    questionInput.value = "";

}








// ===============================
// SCROLL ANIMATION
// ===============================


const sections = document.querySelectorAll("section");



sections.forEach(section => {


    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "0.8s ease";


});




window.addEventListener("scroll", () => {


    sections.forEach(section => {


        const position =
        section.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;



        if (position < screenHeight - 100) {


            section.style.opacity = "1";

            section.style.transform =
            "translateY(0)";


        }


    });


});






// ===============================
// AUTOMATIC YEAR UPDATE
// ===============================


const year = new Date().getFullYear();


const footerText = document.querySelector("footer p");



if (footerText) {


    footerText.innerHTML =
    `© ${year} Denis Godson Global Ventures. All Rights Reserved.`;


}