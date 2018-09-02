const carAdvert = require('./carAdvert');
const carAdvertValidator = require('./carAdvertValidator');
const errorHandler = require('./errorHandler');

module.exports = {
    getAll: (req, res) => {
        const { sortBy } = req.query;
        
        carAdvert.getAll(sortBy)
            .then(response => res.status(200).json(response))
            .catch(e => res.status(400).json(errorHandler(e)));
    },
    
    create: (req, res) => {
        carAdvert.create(req.body)
            .then(() => res.status(200).json(req.body))
            .catch(e => res.status(400).json(errorHandler(e)));
    },

    get: (req, res) => {
        carAdvert.get(req.params.id)
            .then(entry => res.status(200).json(entry))
            .catch(e => res.status(400).json(errorHandler(e)));
    },
        
    update: (req, res) => {
        carAdvert.update(req.params.id, req.body)
            .then(entry => res.status(200).json(req.body))
            .catch(e => res.status(400).json(errorHandler(e)));
    },

    remove: (req, res) => {
        carAdvert.remove(req.params.id)
            .then(() => res.status(200).json({ id: req.params.id }))
            .catch(e => res.status(400).json(errorHandler(e)));
    }
};