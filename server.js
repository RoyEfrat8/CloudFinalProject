const Person = require('./models/db');
const checkIt = require('./models/askChatGPT');
const express = require('express');
const sendImageForTagging = require('./models/checkimage')
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(fileUpload());

app.use(express.static('public'))

app.post('/save', async (req, res) => {
    let person = new Person(req.body);
    try {
      let photo = req.files.photo;
      let picname = 'public/images/' + photo.name;
      await photo.mv(picname);
      let result = await sendImageForTagging(picname);
      //person.photo = photo.name.toString();
      await person.save();
      res.send(result);
    } catch (error) {
      res.status(500).send('An error occurred');
    }
  });
  
app.get('/read', async (req, res) => {
    var parameter=req.query.id
    try {
        const people = await Person.find({"id":parameter});
        var result={people:people}
        res.render("pages/persondata",result)
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get('/ask',async (req, res) => {
    answer=await checkIt(req.query.question)   
    res.json(answer)
  })
  
app.get('/readbyname', async (req, res) => {
    try {
        const people = await Person.find({name:req.query.name});
        res.status(200).send(people);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(3000, (req, res) => {
    console.log('app is running in port http://localhost:3000');
})