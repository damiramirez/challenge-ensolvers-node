const { Schema, model } = require('mongoose');

const FolderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

module.exports = model('Folder', FolderSchema);
