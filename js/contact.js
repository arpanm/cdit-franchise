// Function to handle contact form submission
async function handleContactSubmit(event) {
    event.preventDefault();

    // Initialize EmailJS with your public key
    emailjs.init("sRgORvA-80TMW7Oan");

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_jv8jay6',  // Email service ID
            'template_fltmwbr', // Email template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: JSON.stringify(formData),
                to_email: 'mukh.arpan@gmail.com' // Replace with your email
            }
        );

        if (response.status === 200) {
            alert('Thank you for your message. We will get back to you soon!');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
    }
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);