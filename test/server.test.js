const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Server API', () => {
    it('should fetch all products', (done) => {
        chai.request(app)
            .get('/products')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should fetch a product by ID', (done) => {
        chai.request(app)
            .get('/products/INSERT_PRODUCT_ID_HERE') // Replace INSERT_PRODUCT_ID_HERE with an actual product ID from your database
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it('should add a new product', (done) => {
        const newProduct = {
            // Add the details of the product you want to add here
            // Example: name: 'Product Name', price: 10, etc.
            
        };

        chai.request(app)
            .post('/products')
            .send(newProduct)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it('should update a product', (done) => {
        const updatedProduct = {
            // Add the updated details of the product here
            // Example: name: 'Updated Product Name', price: 20, etc.
        };

        chai.request(app)
            .put('/products/INSERT_PRODUCT_ID_HERE') // Replace INSERT_PRODUCT_ID_HERE with an actual product ID from your database
            .send(updatedProduct)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it('should delete a product', (done) => {
        chai.request(app)
            .delete('/products/INSERT_PRODUCT_ID_HERE') // Replace INSERT_PRODUCT_ID_HERE with an actual product ID from your database
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});
