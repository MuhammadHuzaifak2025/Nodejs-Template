import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statuscode?: number;
  status?: string;
}

const ServerErrorMiddleWare = (req: Request, res: Response, next: NextFunction): void => {
  const err: CustomError = new Error("Not Found on server");
  err.statuscode = 404;
  next(err);
};

const ErrorHandlerMiddleWare = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  error.statuscode = error.statuscode || 500;
  error.status = error.status || "error";
  res.status(error.statuscode).json({
    success: false,
    message: error.message,
    stack: error.stack,
  });
};

export { ErrorHandlerMiddleWare, ServerErrorMiddleWare };
