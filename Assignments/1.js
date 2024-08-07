 /* Assignment #1

What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

*/ 

const crypto = require("crypto") ;  

function checkForPrefix(prefix){

  let input = 0 ; 

  
  while(true){
    
    const inputStr = input.toString() ; 

    const hash = crypto.createHash('sha256').update(inputStr).digest('hex') ; 

    if(hash.startsWith(prefix)){
      return { Input : inputStr , Hash : hash }
    }

    input++ ; 

  }
}

const result = checkForPrefix("00000") ; 
console.log(`Input str : ${result.Input} Hash Value : ${result.Hash}  `)