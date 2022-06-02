const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true, // hoping commenting both of these will fix an error i was getting
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
