
const mockingoose = require('mockingoose').default;
const carAdvert = require('./carAdvert');
const validator = require('./carAdvertValidator');

describe('Test Car Advert Persistency Layer', () => {
    it('should fail fetching cars adverts with invalid search field', () => {
        carAdvert.getAll('invalid_search_field').catch(err => {
            expect(err.message).toBe(validator.errorMessages.invalidSortField);
        });
    });

    it('should fetch all car adverts', () => {
        const _doc = [{ _id: '5b8ba624f31c3bbf1fc667d4', title: 'Audi A8' }, { _id: '5b8ba624f31c3bbf1fc667d5', title: 'BMW 3er' }];
        
        mockingoose.CarAdvert.toReturn(_doc, 'find');

        carAdvert.getAll().then(doc => 
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
        );
    });

    it('should fail creating car advert with invalid data', () => {
        carAdvert.create({}).catch(err => {
            expect(err.messages)
                .toContain(validator.errorMessages.title)
                .toContain(validator.errorMessages.price)
                .toContain(validator.errorMessages.fuel)
                .toContain(validator.errorMessages.isNew);
        });
    });

    it('should create new car advert', () => {
        const data = {
            title: 'Audi A8',
            fuel: 'gasoline',
            price: 120000,
            isNew: true
        }

        const _doc = Object.assign({ _id:  '5b8ba9c2a38772c27fa19b3f' }, data);

        mockingoose.CarAdvert.toReturn(_doc, 'save');

        carAdvert.create(data).then(doc => {
            delete _doc.isNew;
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });

    it('should fail fetching a car advert with invalid id', () => {
        carAdvert.get('invalid_id').catch(err => {
            expect(err.message).toBe(validator.errorMessages.invalidId);
        });
    });

    it('should fetch a car advert by id', () => {
        const _doc = { _id: '5b8ba624f31c3bbf1fc667d4', title: 'Audi A8' };
        
        mockingoose.CarAdvert.toReturn(_doc, 'findOne');

        carAdvert.get('5b8ba624f31c3bbf1fc667d4').then(doc => 
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
        );
    });

    it('should fail updating car advert with invalid id', () => {
        carAdvert.update('invalid_id', {}).catch(err => 
            expect(err.message).toBe(validator.errorMessages.invalidId)
        );
    });

    it('should fail updating car advert with invalid data', () => {
        carAdvert.update('5b8ba624f31c3bbf1fc667d4', {}).catch(err => {
            expect(err.messages)
                .toContain(validator.errorMessages.title)
                .toContain(validator.errorMessages.price)
                .toContain(validator.errorMessages.fuel)
                .toContain(validator.errorMessages.isNew);
        });
    });

    it('should update a car advert', () => {
        const _doc = { _id: '5b8ba624f31c3bbf1fc667d4', title: 'Audi A8' };
        
        mockingoose.CarAdvert.toReturn(_doc, 'updateOne');

        carAdvert.update('5b8ba624f31c3bbf1fc667d4', { title: 'does not matter', fuel: 'diesel', price: 10000 }).then(doc => 
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
        );
    });

    it('should fail deleting car advert with invalid id', () => {
        carAdvert.remove('invalid_id').catch(err => 
            expect(err.message).toBe(validator.errorMessages.invalidId)
        );
    });

    it('should delete a car advert', () => {
        const _doc = { _id: '5b8ba624f31c3bbf1fc667d4', title: 'Audi A8' };
        
        mockingoose.CarAdvert.toReturn(_doc, 'deleteOne');

        carAdvert.remove('5b8ba624f31c3bbf1fc667d4').then(doc => 
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
        );
    });
});