const express = require('express');

const app = express();
app.use(express.json());

// routes
const appRoute = require('./routes/app');

app.use('/password-gen', appRoute);

// port
app.listen(process.env.PORT || 8080);
