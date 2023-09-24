import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (status === HttpStatus.NOT_FOUND) {
      message = 'Resource not found';
    } else if (status === HttpStatus.BAD_REQUEST) {
      message = 'Bad request';
    }
    response.status(status).json({
      message,
      error: exception.message || message,
    });
  }
}
