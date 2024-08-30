// HexDecimal Encoding ---> 1 char = 4 bits  0-15 (2^4 = 16 (0-15)) 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e

function ByteToHex(bytesArray){
  let hexString = '';
  for(let i=0 ; i< bytesArray.length ; i++){
    hexString += bytesArray[i].toString(16).padStart(2,'0') ;  
  }
  return hexString ; 
}

const str = "Hello" ; 
const bytes = new TextEncoder().encode(str) ; 
const hexString = ByteToHex(bytes); 
console.log(hexString) ; 

// Note: Each character takes double of it's space as a single character is 8 bits and here in hex encoding it is dividing into 4-4 bites that's why 



// Base64 Encoding --> uses 64 characters (A-Z , a-z , 0-9 , +, /) 

const str2 = "hello" ; 
const strArray = new TextEncoder().encode(str) ; 
const base64Encoded = Buffer.from(strArray).toString("base64");
console.log(base64Encoded);

// Base64 also encodes in the multiple of 4 ---> 4,8,12,16...
// hence if the encoding is not that "wrd123" here as it is 6 digits then Base64 adds "=" in the end then it will become "wrd123==" to make it a multiple of 8 


// Base58 ---> same as Base64 but with 58 characters excluding ( I , O , 0 , l  , + , /)

// Encoding : 

const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58(Buffer.from(uint8Array));
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string
