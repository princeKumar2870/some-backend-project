const AppError = require("../utils/AppError");

const errorHandler = (err,req,res,next)=>{
    let error = {...err};
    error.message = err.message;
    console.error('Error:',err);
   
    if(err.code === 11000){
        const fields = Object.keys(err.keyValue);
        const values = Object.values(err.keyValue);

        const message = fields.map((f,i)=>`${f} (${values[i]})`).join(", ");
        error = new AppError(`Duplicate field(s) ${message}. Please use different values.`,400)
    }

    if(err.name === "ValidationError"){
        const message = Object.keys(err.errors).map(key => err.errors[key].message).join(", ");
        error = new AppError(`Validation Error(s) ${message}`,400)
    }
    if(err.name === "CastError"){
        error = new AppError(`Resource not found`,404)
    }
    if(err.name === 'JsonWebTokenError'){
        error = new AppError('Invalid Token',401)
    }
    if(err.name === 'TokenExpiredError'){
        error = new AppError('Token Expired',401)
    }

   
}