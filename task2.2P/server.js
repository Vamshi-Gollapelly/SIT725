const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// GET endpoint: /add?num1=4&num2=6
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input');
    }
    res.send(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
});

// POST endpoint (optional): /multiply
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    res.json({ result: num1 * num2 });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

