const carAdvertValidator = require('./carAdvertValidator');

const validData = {
    title: 'Audi A4',
    fuel: 'diesel',
    price: 80000,
    isNew: true,
    mileage: 500
};

describe('Title Validation', () => {
    it('fails validation for missing title', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        delete data.title;

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.title)
        );
    });

    it('succeeds validation for correct title', () => {
        expect.assertions(1);
        carAdvertValidator.validate(validData).then(success => {
            expect(success).toBe(true)
        });
    });
});

describe('Fuel Validation', () => {
    it('fails validation for missing fuel', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        delete data.fuel;

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.fuel)
        );
    });

    it('fails validation for wrong fuel', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.fuel = 'rapsoel';

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.fuel)
        );
    });

    it('succeeds validation for diesel fuel', () => {
        expect.assertions(1);
        
        carAdvertValidator.validate(validData).then(success => {
            expect(success).toBe(true)
        });
    });

    it('succeeds validation for gasoline fuel', () => {
        expect.assertions(1);
        
        const data = Object.assign({}, validData);
        data.fuel = 'gasoline';

        carAdvertValidator.validate(validData).then(success => {
            expect(success).toBe(true)
        });
    });
});

describe('Mileage Validation', () => {
    it('fails validation for missing mileage for used cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;
        delete data.mileage;

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.mileageUsedCars)
        );
    });

    it('fails validation for mileage below 500 for used cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;
        data.mileage = 200;

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.mileageUsedCars)
        );
    });

    it('fails validation for mileage over 500 for new cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.mileage = 501;

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.mileageNewCars)
        );
    });

    it('succeeds validation for missing mileage for new cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        delete data.mileage;

        carAdvertValidator.validate(data).then(success => 
            expect(success).toBe(true)
        );
    });

    it('succeeds validation for mileage between 0 and 500 for new cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.mileage = 450;

        carAdvertValidator.validate(data).then(success => 
            expect(success).toBe(true)
        );
    });
});

describe('First Registration Validation', () => {
    it('fails validation for missing first registration date for used cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;
        delete data.firstRegistration;

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.date)
        );
    });

    it('fails validation for future first registration date for used cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;

        const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
        data.firstRegistration = futureDate.toString();

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.date)
        );
    });

    it(':) fails validation for registration date before first car was invented', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;
        data.firstRegistration = "1885-10-10";

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.date)
        );
    });

    it('fails validation for invalid registration date for used cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;
        data.firstRegistration = "XXX";

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.date)
        );
    });

    it('fails validation for new cars with first registration date', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.firstRegistration = "2005-08-22";

        carAdvertValidator.validate(data).catch(e => 
            expect(e).toContain(carAdvertValidator.errorMessages.date)
        );
    });

    it('succeeds validation for valid first registration date for used cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        data.isNew = false;
        data.firstRegistration = "2005-08-22";

        carAdvertValidator.validate(data).then(success => 
            expect(success).toBe(true)
        );
    });

    it('succeeds validation for missing first registration date for new cars', () => {
        expect.assertions(1);

        const data = Object.assign({}, validData);
        delete data.firstRegistration;

        carAdvertValidator.validate(data).then(success => 
            expect(success).toBe(true)
        );
    });
});

describe('Validation For Sorting Parameter', () => {
    it('fails for invalid sorting field', () => {
        expect.assertions(1);
        
        carAdvertValidator.validateSortParam('I_AM_INVALID').catch(e => 
            expect(e).toBe(carAdvertValidator.errorMessages.invalidSortField)
        );
    });

    it('succeeds validation for valid sorting field', () => {
        expect.assertions(1);
        
        carAdvertValidator.validateSortParam('title').then(success => 
            expect(success).toBe(true)
        );
    });
});
