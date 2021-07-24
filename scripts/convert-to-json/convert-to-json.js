const fs = require('fs')
const comments = require('./fakeComments')
const FILENAME = 'comments.json'
fs.writeFileSync(FILENAME, JSON.stringify(comments), 'utf-8')
console.log('Done')
