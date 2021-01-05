const fs = require('fs');

const images =  fs.readFileSync('/home/budi/Documents/Dev Challenges/my_unsplash/data/images.json','utf8')
console.log(images)
