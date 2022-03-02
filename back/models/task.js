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
  folder: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  },
});

module.exports = model('Task', TaskSchema);
