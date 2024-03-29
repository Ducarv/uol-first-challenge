# UOL First Challenge - VetClinic

## Description

A veterinary franchise hired Compass to build a new microservice for internal client and attendance management. This microservice will be used by all the clinics they own. This project aims to build the POC foundations of this new microservice, providing a technical view of the client's needs.

## Features

The microservice will provide a REST API with the following endpoints:

* `GET /tutors`: Retrieves all tutors.
* `POST /tutor`: Creates a new tutor.
* `PUT /tutor/:id`: Updates a tutor.
* `DELETE /tutor/:id`: Deletes a tutor.
* `POST /pet/:tutorId`: Creates a pet and adds it to a tutor.
* `PUT /pet/:petId/tutor/:tutorId`: Updates a pet's information.
* `DELETE /pet/:petId/tutor/:tutorId`: Deletes a pet from a tutor.

## Requirements

**Mandatory:**

All mandatory and all optional requirements have been met.

The mandatory requirements include readability, a private repository, small commits, TypeScript, Express, and a Readme.md with instructions on how to run locally. The optional requirements include Eslint, Prettier, testing, Swagger, and MongoDB.

### 👉 Node version used in the script:
```
16.20.2
```

### 👉 Yarn version used in the script:
```
1.22.19
```

## Cloning and Running the Project

1. Clone the repository into your local machine:

```bash
git clone https://github.com/Ducarv/uol-first-challenge.git 
```

2. Install the project dependencies:

```bash
cd uol-first-challenge
yarn install
```
3. This project use MongoDB with PrismaORM, before all:
```bash
prisma generate

prisma db push
```
4. Start the development server:

```bash
yarn start:dev
```
5. Open your browser and navigate to <http://localhost:3000> to access the API
   (obs: 3000 is default port.)

## Swagger Document

**Start the server:**
```bash
yarn start
```

Use the Endpoind below:
```bash
'/api/v1/api-docs'
```

## Testing

To run the project tests, use the following command:

```bash
yarn test
```

## Linting

To lint the project code, use the following command:

```bash
yarn lint
```
## Formatting

To format the project code, use the following command:

```bash
yarn format
```
