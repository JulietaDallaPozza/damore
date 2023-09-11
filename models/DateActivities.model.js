const { Schema, model } = require("mongoose");

const dateActivitySchema = new Schema(
  {
    x: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    y: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    z: {
      type: String,
      required: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const DateActivites = model("DateActivites", dateActivitySchema);

module.exports = DateActivites;
