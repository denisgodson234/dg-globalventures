// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 6.0
// LOGIN
// ======================================

import { supabase } from "./supabase.js";

const loginForm = document.getElementById("login-form");
const forgotPassword = document.getElementById("forgot-password");



// ===============================
// LOGIN
// ===============================

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    if(email === "" || password === ""){

        alert("Please enter your email and password.");

        return;

    }

    try{

        const { error } =
        await supabase.auth.signInWithPassword({

            email,
            password

        });

        if(error){

            alert(error.message);

            return;

        }

        alert("Login successful!");

        window.location.href = "dashboard.html";

    }

    catch(err){

        console.error(err);

        alert("An unexpected error occurred.");

    }

});



// ===============================
// FORGOT PASSWORD
// ===============================

forgotPassword.addEventListener("click", async (e)=>{

    e.preventDefault();

    const email =
    prompt("Enter your email address:");

    if(!email){

        return;

    }

    const { error } =
    await supabase.auth.resetPasswordForEmail(email,{

        redirectTo:
        window.location.origin + "/login.html"

    });

    if(error){

        alert(error.message);

        return;

    }

    alert(
        "Password reset email sent. Check your inbox."
    );

});



// ===============================
// CHECK LOGIN
// ===============================

(async()=>{

    const {

        data:{session}

    } = await supabase.auth.getSession();

    if(session){

        window.location.href = "dashboard.html";

    }

})();