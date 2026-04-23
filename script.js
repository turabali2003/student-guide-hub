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
}function openTab(event, tabId) {

    let contents = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");
    let indicator = document.querySelector(".tab-indicator");

    contents.forEach(c => c.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");

    // Move indicator
    indicator.style.width = event.currentTarget.offsetWidth + "px";
    indicator.style.left = event.currentTarget.offsetLeft + "px";
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
});sssss