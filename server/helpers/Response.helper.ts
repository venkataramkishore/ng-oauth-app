import { Response } from 'express';
import { Error } from 'mongoose';

export class ResponseHelper {

  static successResponse(res: Response, data: any) {
      res.status(200).json({
          title: '',
          message: ``,
          type: 'success',
          data: data
      });
  }

  static failureResponse(res: Response, message: string) {
      res.status(200).json({
          title: '',
          message: message,
          type: 'warning',
      });
  }

  static errorResponse(res: Response, err: Error) {
      res.status(200).json({
          title: err.name,
          message: err.message,
          type: 'danger'
      });
  }
}
