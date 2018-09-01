module.exports = app => {
    const carAdvert = require('./carAdvert');

    app.route('/carAdverts')
        .get(carAdvert.getAll)
        .post(carAdvert.create);

    app.route('/carAdverts/:id')
        .get(carAdvert.get)
        .put(carAdvert.update)
        .delete(carAdvert.update);
}