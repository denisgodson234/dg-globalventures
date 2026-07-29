// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 5 SERVER
// GROQ AI VERSION
// ======================================


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Groq = require("groq-sdk");

const path = require("path");


const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());


// Serve website files from main folder

app.use(express.static(__dirname));




// ===============================
// GROQ AI CONFIGURATION
// ===============================

const client = new Groq({

    apiKey: process.env.GROQ_API_KEY

});






// ===============================
// AI FAQ ROUTE
// ===============================

app.post("/ask", async (req, res) => {


    try {


        const question = req.body.question;



        if (!question) {


            return res.json({

                answer: "Please enter a question."

            });


        }




        const chatCompletion = await client.chat.completions.create({


            model: "llama-3.1-8b-instant",


            messages: [

                {

                    role: "system",

                    content: `

You are DG Global AI Assistant for Denis Godson Global Ventures.

Business Name:
Denis Godson Global Ventures

Slogan:
Your Gateway to Branding, Marketing and Innovation


Services:
- Branding
- Logo Design
- Graphic Design
- Digital Marketing
- Business Promotion
- Connecting Buyers and Sellers


WhatsApp Business:
+2347069575671


Rules:
- Answer customers professionally.
- Be friendly and helpful.
- Keep answers clear and simple.
- Explain services and guide customers to contact WhatsApp when needed.

`

                },


                {

                    role: "user",

                    content: question

                }


            ]



        });





        const answer =
        chatCompletion.choices[0].message.content;




        res.json({

            answer: answer

        });





    } catch (error) {


        console.log(error);



        res.status(500).json({

            answer:
            "Sorry, the AI assistant is currently unavailable. Please contact Denis Godson Global Ventures on WhatsApp: +2347069575671"

        });


    }


});








// ===============================
// HOME PAGE
// ===============================


app.get("/", (req, res) => {


    res.sendFile(
        path.join(__dirname, "index.html")
    );


});








// ===============================
// SERVER START
// ===============================


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {


    console.log(
        `Denis Godson Global Ventures server running on port ${PORT}`
    );


});