const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()

app.use(cors({ origin: '*' }))

function CorsSolver(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
}

function CorsSolver(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
}



app.use('/api', CorsSolver, createProxyMiddleware({ target: 'https://checkusernames.com', pathRewrite: { [`^/api`]: '' }, changeOrigin: true, secure: true }));
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
