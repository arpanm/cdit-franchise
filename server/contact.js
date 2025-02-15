const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your Gmail address
        pass: 'your-app-password' // Replace with your Gmail app password
    }
});

// Handle POST request to /api/contact
router.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Email options
    const mailOptions = {
        from: 'your-email@gmail.com', // Replace with your Gmail address
        to: 'arpan.mukh@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;