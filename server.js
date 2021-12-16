const PORT = process.env.PORT || 80;

var express = require('express')

const app = express();

// Deliver static files as frontend
app.use(express.static('frontend'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));