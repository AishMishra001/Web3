const { createMint } = require('@solana/spl-token');
const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([153,198,238,22,220,65,121,57,170,251,89,17,136,211,90,103,77,150,32,227,98,207,233,124,66,14,198,154,46,165,105,59,235,34,63,214,1,84,3,103,122,199,95,189,181,245,180,93,111,113,215,39,13,134,1,187,23,149,133,69,194,216,228,209]));

const connection = new Connection("https://api.devnet.solana.com");
async function main() {
    const newAccount = Keypair.generate();
    const owner = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: owner.publicKey,
        }),
    );

    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`New account created at ${newAccount.publicKey.toBase58()}`);
}

main();

