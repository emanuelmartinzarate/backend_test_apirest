const request = require('supertest')('http://localhost:8000')
const expect = require('chai').expect
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3ZjM2Mjg1NDcwNGIzMmFkMTc0OGUiLCJpYXQiOjE2NjM0MTU2NDZ9.x0no2Y5pY1I4hjFPu4K68GcVEPMkOdO9WqQ13gJqO4w'

describe('Tests for Category entity', () => {
    describe('GET', () => {
        it('List categories must return 200', async() => {
            const response = await request.get('/api/categories/')
            expect(response.status).to.eql(200)
        })
        it('Get by ID must return 200', async() => {
            const response = await request.get('/api/category/63274b193fa763d4ebae7b00')
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('Create category must return 200', async() => {
            const category = {
                "name":"Docker"
            }
            const response = await request.post('/api/category/create/6317f362854704b32ad1748e')
                            .send(category)
                            .set('Authorization',token)
            expect(response.status).to.eql(200)
        })
    })
    describe('PUT', () => {
        it('Update category must return 200', async() => {
            const category = {
                "name":"Docker1"
            }
            const response = await request.put('/api/category/6353f00081516d78fdef5134/6317f362854704b32ad1748e')
                            .send(category)
                            .set('Authorization',token)
            expect(response.status).to.eql(200)
        })
    })
    describe('DELETE', () => {
        it('Delete category must return 200', async() => {
            const response = await request.delete('/api/category/6353f00081516d78fdef5134/6317f362854704b32ad1748e')
                            .set('Authorization',token)
            expect(response.status).to.eql(200)
        })
    })
})