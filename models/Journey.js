const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let Journey = new Schema({
  journeyName: {
    type: String,
    required: true,
    trim: true
  },
  journeySummary: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completeBy: {
    type: Date,
    default: Date.now,
    required: true
  },
  // [tasks]: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Task"
  //   }
  // ],
  tasks: [{
    type: String,
    trim: true
  }],
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ]

});


module.exports = mongoose.model('Journey', Journey);