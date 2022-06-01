import supertest from "supertest";
import { expect } from 'chai';

const request = supertest('https://6295b7df75c34f1f3b1f98fb.mockapi.io/qr_codes/')
const TOKEN = '6f0b2066033289e8e41e0566163987310bbccd5b32a721c0a86cab20cbdfde66'

describe('TC1', () => {
    it('GET /qr_codes', (done) => {
        request
            .get(`?access-token=${TOKEN}`).end((err,res) => {
                console.log(err)
                console.log(res.body)
                expect(res.body.data).not.to.be.null
                done();
            })
    })
})

describe('TC2', () => {
    it('GET /qr_codes', () => {
        return request.get(`?access-token=${TOKEN}`).then((res) => {
                expect(res.body.data).not.to.be.null
            })
    })
})

describe('TC3', () => {
    it('GET /qr_codes/:qr_code_id', () => {
        const url = `/2?access-token=${TOKEN}`
        return request.get(url).then((res) => {
                expect(res.status).to.equal(200)
                console.log(res.body.qr_code_id)
                console.log(res.body.description)
                expect(res.body.qr_code_id).to.equal("2")
                expect(res.body.description).to.equal("Camaro")
            })
    })
})

describe('TC4', () => {
    it('GET /qr_codes/:qr_code_id', () => {
        return request.get(`?access-token=${TOKEN}`).then((res) => {
                expect(res.status).to.equal(200)
                res.body.forEach((data) => {
                    expect(data.callback_url).to.contains('http')
                    console.log(data.callback_url)
                });
            })
    })
})

describe('TC5', () => {
    it('PATCH /qr_codes/:qr_code_id', () => {
       const data = {
            // description: "Alpine",
            // callback_url: "http://loremflickr.com/640/480",
            amount: 10000
        }

        const url = `/2`

        return request
            .patch(url)
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                expect(res.status).to.equal(200)
                console.log(res.body)

            })
       
    })
})

describe('TC6 QR_CODE_NOT_FOUND_ERROR 404', () => {
    it('PATCH /qr_codes/:qr_code_id', () => {
       const data = {
            // description: "Alpine",
            // callback_url: "http://loremflickr.com/640/480",
            amount: 10000
        }

        const url = `/5`

        return request
            .patch(url)
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                expect(res.status).to.equal(404)
                console.log(res.body)
                console.log('QR_CODE_NOT_FOUND_ERROR')

            })
       
    })
})

describe('TC7 API_VALIDATION_ERROR 400', () => {
    it('PATCH /qr_codes/:qr_code_id', () => {
       const data = {
            description: "Alpine",
            callback_url: "http://loremflickr.com/640/480",
            amount: 1,
            qr_code_id: 5,
        }

        const url = `/5/5`

        return request
            .patch(url)
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                expect(res.status).to.equal(400)
                console.log(res.body)
                console.log('API_VALIDATION_ERROR')

            })
       
    })
})

describe('TC8 http error code 500', () => {
    it('GET /qr_codes/:qr_code_id', () => {
        const url = `/1?access-token=${TOKEN}`
        return request.get(url).then((res) => {
                expect(res.status).to.equal(500)
                console.log("http error code:" +res.status)
            })
    })
})

// INVALID_JSON_FORMAT 403

// QR_CODE_CODE_IN_USE 303

