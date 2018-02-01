import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as errorHandler from 'errorhandler';
import * as methodOverride from 'method-override';
import { Mongoose, Connection } from 'mongoose';
import { IndexRoute } from './routes/route.index';

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;
  public mongoose: Mongoose;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    // create expressjs application
    this.app = express();
    this.mongoose = new Mongoose();

    // configure application
    this.config();

    // add routes
    this.routes();
  }

  public routes() {
    this.app.use('/api', new IndexRoute().getRoutes());
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    const MONGODB_CONNECTION = 'mongodb://localhost:27017/credentials';

    // add static paths
    this.app.use(express.static(path.join(__dirname, 'public')));

    // mount logger
    this.app.use(logger('dev'));

    // mount json form parser
    this.app.use(bodyParser.json());

    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // mount cookie parker
    this.app.use(cookieParser('SECRET_GOES_HERE'));

    // mount override
    this.app.use(methodOverride());

    // use q promises
    global.Promise = require('q').Promise;
    this.mongoose.Promise = global.Promise;

    // connect to mongoose
    const connection: Connection = this.mongoose.createConnection(MONGODB_CONNECTION);

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    // error handling
    this.app.use(errorHandler());
  }
}
