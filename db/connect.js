import mongoose from 'mongoose';

// suppress deprecation warning
mongoose.set('strictQuery', true);

const connectDB = (url) => {
    return mongoose.connect(url)
}
export default connectDB