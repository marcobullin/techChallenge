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

    get: (req, res) => {
        carAdvertValidator.validateId(req.params.id)
            .then(() => carAdvert.get(req.params.id)
                .then(entry => res.status(200).json(entry))
                .catch(e => res.status(400).json({'DB_ERROR': e.message}))
            )
            .catch(e => res.status(400).json({'VALIDATION_ERRRORS': e}));
    },
        
    update: (req, res) => {
        carAdvertValidator.validateId(req.params.id)
            .then(carAdvertValidator.validate(req.body))
            .then(() => carAdvert.update(req.params.id, req.body)
                .then(entry => res.status(200).json(req.body))
                .catch(e => res.status(400).json({'DB_ERROR': e.message}))
            )
            .catch(e => res.status(400).json({'VALIDATION_ERRRORS': e}));
    },

    remove: (req, res) => {
        carAdvertValidator.validateId(req.params.id)
            .then(() => carAdvert.remove(req.params.id)
                .then(() => res.status(200).json({ id: req.params.id }))
                .catch(e => res.status(400).json({'DB_ERROR': e.message}))
            )
            .catch(e => res.status(400).json({'VALIDATION_ERRRORS': e}));
    }
};