import app from '../app';
import connectDB from '../configs/db';

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

process.on('unhandledRejection', err => {
  if (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
});
