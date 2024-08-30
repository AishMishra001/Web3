const binaryRepresentation = new TextEncoder().encode("h") ; 

console.log(binaryRepresentation) ; 

// h --> 104 (ascii value) ---> binary 


const publicKey = "faedfkdjfjsdldcosdjfsdfasdlkfsdfjsdlfewfjdasfkj" ; 

const binary = new TextEncoder().encode(publicKey) ; 

console.log(binary) ; 



/*
Output : 

Uint8Array(47) [
  102,  97, 101, 100, 102, 107, 100, 106,
  102, 106, 115, 100, 108, 100,  99, 111,
  115, 100, 106, 102, 115, 100, 102,  97,
  115, 100, 108, 107, 102, 115, 100, 102,
  106, 115, 100, 108, 102, 101, 119, 102,
  106, 100,  97, 115, 102, 107, 106
]

Here every character in the publicKey has a ascii representation hence the Uint8Array is this much long ...
*/