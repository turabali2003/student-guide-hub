function openTab(tabId) {

    // Hide all content
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));

    // Remove active from buttons
    let buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Show selected tab
    document.getElementById(tabId).classList.add("active");

    // Highlight clicked button
    event.target.classList.add("active");
}
function openTab(evt, tabName) {
    let i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tabbuttons = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // ===== MOVE INDICATOR =====
    const indicator = document.querySelector(".tab-indicator");
    const index = Array.from(tabbuttons).indexOf(evt.currentTarget);

    indicator.style.left = `${index * 20}%`;
}
window.onload = () => {
    let activeBtn = document.querySelector(".tab-btn.active");
    let indicator = document.querySelector(".tab-indicator");

    indicator.style.width = activeBtn.offsetWidth + "px";
    indicator.style.left = activeBtn.offsetLeft + "px";
};
function showDetail(id) {
    let boxes = document.querySelectorAll(".detail-box");

    boxes.forEach(box => box.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}
function showDetail(id, btn) {
    let boxes = document.querySelectorAll(".detail-box");
    let buttons = document.querySelectorAll(".sub-tabs button");

    boxes.forEach(box => box.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    btn.classList.add("active");
}
function submitForm(event) {
    event.preventDefault();
    alert("Application submitted successfully!");
}
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {
    let filter = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "block" : "none";
    });
});

function sendMessage() {
    alert("✅ Message sent successfully!");
}


// SWITCH FORMS
function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// SIGNUP FUNCTION
function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if (user === "" || pass === "") {
        showMessage("Please fill all fields", "red");
        return;
    }

    let userData = {
        username: user,
        password: pass,
        email: "",
        program: ""
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    showMessage("Account created! Please login.", "green");
    showLogin();
}

// LOGIN FUNCTION
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && user === storedData.username && pass === storedData.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        showMessage("Invalid credentials", "red");
    }
}

// MESSAGE FUNCTION
function showMessage(msg, color) {
    let message = document.getElementById("authMessage");
    message.innerText = msg;
    message.style.color = color;
}


// LOAD USER DATA
function loadProfile() {
    let data = JSON.parse(localStorage.getItem("userData"));

    if (data) {
        document.getElementById("username").innerText = data.username;
        document.getElementById("email").value = data.email || "";
        document.getElementById("program").value = data.program || "";
    }
}

// SAVE PROFILE
function saveProfile() {
    let data = JSON.parse(localStorage.getItem("userData"));

    data.email = document.getElementById("email").value;
    data.program = document.getElementById("program").value;

    localStorage.setItem("userData", JSON.stringify(data));

    alert("Profile updated!");
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// AUTO LOAD PROFILE
if (window.location.pathname.includes("profile.html")) {
    loadProfile();
}

function protectPage() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}