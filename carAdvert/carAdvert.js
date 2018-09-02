const CarAdvert = require('./model/carAdvert');

module.exports = {
    getAll: sortField => {
        const sort = sortField ? { [sortField] : 1 } : { _id: 1 };

        return CarAdvert.find({}).sort(sort);
    },
    
    create: ({ title, fuel, price, isNew, mileage, firstRegistration }) => {
        const carAdvert = new CarAdvert({ 
            title,
            fuel,
            price,
            new: isNew,
            mileage,
            firstRegistration: firstRegistration ? new Date(firstRegistration): null
        })

        return carAdvert.save();
    },

    get: (id) => {
        return CarAdvert.findOne({ _id: id });
    },
        
    update: (id, { title, fuel, price, isNew, mileage, firstRegistration }) => {
        return CarAdvert.updateOne({ _id: id }, { 
            title,
            fuel,
            price,
            new: isNew,
            mileage,
            firstRegistration: firstRegistration ? new Date(firstRegistration): null
        });
    },

    remove: id => {
        return CarAdvert.deleteOne({ _id: id });
    }
}