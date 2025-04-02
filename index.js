var express = require('express');
const multer = require('multer');
var cors = require('cors');
require('dotenv').config()

var app = express();
const upload = multer({dest: 'uploads/'})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
  const avatar = req.file;

  res.send({
    name: avatar.originalname,
    type: avatar.mimetype,
    size: avatar.size
  });
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
