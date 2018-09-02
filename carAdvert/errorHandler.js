module.exports = error => {
    if (error.name === 'CarAdvertValidationError') {
        return { CAR_ADVERT_VALIDATION_ERROR: error.message || error.messages };
    }

    if (error.name === 'ValidationError') {
        return { DB_VALIDATION_ERROR : error.message };
    }

    if (error.name === 'MongoError') {
        return { DB_ERROR : error.message };
    }
     
    return { UNKNOWN_ERROR : error };
}