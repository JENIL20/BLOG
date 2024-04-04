import mongoose from "mongoose";
async function dbcon() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("ma bhai connect thai gayu")

  } catch (error) {
    console.log(error)
  }
}
export default dbcon