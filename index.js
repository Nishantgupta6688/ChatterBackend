const express = require('express');
require('./model/User');
require('./model/Chats');
require('./database');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.json({type: 'application/json'}));

require('./routes/auth.routes')(app);
require('./routes/data.routes')(app);
console.log("working");



const PORT = process.env.PORT || 5000;
app.listen(PORT);

