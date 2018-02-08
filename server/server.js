// Express
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(__dirname + '/angular-client-team-manager/dist'));

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// CORS
const cors = require('cors');
app.use(cors());

let morgan = require("morgan");
app.use(morgan('dev'));

//Model

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/player-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const playerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    minlength: [2, 'Name length must be greater than 2'],
    unique: false
  },
  position:{
    type: String, 
    trim: true,
    
  },
  gameOneStatus: {
    type: String,
    default: 'undecided'
  },
  gameTwoStatus: {
    type: String,
    default: 'undecided'
  },
  gamethreeStatus: {
    type: String,
    default: 'undecided'
  },
}, {
  timestamps: true
});
playerSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Player = mongoose.model('Player', playerSchema);

//Controller

const playerController = {
    index: (request, response) => {
      Player.find({})
        .then(players => response.json(players))
        .catch(error => console.log(error));
    },
    create: (request, response) => {  
      Player.create(request.body)
        .then(player => response.json(player))
        .catch(error => console.log(error));
    },
    delete: (request, response) =>{
      Player.findByIdAndRemove(request.params.id)
      .then(player => response.json(player))
      .catch(error => console.log(error));
    },
    update: (request, response) => {
      Player.findById(request.params.id)
      .then(player => {
        player[request.body.game_to_update] = request.body.player_status
        player.save()
        .then(player => response.json(player))
        .catch(error => console.log(error));
      })
    },
};

  // Routes
app 
.get('/players', playerController.index)
.post('/players', playerController.create)
.post('/players/:id', playerController.delete)
.put('/players/:id', playerController.update)

//Server
const port = 5000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));