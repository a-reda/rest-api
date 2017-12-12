var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({

  data: [],
  data1: [],
  data2: [],
  data3: []

},
{ collection: 'basicData' }
);

mongoose.model('basicData', DataSchema);

module.exports = mongoose.model('basicData');
