import { Request, Response, NextFunction, RequestHandler } from "express";

// A wrapper for async route handlers to catch errors and pass them to next()
const asyncHandler = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export default asyncHandler;
