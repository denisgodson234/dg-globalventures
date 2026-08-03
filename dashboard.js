// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 6.0
// DASHBOARD
// ======================================

import { supabase } from "./supabase.js";

const userName =
document.getElementById("user-name");

const profileName =
document.getElementById("profile-name");

const profileEmail =
document.getElementById("profile-email");

const logoutBtn =
document.getElementById("logout-btn");



// ===============================
// CHECK LOGIN
// ===============================

async function loadUser(){

    const {

        data: { session }

    } = await supabase.auth.getSession();

    if(!session){

        window.location.href = "login.html";
        return;

    }

    const user = session.user;

    const fullName =
    user.user_metadata.full_name || "User";

    const email =
    user.email;

    userName.textContent = fullName;
    profileName.textContent = fullName;
    profileEmail.textContent = email;

}

loadUser();



// ===============================
// LOGOUT
// ===============================

logoutBtn.addEventListener("click", async (e)=>{

    e.preventDefault();

    await supabase.auth.signOut();

    alert("You have been logged out.");

    window.location.href = "login.html";

});



// ===============================
// AUTH STATE
// ===============================

supabase.auth.onAuthStateChange((event)=>{

    if(event === "SIGNED_OUT"){

        window.location.href = "login.html";

    }

});