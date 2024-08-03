// Creating a Hash Function logic using the "crypto" library that allow u to use cryptograph tools 


const crypto = require('crypto')

const input = "100xdevs" ; 

const hash = crypto.createHash('sha256').update(input).digest('hex') ; 

console.log(hash) ; 