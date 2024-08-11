/* Assignment #3
What if I ask you to find a nonce for the following input - 
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
*/
// damnnn


const crypto = require("crypto") ; 
function checkForPerfix(prefix){
  let Str = "harkirat => Raman | Rs 100 " ; 
  let input = 0 ; 

 while(true){

   const inputStr = Str + input.toString() ; 

   const hash = crypto.createHash("sha256").update(inputStr).digest("hex") ; 

   if(hash.startsWith(prefix)){
    
    return{
      Input : inputStr , 
      Hash : hash 
    }
   }
    input++ ;
  }
}





const result = checkForPerfix("00000") ; 
console.log(`Input Str = ${result.Input}  Hash = ${result.Hash}`)