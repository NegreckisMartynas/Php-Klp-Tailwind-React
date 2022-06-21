const path = require('path')
const express = require('express')
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const app = express()
const port = 5500

app.use(express.static('static'));
app.set('views', path.join(__dirname, '/routes'))
app.engine('html', require('ejs').renderFile)


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());

app.get('/', (req, res) => {
    res.render('index.html');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

