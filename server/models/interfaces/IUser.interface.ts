import { Document } from 'mongoose';

export interface IUserModel extends Document {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  gender?: string;
  password?: string;
  created?: Date;
  modified?: Date;
  roles: Array<string>;
}
