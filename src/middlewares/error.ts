import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction): void => {
  res.status(500).send({ err });
};

export default errorHandler;
