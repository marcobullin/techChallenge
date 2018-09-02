# Tech Challenge App

## What is it about?

This app offers an API to create, read, update and delete car adverts.

## Requirements

mongodb installed locally on default port (27017)
[Install MongoDB](https://docs.mongodb.com/manual/installation/)

or with docker

```
docker container run -d --rm -p 27017:27017 mongo
```


## Install Application

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

## Sample data you can use to create entries

```
// payload
{
    "title": "Audi A8",
    "fuel": "diesel",
    "price": 120000,
    "isNew": true
}

// payload
{
    "title": "Citroen Berlingo 3",
    "fuel": "diesel",
    "price": 4800,
    "isNew": false,
    "mileage": 156000,
    "firstRegistration": "2005-08-10"
}
```

## How to test?

```
    npm test
```