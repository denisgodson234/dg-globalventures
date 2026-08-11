// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 6.0
// GROQ AI SERVER
// NO LOGIN / NO SIGN UP
// ======================================

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");
const path = require("path");

dotenv.config();

const app = express();


// ======================================
// MIDDLEWARE
// ======================================

app.use(cors());

app.use(express.json());


// ======================================
// SERVE WEBSITE FILES
// ======================================

app.use(express.static(__dirname));


// ======================================
// GROQ AI CONFIGURATION
// ======================================

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


// ======================================
// AI ASSISTANT ROUTE
// ======================================

app.post("/ask", async (req, res) => {

    try {

        const question = req.body.question;


        // Check question
        if (!question) {

            return res.json({
                answer: "Please enter a question."
            });

        }


        // Send question to Groq
        const chatCompletion =
            await client.chat.completions.create({

                model: "llama-3.1-8b-instant",

                messages: [

                    {
                        role: "system",

                        content: `

You are DG Global AI Assistant for
Denis Godson Global Ventures.

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
- Website Design

WhatsApp Business:
+2347069575671

Rules:

- Answer customers professionally.
- Be friendly and helpful.
- Keep answers clear and simple.
- Explain services clearly.
- Help customers understand which service may be suitable.
- Guide customers to WhatsApp when they need to contact the business.
- Do not pretend to be a human employee.
- Do not invent prices or services that are not provided.
- Keep responses useful and concise.

                        `
                    },

                    {
                        role: "user",

                        content: question
                    }

                ]

            });


        // Get AI response
        const answer =
            chatCompletion
                .choices[0]
                .message
                .content;


        // Send response
        res.json({
            answer: answer
        });


    }

    catch (error) {

        console.log(
            "Groq AI Error:",
            error
        );


        res.status(500).json({

            answer:
                "Sorry, the AI assistant is currently unavailable. Please contact Denis Godson Global Ventures on WhatsApp: +2347069575671"

        });

    }

});


// ======================================
// HOME PAGE
// ======================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "index.html"
        )
    );

});


// ======================================
// SERVER START
// ======================================

const PORT =
    process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(
        `Denis Godson Global Ventures server running on port ${PORT}`
    );

});