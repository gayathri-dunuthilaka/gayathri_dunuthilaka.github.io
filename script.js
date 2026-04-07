// ===============================
// CONTACT FORM (EMAILJS)
// ===============================

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const btn = document.querySelector(".send");

  // ===============================
  // SIMPLE VALIDATION
  // ===============================
  if (!name || !email || !subject || !message) {
    showNotification("Please fill all fields", true);
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showNotification("Enter a valid email", true);
    return;
  }

  // ===============================
  // LOADING STATE
  // ===============================
  btn.value = "Sending...";
  btn.disabled = true;

  // ===============================
  // SEND EMAIL
  // ===============================
  emailjs.send("service_jh4ri9m", "template_hka5fa9", {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
  })
  .then(function(response) {
    console.log("SUCCESS!", response.status, response.text);

    showNotification("Message sent successfully!");
    document.getElementById('contact-form').reset();

    btn.value = "Submit";
    btn.disabled = false;

  }, function(error) {
    console.log("FAILED...", error);

    showNotification("Failed to send message. Try again.", true);

    btn.value = "Submit";
    btn.disabled = false;
  });
});


// ===============================
// NOTIFICATION FUNCTION
// ===============================
function showNotification(message, isError = false) {
  const notification = document.getElementById('notification');

  notification.textContent = message;
  notification.className = isError ? 'notification error' : 'notification';
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}


// ===============================
// TYPING EFFECT (Typed.js)
// ===============================
var typed = new Typed(".text", {
  strings: ["QA Engineer", "Automation Tester", "QA Analyst"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1200,
  loop: true
});