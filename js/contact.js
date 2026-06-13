// ==========================
// EMAIL JS INIT
// ==========================

emailjs.init("wUhtFPkBwbHwKGRak");

// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_ybbkj6r",
        "template_fp0jq38",
        form
    )
    .then(() => {

        status.innerHTML = "✅ Message sent successfully!";
        status.style.color = "#38bdf8";

        form.reset();

        sendBtn.disabled = false;
        sendBtn.innerHTML = "Send Message";

    })
    .catch((error) => {

        console.error(error);

        status.innerHTML = "❌ Failed to send message.";
        status.style.color = "#ef4444";

        sendBtn.disabled = false;
        sendBtn.innerHTML = "Send Message";

    });

});