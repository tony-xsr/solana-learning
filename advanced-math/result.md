cd advanced-math

npm run reset-and-build 

 Compiling calculator v0.1.0 (/Volumes/CodeSpace/blockchain/solana/solana-learning/advanced-math/src/calculator)
    Finished release [optimized] target(s) in 13.50s
Program Id: HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31



Program Id                                   | Slot      | Authority                                    | Balance
3A9PqkWcJqYFHZdFw3KhFXvTjtPz8iupzFEwA8Ase9hU | 268581696 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.28016088 SOL
2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff | 269050305 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.93150552 SOL
52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K | 269046163 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.93172824 SOL
2k5voraZgPfGdh68xELz5axTPkv58i8ekoKW43tMgZAz | 268573495 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.28016088 SOL
HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 | 269203614 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.65199192 SOL
8HRDws3rbefKkwkSHLsEzUR97cSNFFNfzFUSCwE1ZehU | 269045412 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.93150552 SOL

### WATCH LOGs


 solana logs |  grep "HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 invoke" -A 9

Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 invoke [1]
    Program log: Value is now: 4
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 consumed 1001 of 200000 compute units
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 success
Transaction executed in slot 269204246:
  Signature: ymHsWNEWmeVtucs5NJU9G2G1eDNTobQbm6Xi6Xd453oTJixFxe5UAHvf5eGoPucQzuQtx1eiJfxe9UQHpjyMtw2
  Status: Ok
  Log Messages:
    Program ComputeBudget111111111111111111111111111111 invoke [1]
    Program ComputeBudget111111111111111111111111111111 success
--
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 invoke [1]
    Program log: Value is now: 3
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 consumed 999 of 200000 compute units
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 success
Transaction executed in slot 269204248:
  Signature: da3gGvP57ZmDhEwrKKj6eukBKU2fB3VM9YwF4oxXM2srVy1WdKTGTFVRFQPeh49BG9UVdZed2yWxZiKoEFbNvrQ
  Status: Ok
  Log Messages:
    Program ComputeBudget111111111111111111111111111111 invoke [1]
    Program ComputeBudget111111111111111111111111111111 success
--
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 invoke [1]
    Program log: Value is now: 6
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 consumed 997 of 200000 compute units
    Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31 success
Transaction executed in slot 269204250:
  Signature: 2QKnpQTtFTVxCNL6NgNprboTVxWCX13HroVumXQvJhADkwviCr2dRKQnrFDPfeVBbXEu5xmmZ6CCHZPDSGmhrGJp
  Status: Error processing Instruction 1: custom program error: 0x1773
  Log Messages:
    Program ComputeBudget111111111111111111111111111111 invoke [1]
    Program ComputeBudget111111111111111111111111111111 success


## RUN EXAMPLE

npm run example
 

> advanced-math@1.0.0 example
> ts-node ./src/client/calculator.ts

Successfully connected to Solana dev net.
Local account loaded successfully.
Local account's address is:
   37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn
We're going to ping the calculator program.
It's Program ID is:
   HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31
For simplicity's sake, we've created an address using a seed.
That seed is just the string "test(num)".
The generated address is:
   CZGYdMqZtjB4zK5d39hpWp2EQX5Nouy5GnkoBp8dTiou
Looks like that account does not exist. Let's create it.
Client account created successfully.
All right, let's run it.
Pinging program...
We're going to add: 4
Ping successful.
All right, let's run it.
Pinging program...
We're going to subtract: 1
Ping successful.
All right, let's run it.
Pinging program...
We're going to multiply by: 2
Ping successful.


# Transactions 

https://solscan.io/tx/2N9HqT2ugbrspSG1d3MN6dzsCNb6cJbMTvFMB9MBhUPeasjUFkAeJc2uX6jLVs2qA3Te1HgqJvkL8tCX1aMCqo84?cluster=devnet


 - Create Account
Interact With
System Program -11111111111111111111111111111111  Deadwallet.sol   
Instruction Data
00000000c06a110000000000240000000000000002a8f6914e88a1b0e210153ef763ae2b00c2b93d16c124d2c0537a100480...
Show more
   
Input Accounts
#1 - NewAccount -HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31   WritableSigner
#2 - Source -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn   WritableSignerFee Payer
#3 - TransferAmount(SOL) -0.00114144
#4 - ProgramOwner -BPF Upgradeable Loader


CreateAccountWithSeed

https://solscan.io/tx/4qFzyPnp9uEPJDK6ByUhwkXuQE8ZcCSfoEymkD6vRQ4GG2AbGXpUSVaed7aGRwovYH6UfpwbVMkW9XKNQ5PoBwy9?cluster=devnet

 - CreateAccountWithSeed
Interact With
System Program -11111111111111111111111111111111  Deadwallet.sol   
Instruction Data
030000001f50d2de5f5f135a619bd49d6bcab5fda348871394f7d72dde8973bfadb6f32f0500000000000000746573743100...
Show more
   
Input Accounts
#1 - Base -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn   WritableSignerFee Payer
#2 - Lamports -100000000
#3 - NewAccount -CZGYdMqZtjB4zK5d39hpWp2EQX5Nouy5GnkoBp8dTiou   Writable
#4 - Owner -HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31   
#5 - Seed -test1
#6 - Source -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn   WritableSignerFee Payer
#7 - Space -4

We're going to add: 4

https://solscan.io/tx/5QPdB1FFV2FYWGgqg7oaGbWZtnCQzdFfkubzC1oDkP2bCumAHWcvpyi9CzaYR3CmoZiWFKoMz4hrToLtR9rdgZt7?cluster=devnet
#1 Unknown program instruction
> Program log: Value is now: 4
> Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31  consumed 1001 of 200000 compute units
> Program returned success



We're going to subtract: 1

https://solscan.io/tx/5vmCoauoGYnNq14zZEZiCRqfxsDFTKha1SdJtr2kaf28noGkuCwu5c8f4vFojhXQBtQyxBJ3jH5Y6okjsmamekft?cluster=devnet

#1 Unknown program instruction
> Program log: Value is now: 3
> Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31  consumed 999 of 200000 compute units
> Program returned success



We're going to multiply by: 2

https://solscan.io/tx/2376roSUFyWhyvPgJ6uugTkrRL5URyDZA8toMeqKq8KRmh1nmLFW9WcCZvrNB1b9RCvWLa48MDJDYxGrTC5mALJN?cluster=devnet


#1 Unknown program instruction
> Program log: Value is now: 6
> Program HjNEHpH68m7L8xaDXj3oSNW7K9sfABChyXUZwH4a2S31  consumed 997 of 200000 compute units
> Program returned success

https://solscan.io/tx/2376roSUFyWhyvPgJ6uugTkrRL5URyDZA8toMeqKq8KRmh1nmLFW9WcCZvrNB1b9RCvWLa48MDJDYxGrTC5mALJN?cluster=devnet





