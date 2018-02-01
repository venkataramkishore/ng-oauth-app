import { UserModel } from '../models/user.model';
import { ResponseHelper } from '../helpers/Response.helper';

export class UserController {
  static FAILURE_FETCH_USERS = 'No users are available';
  static FAILURE_FETCH_USER = 'No such user available';
  static FAILURE_UPDATE_USER = 'Unable to update user';
  static FAILURE_DELETE_USER = 'Unable to delete user';
  static FAILURE_CREATE_USER = 'Unable to create user';

  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  fetchAllUsers(req, res) {
    let userList = null;
    try {
      userList = this.userModel.fetchAll();
      (userList && userList.length >= 0) ?
        ResponseHelper.successResponse(res, userList) :
        ResponseHelper.failureResponse(res, UserController.FAILURE_FETCH_USERS);
    } catch (error) {
      ResponseHelper.errorResponse(res, error);
    }
  }
  fetchById(req, res) {
    let user = null;
    try {
      user = this.userModel.fetchById(req.params.id);
      user ?
        ResponseHelper.successResponse(res, user) :
        ResponseHelper.failureResponse(res, UserController.FAILURE_FETCH_USER);
    } catch (error) {
      ResponseHelper.errorResponse(res, error);
    }
  }
  updateById(req, res) {
    let user = null;
    try {
      user = this.userModel.updateById(req.body);
      user ?
        ResponseHelper.successResponse(res, user) :
        ResponseHelper.failureResponse(res, UserController.FAILURE_UPDATE_USER);
    } catch (error) {
      ResponseHelper.errorResponse(res, error);
    }
  }
  deleteById(req, res) {
    let user = null;
    try {
      user = this.userModel.removeById(req.params.id);
      user ?
        ResponseHelper.successResponse(res, user) :
        ResponseHelper.failureResponse(res, UserController.FAILURE_UPDATE_USER);
    } catch (error) {
      ResponseHelper.errorResponse(res, error);
    }
  }
  createUser(req, res) {
    let user = null;
    try {
      user = this.userModel.createUser(req.body);
      user ?
        ResponseHelper.successResponse(res, user) :
        ResponseHelper.failureResponse(res, UserController.FAILURE_CREATE_USER);
    } catch (error) {
      ResponseHelper.errorResponse(res, error);
    }
  }
}
