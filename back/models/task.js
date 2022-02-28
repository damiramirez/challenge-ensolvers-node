const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Task', TaskSchema);
