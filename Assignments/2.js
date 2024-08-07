/* Assignment #2

What if I ask you that the input string should start with 100xdevs ? How would the code change?

*/


const crypto = require("crypto") ; 
function checkForPerfix(prefix){
  let Str = "100xdevs" ; 
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