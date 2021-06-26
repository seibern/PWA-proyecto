const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));

// routes
app.use(require('./routes/index'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});