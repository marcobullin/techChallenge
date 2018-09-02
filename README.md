# Tech Challenge App

## What is it about?

This app offers an API to create, read, update and delete car adverts.

## Endpoints

```
    // get all car adverts
    (GET) /carAdverts

    // get single car advert
    (GET) /carAdverts/:id

    // create car advert
    (POST) /carAdverts

    // update car advert
    (PUT) /carAdverts/:id

    // delete car advert
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