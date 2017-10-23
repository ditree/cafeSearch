const httpStatus = require('http-status');
/**
 * @extends Error
 */
class ExtendableError extends Error {
    constructor(message, status, isPublic) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor.name);
    }
}

/**
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
    constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false){
        super(message, status, isPublic);
    }
}

module.exports = APIError;
