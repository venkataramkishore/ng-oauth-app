import { Mongoose, Model } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { IUserModel } from './interfaces/IUser.interface';


export class UserModel {
  private userSchema: UserSchema;
  private mongoose: Mongoose;
  private userModel: Model<IUserModel>;

  constructor() {
      this.userSchema = new UserSchema();
      this.mongoose = new Mongoose();
      this.createUserModel();
      this.createDefaultUsers();
  }
  
  createUserModel() {
      this.userModel = this.mongoose.model<IUserModel>('User', this.userSchema.getSchema());
  }

  getUserModel() {
      return this.userModel;
  }

  fetchAll() {
      let users = null;
      this.userModel.model('User').find({}, (err, list) => {
          if (err) {
              throw err;
          }
          users = list;
      }).catch((err) => {
          throw err;
      });
      return users;
  }

  fetchById(id) {
      let user = null;
      this.userModel.model('User').findById({ _id: id }, (err, one) => {
          if (err) {
              throw err;
          }
          user = one;
      }).catch((err) => {
          throw err;
      });
      return user;
  }

  removeById(id) {
      let user = null;
      this.userModel.model('User').findByIdAndRemove({ _id: id }, (err, deletedUser) => {
          if (err) {
              throw err;
          }
          user = deletedUser;
      }).catch((err) => {
          throw err;
      });
      return user;
  }

  updateById(updateUser) {
      let user = null;
      this.userModel.model('User').findByIdAndUpdate(updateUser, (err, finalUser) => {
          if (err) {
              throw err;
          }
          user = finalUser;
      }).catch((err) => {
          throw err;
      });
      return user;
  }

  createUser(newUser) {
      let user = null;
      this.userModel.model('User').create(newUser, (err, createdUser) => {
          if (err) {
              throw err;
          }
          user = createdUser;
      }).catch((err) => {
          throw err;
      });
      return user;
  }

  createDefaultUsers() {
      this.userModel.find({}, (err, users) => {
          if (err) {
              throw err;
          }
          if (!users || users.length === 0) {
              this.userModel.create({
                  firstName: 'Ram', lastName: 'Kishore', userName: 'ram', password: 'pasword', roles: ['Admin'],
                  gender: 'Male',
                  email: 'mail1@mail.com'
              });
              this.userModel.create({
                  firstName: 'Anil', lastName: 'Kumar', userName: 'anil', password: 'anil', roles: ['user'],
                  gender: 'Male',
                  email: 'mail2@mail.com'
              });
              this.userModel.create({
                  firstName: 'Shyam', lastName: 'Setty', userName: 'shyam', password: 'shyam', roles: ['user'],
                  gender: 'Male',
                  email: 'mail3@mail.com'
              });
          }
      });
  }
}
