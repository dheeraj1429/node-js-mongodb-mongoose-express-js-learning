const mongoose = require('mongoose');

// Connect to the mongodb
mongoose
   .connect('mongodb://localhost:27017/userData', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('connected');
   })
   .catch((err) => {
      console.log(err);
   });

// set the shema
const userData = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   age: Number,
   date: {
      type: Date,
      default: Date.now,
   },
   active: Boolean,
});

// models
const StoreUser = new mongoose.model('userDataStore', userData);

// insert data into the data base
const userRef = async function () {
   try {
      const userDoc = new StoreUser({
         name: 'dheeraj sing',
         email: 'dheerajsingh1429@gmail.com',
         active: true,
         age: 20,
      });
      const userDocOne = new StoreUser({
         name: 'Karan sing',
         email: 'karansingh1429@gmail.com',
         active: true,
         age: 25,
      });

      const results = await StoreUser.insertMany([userDoc, userDocOne]);
      console.log(results);
   } catch (err) {
      console.log(err);
   }
};

// userRef();

// set the query
const getDataDb = async () => {
   try {
      // find all documents
      // const results = await StoreUser.find();

      // find with query
      // const results = await StoreUser.find({ name: 'dheeraj sing' });

      // find with query advence options
      // const results = await StoreUser.find({ name: 'dheeraj sing' }, { _id: 0 });

      // update filds
      // const resules = await StoreUser.updateOne({ name: 'dheeraj sing' }, { $set: { name: 'dheeraj singh rawat' } });

      // const res = await StoreUser.find().select({ _id: 0, name: 1 }).limit(1);
      // console.log(res);

      // $gt
      // const results = await StoreUser.find({ age: { $gte: 20 } });

      // $in
      // const results = await StoreUser.find({ age: { $in: [20] } })

      // $or
      // const results = await StoreUser.find({ $or: [{ name: 'name: dheeraj sinn' }, { age: 20 }] });

      // $and
      const results = await StoreUser.find({ $and: [{ name: 'dheeraj sing' }, { age: 20 }] }).countDocuments();

      console.log(results);
   } catch (err) {
      console.log(err);
   }
};

getDataDb();
