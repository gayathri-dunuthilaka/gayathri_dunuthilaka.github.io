document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Show notification
    const showNotification = (message, isError = false) => {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.className = isError ? 'notification error' : 'notification';
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 2000);
    };
  
    // Send form data using EmailJS
    emailjs.send("service_jh4ri9m", "template_hka5fa9", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      showNotification('Your message has been sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      showNotification('Failed to send your message. Please try again later.', true);
    });
  });
  
  
  
  // Typed.js initialization
  var typed = new Typed(".text", {
    strings: ["Software Engineer", "UI/UX Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  
  
