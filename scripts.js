document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromName = document.getElementById('from_name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate email
    if (email && validateEmail(email)) {
        // Send the email via EmailJS using your Service ID and Template ID
        emailjs.send("service_oajsznk", "your_template_id", {
            to_name: email,    // Set email as the recipient
            from_name: fromName,
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully!', response);
            alert('Thank you for subscribing!');
        }, function(error) {
            console.error('Failed to send the email:', error);
            alert('Failed to send the email. Please try again.');
        });
    } else {
        alert('Please enter a valid email address.');
    }
});
