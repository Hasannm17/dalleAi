import mongoose from 'mongoose';
const connectDB=(url)=>
{

mongoose.set('strictQuery' ,true);
mongoose.connect(url).then(()=> console.log('MongoDB connected '))
.catch((err) =>console.log(`there is an error  ${err}`));


}
export default connectDB;