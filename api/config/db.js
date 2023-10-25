const mongoose = require('mongoose');
require('dotenv').config();
const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    // .connect(process.env.DB_URL)
   
    .connect("mongodb+srv://Abhi123:Abhi123@cluster0.8q6b9mk.mongodb.net/")
    .then(console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
