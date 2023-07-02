const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.json());

// POST route to handle the requests
app.post('/api', (req, res) => {
    const textFromOpenAI = req.body.text;
    // Handle the text and send the email (use a library like nodemailer for example)
    // ...
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
