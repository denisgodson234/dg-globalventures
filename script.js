// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 6.0
// AI ASSISTANT + WHATSAPP REQUEST SYSTEM
// NO LOGIN / NO SIGN UP
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


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



// ===============================
// AI CHATBOT SYSTEM
// ===============================

const chatMessages =
    document.getElementById("chat-messages");

const questionInput =
    document.getElementById("user-question");


// ===============================
// ADD CHAT MESSAGE
// ===============================

function addMessage(message, type) {

    const messageBox =
        document.createElement("div");


    if (type === "user") {

        messageBox.className =
            "user-message";

    } else {

        messageBox.className =
            "ai-message";

    }


    messageBox.innerHTML = message;


    chatMessages.appendChild(messageBox);


    chatMessages.scrollTop =
        chatMessages.scrollHeight;


    return messageBox;

}



// ===============================
// SHOW TYPING
// ===============================

function showTyping() {

    const typing =
        document.createElement("div");


    typing.className =
        "ai-message";


    typing.id =
        "typing";


    typing.innerHTML =
        "DG Global AI is typing...";


    chatMessages.appendChild(typing);


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}



// ===============================
// REMOVE TYPING
// ===============================

function removeTyping() {

    const typing =
        document.getElementById("typing");


    if (typing) {

        typing.remove();

    }

}



// ===============================
// ASK AI
// ===============================

async function askAI() {

    const question =
        questionInput.value.trim();


    if (question === "") {

        return;

    }


    // Add user's message
    addMessage(
        question,
        "user"
    );


    // Clear input
    questionInput.value = "";


    // Show typing
    showTyping();


    try {

        const response =
            await fetch("/ask", {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    question: question

                })

            });


        const data =
            await response.json();


        removeTyping();


        if (data.answer) {

            addMessage(
                data.answer,
                "ai"
            );

        } else {

            addMessage(
                "Sorry, I couldn't generate a response. Please try again.",
                "ai"
            );

        }


    }


    catch (error) {

        console.log(error);


        removeTyping();


        addMessage(

            "Sorry, the AI assistant is unavailable. Please contact us on WhatsApp: +2347069575671",

            "ai"

        );

    }

}



// ===============================
// PRESS ENTER TO SEND AI QUESTION
// ===============================

if (questionInput) {

    questionInput.addEventListener(
        "keypress",
        (event) => {

            if (event.key === "Enter") {

                askAI();

            }

        }
    );

}



// ===============================
// CUSTOMER REQUEST TO WHATSAPP
// ===============================

function sendRequest() {


    const name =
        document.getElementById(
            "customer-name"
        ).value.trim();


    const email =
        document.getElementById(
            "customer-email"
        ).value.trim();


    const phone =
        document.getElementById(
            "customer-phone"
        ).value.trim();


    const service =
        document.getElementById(
            "service-needed"
        ).value;


    const details =
        document.getElementById(
            "project-details"
        ).value.trim();



    // Check required fields
    if (
        name === "" ||
        service === "" ||
        details === ""
    ) {

        alert(
            "Please complete your name, service and project details before sending."
        );

        return;

    }



    // Create WhatsApp message

    const message =

`Hello Denis Godson Global Ventures 👋

I would like to request your service.

Name:
${name}

Email:
${email || "Not provided"}

Phone:
${phone || "Not provided"}

Service Needed:
${service}

Project Details:
${details}

Thank you.`;



    // WhatsApp number

    const whatsappNumber =
        "2347069575671";



    // Create WhatsApp URL

    const whatsappURL =

        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);



    // Open WhatsApp

    window.open(
        whatsappURL,
        "_blank"
    );

}



// ===============================
// SCROLL ANIMATION
// ===============================

const sections =
    document.querySelectorAll("section");


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "0.8s ease";

});



window.addEventListener(
    "scroll",
    () => {

        sections.forEach(section => {

            const position =
                section.getBoundingClientRect()
                    .top;


            const screenHeight =
                window.innerHeight;


            if (
                position <
                screenHeight - 100
            ) {

                section.style.opacity = "1";

                section.style.transform =
                    "translateY(0)";

            }

        });

    }
);



// ===============================
// MAKE HERO VISIBLE IMMEDIATELY
// ===============================

window.addEventListener(
    "load",
    () => {

        const firstSection =
            document.querySelector("section");

        if (firstSection) {

            firstSection.style.opacity =
                "1";

            firstSection.style.transform =
                "translateY(0)";

        }

    }
);



// ===============================
// FOOTER YEAR UPDATE
// ===============================

const year =
    new Date().getFullYear();


const footer =
    document.querySelector(
        ".footer-bottom p"
    );


if (footer) {

    footer.innerHTML =

        `© ${year} Denis Godson Global Ventures. All Rights Reserved.`;

}



// ===============================
// LOADER
// ===============================

window.addEventListener(
    "load",
    () => {

        const loader =
            document.querySelector(
                ".loader"
            );


        if (loader) {

            loader.style.opacity = "0";

            loader.style.pointerEvents =
                "none";


            setTimeout(() => {

                loader.style.display =
                    "none";

            }, 600);

        }

    }
);