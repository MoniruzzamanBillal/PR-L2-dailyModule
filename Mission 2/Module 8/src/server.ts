import app from './app';
import mongoose from 'mongoose';
import Config from './app/Config';

async function main() {
  try {
    await mongoose.connect(Config.databse_url as string);
    app.listen(Config.port, () => {
      console.log(`listening from port ${Config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
