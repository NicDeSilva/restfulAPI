const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/db-name';

mongoose.connect(connectString, {useNewUrlParser:true})
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    maxlength: 200
  },
  completed: {
    type: Boolean,
    default: false
  },
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);
