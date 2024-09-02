// Creating a public/private keyPair 

// Asymmetric Encryption Algorithms : 1. ECC ( used in ETH and BTC ) ---> secp256k1 eleptic curves
//                                    2. EdDSA (used in SOL ) ----> ed25519 eleptic curves


/*

Steps : 

1. Create a public / private keyPair 
2. Define a message to make it's signature  
3. convert the message into Uint8Array 
4. Sign the message using the private key 
5. Verify the signature using the public key

*/

// EdDSA : USED IN SOLANA 

import { Keypair } from "@solana/web3.js" ; 
import nacl from "tweetnacl" ; 

// Generate a new keypair  
const keypair =  Keypair.generate() ;
// this will generate both public and private key 

// Extracting keys 
const PublicKey = keypair.publicKey.toBase58() ; 
const PrivateKey = keypair.secretKey ; 

// Display the keys 

console.log("Public Key :" + PublicKey) ; 
console.log("Private Key :" + PrivateKey) ; 


// Converting the message into Uint8Array 

const message = new TextEncoder().encode( 
  "Hello, World! This is a test message."
)

// to make signature will use another library called nacl 

const signature = nacl.sign.detached(message,PrivateKey) ; 

const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
) ; 

console.log(result) ; // output : true 
