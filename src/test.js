let web3 = require('@solana/web3.js');
let splToken = require('@solana/spl-token');

// load up the first 32 bytes of the 64 byte array that was in our keyfile.json
// Only need the first 32 bytes so I use slice() just to make sure it's the correct length
let firstWinPrivKey = [114,205,85,44,220,226,182,14,142,186,8,71,251,97,233,233,251,0,222,233,147,196,226,116,163,23,197,32,126,226,117,126,209,123,206,210,186,24,147,77,255,22,243,42,27,251,92,86,106,84,210,194,200,226,211,173,239,45,202,226,57,238,236,40]
    .slice(0,32);
// print the length of the array so we know it is correct
// the fromSeed() method requires 32 bytes

console.log(firstWinPrivKey.length);
let firstWinWallet = web3.Keypair.fromSeed(Uint8Array.from(firstWinPrivKey));
console.log(new TextDecoder('utf-8').decode(firstWinWallet.secretKey));
console.log(firstWinWallet.publicKey.toString());
