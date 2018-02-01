import { Schema } from 'mongoose';

export class UserSchema {
  private schema: Schema;

  constructor() {
    this.schema = new Schema();
    this.setFields();
    this.setBeforeSaveEvents();
  }
  getSchema() {
    return this.schema;
  }
  setFields() {
    this.schema.add({
      userName: {
        type: String,
        required: 'username is required ..!',
        maxlength: 50,
        unique: true
      }
    });
    this.schema.add({
      firstName: {
        type: String,
        required: 'first name is required ..!',
        maxlength: 40
      }
    });
    this.schema.add({
      lastName: {
        type: String,
        required: 'last name is required ..!',
        maxlength: 40
      }
    });
    this.schema.add({
      email: {
        type: String,
        required: 'email is required ..!',
        maxlength: 80,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      }
    });
    this.schema.add({
      password: {
        type: String,
        required: 'password is required ..!',
        maxlength: 80,
        match: [/^[\w]$/, 'Only alphanumeric are allowed']
      }
    });
    this.schema.add({
      gender: {
        type: String,
        required: 'gender is required ..!',
        maxlength: 5
      }
    });
    this.schema.add({
      roles: {
        type: Array,
        required: 'roles are required ..!',
        default: ['user']
      }
    });
    this.schema.add({
      created: {
        type: Date,
        required: 'email is required ..!',
        maxlength: 80
      }
    });
    this.schema.add({
      modified: {
        type: Date,
        required: 'email is required ..!',
        maxlength: 80
      }
    });
  }
  setBeforeSaveEvents() {
    this.schema.pre('save', (next) => {
      if (!this.schema.obj.created) {
        this.schema.obj.created = new Date();
      }
      next();
    });
    this.schema.pre('update', (next) => {
      this.schema.obj.modified = new Date();
      next();
    });
  }
}
