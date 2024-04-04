import mongoose from "mongoose"

const mageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    require: true,
  },
})

export const User = new mongoose.model("User", mageSchema)
