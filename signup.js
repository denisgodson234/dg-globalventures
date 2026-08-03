// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 6.0
// SIGN UP
// ======================================

import { supabase } from "./supabase.js";

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (
        fullName === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    try {

        // Create user in Supabase Auth
        const { data, error } = await supabase.auth.signUp({

            email: email,

            password: password,

            options: {

                data: {

                    full_name: fullName,
                    phone: phone

                }

            }

        });

        if (error) {

            alert(error.message);
            return;

        }

        alert("Account created successfully!");

        window.location.href = "login.html";

    } catch (err) {

        console.error(err);

        alert("Something went wrong. Please try again.");

    }

});