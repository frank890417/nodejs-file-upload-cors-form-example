// server.js
const express = require("express");
var cors = require('cors')
const multer = require("multer");
const upload = multer();

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())
app.post("/upload_files", upload.array("files"), uploadFiles);
function uploadFiles(req, res, next) {
    // console.log(req)
    console.log(req.body);
    console.log(req.files)
    // console.log(JSON.stringify(req))
    res.send("File uploaded successfully.");
}
app.listen(5001, () => {
    console.log(`Server started...`);
});