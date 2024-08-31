import { generateMnemonic , mnemonicToSeedSync } from "bip39" ; 

const words = generateMnemonic(128) ; 

const seed1 = mnemonicToSeedSync(words) ; 

// will give 12 random words 

console.log(words) ; 
console.log(seed1) ; 

const words2 = generateMnemonic(256) ;
const seed2 = mnemonicToSeedSync(words2) 

// will give 24 random words 

console.log(words2) ;
console.log(seed2)  ; 