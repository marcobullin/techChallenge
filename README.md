# Tech Challenge App

## What is it about?

This app offers an API to create, read, update and delete car adverts.

## Endpoints

```
    // get all car adverts as array of objects
    (GET) /carAdverts?sortBy={title, fuel, price, new, mileage, firstRegistration}

    // get single car advert as object
    (GET) /carAdverts/:id

    // create car advert and returns the created car advert as object
    (POST) /carAdverts

    // update car advert and returns the updated car advert as object
    (PUT) /carAdverts/:id

    // delete car advert and returns the id of the deleted car advert as object
    (DELETE) /carAdverts/:id
```

## Requirements

mongodb on default port (27017)

## Installation

```
    yarn install
```

or

```
    npm install
```

## How to start?

```
    npm start
```

or

```
    npm run start:docker
```

## How to test?

```
    npm test
```