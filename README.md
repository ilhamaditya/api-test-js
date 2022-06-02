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
