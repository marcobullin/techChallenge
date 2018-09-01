const CarAdvert = require('./model/carAdvert');

module.exports = {
    getAll: (req, res) => {
        res.send('GET ALL CAR ADVERTS');
    },
    
    create: (req, res) => {
        res.send('CREATE CAR ADVERT');
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