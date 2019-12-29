// Import node_modules
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const app = express();

app.use(morgan('dev'));

// APi url
const url = 'http://nodejs.org/dist/index.json';

// Routes and api
app.get('/', (req, res) => {
    res.json({
        message: "This is the first docker example"
    });
});

app.get('/docker', (req, res) => {
    http.get(url, (data) => {
        data.setEncoding('utf8');
        let rawData = '';
        data.on('data', (chunk) => { rawData += chunk; });
        data.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                // console.log(parsedData);
                res.json(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
});

app.get('/new', (req, res)=> {
    res.json({
        message: "New Pull"
    })
})

// Server listn
app.listen(3000, console.log("http://localhost:3000"));