const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  classID: String,
  data: String
});

mongoose.model('data', dataSchema);
