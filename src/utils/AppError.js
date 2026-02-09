class AppError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        if(Math.floor(statusCode/100) === 5){
            this.status = "fail"
        }else if(Math.floor(statusCode/100 )=== 4){
            this.status = "error"
        }
        this.isOperational = true;

        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = AppError;