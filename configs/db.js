import mongoose from 'mongoose';

const { connect } = mongoose;

const uri = process.env.MONGO_URL;

const connectDB = async () => {
  const db = await connect(uri);
  console.log(`Mongo DB are connected successful:${db.connection.name}`);
};

export default connectDB;
