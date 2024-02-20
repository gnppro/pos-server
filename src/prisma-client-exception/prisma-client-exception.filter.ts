import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { FastifyReply } from 'fastify';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      // "The provided value for the column is too long for the column's type. Column: {column_name}"
      case 'P2000': {
        const statusCode = HttpStatus.BAD_REQUEST;
        response.status(statusCode).send({
          statusCode,
          message,
        });
        break;
      }
      // "Unique constraint failed on the {constraint}"
      case 'P2002': {
        const statusCode = HttpStatus.CONFLICT;
        response.status(statusCode).send({
          statusCode,
          message,
        });
        break;
      }
      // "An operation failed because it depends on one or more records that were required but not found. {cause}"
      case 'P2025': {
        const statusCode = HttpStatus.NOT_FOUND;
        response.status(statusCode).send({
          statusCode,
          message,
        });
        break;
      }
      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}
