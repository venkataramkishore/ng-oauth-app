import * as express from 'express';
import { Router } from 'express';
import { UserController } from '../controllers/User.controller';

export class UserRoute {
  private router: Router;
  private userCtrl: UserController;

  constructor() {
      this.router = express.Router();
      this.userCtrl = new UserController();
      this.initialiseUserRoutes();
  }

  initialiseUserRoutes() {
      this.router.get('/', this.userCtrl.fetchAllUsers);
      this.router.get('/:id', this.userCtrl.fetchById);
      this.router.post('/', this.userCtrl.createUser);
      this.router.put('/:id', this.userCtrl.updateById);
      this.router.delete('/:id', this.userCtrl.deleteById);
  }
  getUserRoutes() {
      return this.router;
  }
}
