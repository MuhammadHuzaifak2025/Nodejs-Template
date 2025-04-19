class ApiError extends Error {
    statuscode: number;
    data: any;
    success: boolean;
    errors: any[];
  
    constructor(
      statuscode: number,
      message: string = "Something Went Wrong",
      error: any[] = [],
      stack: string = ""
    ) {
      super(message);
      this.statuscode = statuscode;
      this.data = null;
      this.success = false;
      this.errors = error;
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError;
  