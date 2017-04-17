// By default, Mocha searches for tests with a “test” folder.
// That configuration can be changed with a mocha.opts file

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app.js');
const { knex } = require('db/database');
chai.use(chaiHttp);


describe('Shows routes', () => {

  // rollback, migrate latest, and seed before each test
  beforeEach(() => knex.migrate.rollback())
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run())

  describe('Get all the shows', () => {
    it('should get all the shows', () => {

      return chai.request(server)
      .get('/api/vi/shows')
      .then(results => results.should.have.status(200))

    });
  });

});
