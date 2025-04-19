class ApiResponse<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
    token?: string | null;
  
    constructor(
      statusCode: number,
      data: T,
      message: string = "Success",
      token: string | null = null
    ) {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400;
      if (token) this.token = token;
    }
  }
  
  export default ApiResponse;
  