const CarAdvert = require('./model/carAdvert');


module.exports = {
    getAll: (req, res) => {
        res.send('GET ALL CAR ADVERTS');
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

    get: (req, res) => {
        res.send('GET CAR ADVERT FOR ID');
    },
        
    update: (req, res) => {
        res.send('UPDATE CAR ADVERT FOR ID');
    },

    remove: (req, res) => {
        res.send('REMOVE CAR ADVERT FOR ID');
    }
}