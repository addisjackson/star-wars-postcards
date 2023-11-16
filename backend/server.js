const app = require('./app');
const express = require('express');


require('dotenv').config();
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
    console.log(`Planets running on port ${PORT}`);
});


