# api-test-js
super-api-tests

`npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`
`npm install --save-dev @babel/preset-react`

#.babelrc
`{
    "presets": ["@babel/preset-env"]
}`

#.mocharc.yaml
`require: '@babel/register'`

#how to run

`npm test`

`> api-test-js@1.0.0 test /Users/muksidini/api-test-js
> mocha



  TC1
null
[
  {
    description: 'Camaro',
    callback_url: 'http://loremflickr.com/640/480',
    amount: 10000,
    qr_code_id: '2'
  },
  {
    description: 'Ranchero',
    callback_url: 'http://loremflickr.com/640/480',
    amount: 25433,
    qr_code_id: '3'
  },
  {
    description: 'Alpine',
    callback_url: 'http://loremflickr.com/640/480',
    amount: 1,
    qr_code_id: '4'
  }
]
    ✔ GET /qr_codes (1007ms)

  TC2
    ✔ GET /qr_codes (821ms)

  TC3
2
Camaro
    ✔ GET /qr_codes/:qr_code_id (782ms)

  TC4
http://loremflickr.com/640/480
http://loremflickr.com/640/480
http://loremflickr.com/640/480
    ✔ GET /qr_codes/:qr_code_id (833ms)

  TC5
{
  description: 'Camaro',
  callback_url: 'http://loremflickr.com/640/480',
  amount: 10000,
  qr_code_id: '2'
}
    ✔ PATCH /qr_codes/:qr_code_id (794ms)

  TC6 QR_CODE_NOT_FOUND_ERROR 404
Not found
QR_CODE_NOT_FOUND_ERROR
    ✔ PATCH /qr_codes/:qr_code_id (784ms)

  TC7 API_VALIDATION_ERROR 400
{ msg: 'Invalid request' }
API_VALIDATION_ERROR
    ✔ PATCH /qr_codes/:qr_code_id (851ms)

  TC8 http error code 500
http error code:500
    ✔ GET /qr_codes/:qr_code_id (806ms)


  8 passing (7s)`
