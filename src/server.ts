import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

const mainServer = async () => {
  try {
    await mongoose.connect(config.connection_string as string);
    console.log('Mongoose Connected!');
    app.listen(config.port, () => {
      console.log('Server listening on port ', config.port);
    });
  } catch (err) {
    console.log(err);
  }
};

mainServer();
