// By default, Mocha searches for tests with a “test” folder.
// That configuration can be changed with a mocha.opts file

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app.js');
const { knex } = require('../db/database');
chai.use(chaiHttp);


describe('Shows routes', () => {

  // rollback, migrate latest, and seed before each test
  beforeEach(() => (
    knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run())
  ));

  describe('Get all the shows', () => {
    it('should get all the shows', () => {

      return chai.request(server)
      .get('/api/v1/shows')
      .then(results => {
        results.should.have.status(200);
        results.should.be.json;
        results.body.should.be.a('array');
        results.body[0].should.have.property('name');
        results.body[0].name.should.equal('Mr. Robot');
      })

    });
  });


  describe('GET /api/v1/shows/:id', () => {
    it('should return a single show', () => {
      return chai.request(server)
      .get('/api/v1/shows/1')
      .then((results) => {
        results.should.have.status(200);
        results.should.be.json;
        results.body.should.be.a('object');
        results.body.should.have.property('name');
        results.body.name.should.equal('Mr. Robot');
      })
    });
  });

});
