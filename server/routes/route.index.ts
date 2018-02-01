import * as express from 'express';
import { Router } from 'express';
import { UserRoute } from './user.route';

export class IndexRoute {
  private router: Router;
  private userRoutes: UserRoute;

  constructor() {
      this.router = express.Router();
      this.userRoutes = new UserRoute();
      this.configRoutes();
  }
  configRoutes() {
      this.router.get('/', (req, res) => {
          res.send('api works');
      });
      this.router.get('/hello', (req, res) => {
          res.send('Welcome kishore .!');
      });
      this.router.get('/users', this.userRoutes.getUserRoutes());
  }
  getRoutes() {
      return this.router;
  }
}
