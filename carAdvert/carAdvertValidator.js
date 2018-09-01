const validator = require('validator');

module.exports = {
    errorMessages: {
        title: 'Title is required. Please provide a title!',
        fuel: 'Fuel is required. Please choose either "diesel" or "gasoline"!',
        price: 'Price is required and cannot be lower than zero. Please provide a valid price!',
        condition: 'Car condition is required. Please provide a proper (true, false) car condition!',
        mileageUsedCars: 'Mileage is required for used cars. Please provide a mileage value!',
        mileageNewCars: 'Mileage should be either null or between 0 and 500 for new cars!',
        date: 'Date of registration is required. Please provide a valide first registration date!'
    },

    validate: function ({title, fuel, price, isNew, mileage, firstRegistration}) {
        return new Promise((resolve, reject) => {
            let errors = [];
            
            if (!title || validator.isEmpty(title)) {
                errors.push(this.errorMessages.title);
            }

            if (!fuel || !validator.isIn(fuel, ['diesel', 'gasoline'])) {
                errors.push(this.errorMessages.fuel);
            }

            if (!price || !validator.isInt(price.toString(), {min: 0})) {
                errors.push(this.errorMessages.price);
            }

            if (isNew === null) {
                errors.push(this.errorMessages.condition);
            }

            if (isNew === false && (!mileage || !validator.isInt(mileage.toString(), { min: 500 }))) {
                errors.push(this.errorMessages.mileageUsedCars);
            }

            if (isNew === true && (mileage && !validator.isInt(mileage.toString(), { min: 0, max: 500 }))) {
                errors.push(this.errorMessages.mileageNewCars);
            }

            if (isNew === true && firstRegistration) {
                errors.push(this.errorMessages.date);
            }

            if (isNew === false && (!firstRegistration || !validator.toDate(firstRegistration.toString()) || !(validator.isBefore(firstRegistration.toString(), new Date().toString()) && validator.isAfter(firstRegistration.toString(), "1986")))) {
                errors.push(this.errorMessages.date);
            }

            if (errors.length === 0) {
                return resolve(true);
            }

            reject(errors);
        });
    }
}