var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

var bcrypt = require('bcrypt-nodejs');

var User = require('./src/models/user');


app.use(cors());
app.options('*', cors());

app.post('/register', function(req,res){
  
  var userData = req.body;
  var user = new User(userData);

  user.save((err, newUser) =>{
      if(err){
          return res.status(401).send({message: 'Error Registering the User'})
      }else {
          let payload = { sub: newUser._id }

          let token = jwt.encode(payload, '123')
      
          res.status(200).send({token})
      }
  })

})

app.post('/login', async (req, res) =>{

    var userData = req.body;
    var user = await User.findOne({email: userData.email});

    console.log(user);

    if(!user){
        return res.status(401).send({message: 'Email or Password Invalid'})
    }

    bcrypt.compare(userData.password, user.password, (err, isMatch) =>{
        if(!isMatch){
            return res.status(401).send({message: 'Email or Password Invalid'})
        }
        
    var payload = { sub: user._id }

    var token = jwt.encode(payload, '123')

    res.status(200).send({token})
    })
    

});

mongoose.connect('mongodb://localhost:27017/meanstack',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})

app.listen(8081, function(){
  console.log("Listening from 8081...");
});