const CarAdvert = require('./model/carAdvert');
const carAdvertValidator = require('./carAdvertValidator');

module.exports = {
    getAll: sortField => {
        return carAdvertValidator.validateSortParam(sortField)
            .then(() => {
                const sort = sortField ? { [sortField] : 1 } : { _id: 1 };
                return CarAdvert.find({}).sort(sort);
            });
    },
    
    create: ({ title, fuel, price, isNew, mileage, firstRegistration }) => {
        return carAdvertValidator.validate({ title, fuel, price, isNew, mileage, firstRegistration })
            .then(() => {
                const carAdvert = new CarAdvert({
                    title,
                    fuel,
                    price,
                    new: isNew,
                    mileage,
                    firstRegistration: firstRegistration ? new Date(firstRegistration): null
                })

                return carAdvert.save();
            });
    },

    get: id => {
        return carAdvertValidator.validateId(id)
            .then(() => CarAdvert.findOne({ _id: id }));
    },
        
    update: (id, { title, fuel, price, isNew, mileage, firstRegistration }) => {
        return carAdvertValidator.validateId(id)
            .then(() => carAdvertValidator.validate({ title, fuel, price, isNew, mileage, firstRegistration }))
            .then(() => CarAdvert.updateOne({ _id: id }, {
                title, fuel, price, new: isNew, mileage,
                firstRegistration: firstRegistration ? new Date(firstRegistration): null
            }));
    },

    remove: id => {
        return carAdvertValidator.validateId(id)
            .then(() => CarAdvert.deleteOne({ _id: id }));
    }
}