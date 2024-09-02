// EcDSA algorithm --> secp256k1 using in Etherium 

import {ethers} from "ethers" ; 

// generating keypair in ethers lib uses "wallet"

const wallet = ethers.Wallet.createRandom() ; 

// Extrating keys 

const PublicKey = wallet.address ; 
console.log(PublicKey) ; 

const PrivateKey = wallet.privateKey ; 
console.log(PrivateKey) ; 

// message 
const message = "Transaction of 0.01 ETH to fa234234dd145083275" ; 

// Signature

const signature = await wallet.signMessage(message) ; 
console.log("Signature :" + signature) ;

// Verify the signature 

const recoveredAddress = ethers.verifyMessage(message , signature) ; 


console.log("Recovered Address : " , recoveredAddress ) ; 
console.log("Signature is valid : ", recoveredAddress === PublicKey) ; 