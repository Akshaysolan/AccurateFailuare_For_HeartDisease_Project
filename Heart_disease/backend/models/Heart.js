// models/HeartFailureData.js

const mongoose = require('mongoose');

const heartFailureDataSchema = new mongoose.Schema({
  age: Number,
  anaemia: Number,
  creatinine_phosphokinase: Number,
  diabetes: Number,
  ejection_fraction: Number,
  high_blood_pressure: Number,
  platelets: Number,
  serum_creatinine: Number,
  serum_sodium: Number,
});

const HeartFailureData = mongoose.model('HeartFailureData', heartFailureDataSchema);

module.exports = HeartFailureData;
