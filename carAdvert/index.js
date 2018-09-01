const carAdvert = require('./carAdvert');
const carAdvertValidator = require('./carAdvertValidator');

module.exports = {
    getAll: (req, res) => {
        const { sortBy } = req.query;
        
        carAdvertValidator.validateSortParam(sortBy)
            .then(() => carAdvert.getAll(sortBy)
                .then(response => res.status(200).json(response))
                .catch(e => res.status(400).json({'DB_ERROR': e.message}))
            )
            .catch(e => res.status(400).json({'VALIDATION_ERRROR': e}));
    },
    
    create: (req, res) => {
        carAdvertValidator.validate(req.body)
            .then(() => carAdvert.create(req.body)
                .then(() => res.status(200).json(req.body))
                .catch(e => res.status(400).json({'DB_ERROR': e.message}))
            )
            .catch(e => res.status(400).json({'VALIDATION_ERRRORS': e}));
    },

    get: carAdvert.get,
        
    update: carAdvert.update,

    remove: carAdvert.remove
};