// import mongoose from "mongoose";

// export const  connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://acestriver01:Anurag2002@cluster0.fv2dw0r.mongodb.net/food-del').then(()=>console.log("DB Connected"))
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://acestriver01:Anurag2002@cluster0.fv2dw0r.mongodb.net/food-del', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.