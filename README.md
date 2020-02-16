# ZTM - Challenge and Accountability App

Challenge/accountabilty application where users can sign up to the platform and
join or create a challenge and follow it to the end, or pay a penalty! Refer to
the [SPAR!](https://getspar.com/) app on mobile to get a better idea. Made
during the
[ZTM Frosty February](https://github.com/zero-to-mastery/frosty-february-hackathon)
hackathon event.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See
[Deployment](#deployment) for notes on how to deploy the project on a live
system.

### Installing

Install the latest stable versions of:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

We are using Yarn as our package manager.

Install all dependencies:

```
yarn all:install
```

### Setup the database

Install latest PostgreSQL.

Create a database and a user, for example:

```sql
create database challenge;
create user ztm with encrypted password 'mypass';
grant all privileges on database challenge to ztm;
```

Create a `.env` file in the `server` directory and add the appropriate values, for example:

```
DB_USER=ztm
DB_PASS=mypass
DB_NAME=challenge
DB_HOST=localhost
```

Run the migrations:

```sh
yarn --cwd server run cross-env NODE_ENV=dev sequelize-cli db:migrate
```

### Running

```
yarn all:dev // In development mode
yarn all:prod // In production mode
```

### Running the Tests

```
yarn all:test
```

## Built With

- [React](https://reactjs.org/) - Front-end JavaScript library
- [Node.js](https://nodejs.org/) - Back-end JavaScript runtime
- [Yarn](https://yarnpkg.com/) - Package manager
- [Express](http://expressjs.com/) - Back-end framework
- [PostgreSQL](http://postgresql.org/) - Database

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process of
submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the
[tags on this repository](https://github.com/Dan-Y-Ko/zerotomastery-challenge-app/tags).
