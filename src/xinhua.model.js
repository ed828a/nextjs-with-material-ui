const mongoose = require("mongoose");

const { Schema } = mongoose;

const xinhuaNewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    thumbnail_url: {
      type: String,
      trim: true,
    },
    article: {
      type: String,
      required: true,
    },
    source: {
      type: String,
    },
    pageTitle: {
      type: String,
    },
  },
  { collection: "xinhua" }
); // Set different collection name rather than the default

// console.log('Xinhua mongoose.models: ', mongoose.models)
module.exports =
  mongoose.models.Xinhua || mongoose.model("Xinhua", xinhuaNewsSchema);