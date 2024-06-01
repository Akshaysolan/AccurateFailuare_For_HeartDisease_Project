const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true
  },
  anaemia: {
    type: Number,
    required: true
  },
  creatinine_phosphokinase: {
    type: Number,
    required: true
  },
  diabetes: {
    type: Number,
    required: true
  },
  ejection_fraction: {
    type: Number,
    required: true
  },
  high_blood_pressure: {
    type: Number,
    required: true
  },
  platelets: {
    type: Number,
    required: true
  },
  serum_creatinine: {
    type: Number,
    required: true
  },
  serum_sodium: {
    type: Number,
    required: true
  },
  sex: {
    type: Number,
    required: true
  },
  exercise: {
    type: Number,
    required: true
  },
  smoking: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  FastingBs: {
    type: Number,
    required: true
  },
  cholesterol: {
    type: Number,
    required: true
  },
  MaxHR: {
    type: Number,
    required: true
  },
  ChestPain: {
    type: String,
    required: true
  },
  deathEvent: {
    type: Number,
    required: true
  }
});

const form = mongoose.model('form', formSchema);

module.exports = form;
