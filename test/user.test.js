const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const knex = require('../core/knex');
const faker = require('faker');

const api = app.listen()

const expect = chai.expect;

chai.use(chaiHttp);

describe("/users/ Endpoint", function () {
    this.beforeAll(async () => {
        await knex.migrate.latest();
    });

    this.afterAll(async () => {
        await knex.migrate.rollback();
    });

    describe("GET /users", function () {
        it("should return a 200", async function () {
            const response = await chai
                .request(api)
                .get('/users');

            expect(response.status).to.equal(200);
        });
    });

    describe("POST /users", function () {
        it("should return a 200", async function () {
            const name = faker.name.findName()
            const email = faker.internet.email();

            const response = await chai
                .request(api)
                .post('/users')
                .send({ name, email });

            expect(response.status).to.equal(200);
            expect(response.body).to.contain.key('id');
            expect(response.body).to.contain({ name, email });
        });
    });
});