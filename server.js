// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 5 SERVER
// ======================================


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

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
// AI CONFIGURATION
// ===============================

const client = new OpenAI({

    apiKey: process.env.OPENAI_API_KEY

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



        const response = await client.responses.create({

            model: "gpt-4.1-mini",

            input: `

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


Your job:
Answer customers professionally.
Be friendly, clear and helpful.
Help visitors understand the business services.


Customer Question:
${question}

`

        });



        res.json({

            answer: response.output_text

        });



    } catch (error) {


        console.log(error);



        res.status(500).json({

            answer:
            "Sorry, the AI assistant is currently unavailable. Please contact us on WhatsApp: +2347069575671"

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