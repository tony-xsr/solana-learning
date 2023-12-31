 npm run reset-and-build

> rust-p2p@1.0.0 reset-and-build
> chmod +x ./_cicd/cicd.sh && ./_cicd/cicd.sh reset-and-build

  Compiling program v0.1.0 (/Volumes/CodeSpace/blockchain/solana/solana-learning/transfer-sol/program)
    Finished release [optimized] target(s) in 10.99s
Program Id: 2BTDaMfWtynKVqpXPpwYja711FSXF97b5nhgzThFkwya


## Transaction
https://solscan.io/tx/H8WowUbH77crRcC94PyrY24ex4tUCCPEh8xc4mKoyZ6aDSvtiWSkeZGmfpGViEWxvtGc44cTQPLNiG4FQmkDWrA?cluster=devnet

 #1 - Create Account
Interact With
System Program -11111111111111111111111111111111  Deadwallet.sol   
Instruction Data
00000000c06a110000000000240000000000000002a8f6914e88a1b0e210153ef763ae2b00c2b93d16c124d2c0537a100480...
Show more
   
Input Accounts
#1 - NewAccount -2BTDaMfWtynKVqpXPpwYja711FSXF97b5nhgzThFkwya   WritableSigner
#2 - Source -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn   WritableSignerFee Payer
#3 - TransferAmount(SOL) -0.00114144
#4 - ProgramOwner -BPF Upgradeable Loader   


## Account Request Airdrop 

solana airdrop 1 2AXzcKA3cXr1SMmGESTkP8pqx232njXQBCJJPJCb9vfJ --url https://api.devnet.solana.com --keypair ./accounts/paul.json

Requesting airdrop of 1 SOL

Signature: 3EPMNvqbJcrnziyGZYEsoGkjwMs8dFJtgktmUEwYDtKbySUeb8kB5vGyKQKGWDKL6KVmbJgVQMqTJotPeqdLAsLN

2 SOL

solana airdrop 1 <ACCOUNT_PUBLIC_KEY> --url https://api.devnet.solana.com --keypair ./accounts/john.json



solana transfer --url https://api.devnet.solana.com  6UCKUFofscpnVRudnAt6bpK51GFjVFEAeqoXQwPpgmHE 0.1




