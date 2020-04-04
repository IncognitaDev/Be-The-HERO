const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG',  () => {
    beforeAll( async() =>{
       await connection.migrate.latest();
    })

    afterAll( async () => {
        await connection.migrate.rollback()
        await connection.destroy();
    })

    var ongId = 0
    var incidentId = 0

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "ONG Test",
	        email: "contato@ongtest.com",
	        whatsapp: "1111111111",
	        city: "São Paulo",
	        uf: "SP"

        })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
        ongId = response.body.id;
    })

    it('should be able to create to create a new Incident', async () =>{
        const response = await request(app).post('/incidents').set('Authorization', ongId).send({
            title : "Caso teste",
            description: "Caso teste para ser usando nos testes do sistema",
	        value : "200.50"
        })
        expect(response.body).toHaveProperty('id')
        incidentId = response.body.id
    })

    it('should be able to list all incidents of a specific ONG', async () =>{
        const response = await request(app).get('/profile').set('Authorization', ongId )
        expect(response.status).toBe(200)
    })

    it('should be able to delete a Incident', async () => {
        const response = await request(app).delete('/incidents/' + incidentId).set('Authorization', ongId )
        expect(response.status).toBe(204)
    })

    it ('should be able to list all incidents', async () => {

        const response = await request(app).get('/ongs')

        expect(response.status).toBe(200);
    })
})