const mongoose = require('mongoose');

const dbConnect = async ({ username, password, dbName }) => {
  const uname = username;
  const pass = password;
  const db_name = dbName;

  const db = `mongodb+srv://${uname}:${pass}@ngadon.ktlvq.mongodb.net/${db_name}?retryWrites=true&w=majority`;
  try {
    const connect = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect Database Success');
    return connect;
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
