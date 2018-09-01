module.exports = app => {
    const carAdvert = require('./carAdvert');

    app.route('/carAdverts')
        .get(carAdvert.getAll)
        .put(carAdvert.create);

    app.route('/carAdverts/:id')
        .get(carAdvert.get)
        .post(carAdvert.update)
        .delete(carAdvert.update);
}