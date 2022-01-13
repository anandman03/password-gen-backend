const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());

// routes
const appRoute = require('./routes/app');

app.use('/password-gen', appRoute);

// port
app.listen(process.env.PORT || 8080);
