const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { from_name, last_name, email, phone, message } = req.body;


    const emailData = {
        from_name,
        last_name,
        email,
        phone,
        message,
    };

    emailjs.send('service_7mdjar77', 'template_5dwcmbm', emailData, 'bReY04ACp')
        .then(() => {
            console.log('Email sent successfully!');
            res.json({ message: 'Email sent successfully!' });
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});