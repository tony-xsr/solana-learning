cd persisting-data
cd src

cargo new --lib sum
 Created library `sum` package

cargo new --lib square
     Created library `square` package



 npm run reset-and-build
 
 Compiling sum v0.1.0 (/Volumes/CodeSpace/blockchain/solana/solana-learning/persisting-data/src/sum)
    Finished release [optimized] target(s) in 15.81s
Program Id: 2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff

   Compiling square v0.1.0 (/Volumes/CodeSpace/blockchain/solana/solana-learning/persisting-data/src/square)
    Finished release [optimized] target(s) in 13.63s
Program Id: 52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K



Program Id                                   | Slot      | Authority                                    | Balance
3A9PqkWcJqYFHZdFw3KhFXvTjtPz8iupzFEwA8Ase9hU | 268581696 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.28016088 SOL
2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff | 269050305 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.93150552 SOL
52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K | 269046163 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.93172824 SOL
2k5voraZgPfGdh68xELz5axTPkv58i8ekoKW43tMgZAz | 268573495 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.28016088 SOL
8HRDws3rbefKkwkSHLsEzUR97cSNFFNfzFUSCwE1ZehU | 269045412 | 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn | 0.93150552 SOL

solana balance
1.53791176 SOL


Watch Logs

### Run Example SUM
npm run example:sum


> advanced-math@1.0.0 example:sum
> ts-node ./src/client/sum.ts

Successfully connected to Solana dev net.
Local account loaded successfully.
Local account's address is:
   37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn
We're going to ping the sum program.
It's Program ID is:
   2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff
For simplicity's sake, we've created an address using a seed.
That seed is just the string "test(num)".
The generated address is:
   4u1ebTNicYtmbGZQJez91y2SUowHpgaEtS2ip9mzMakZ
Looks like that account does not exist. Let's create it.
Client account created successfully.
All right, let's run it.
Pinging sum program..

solana balance change -0.1
1.43790176 SOL

### Account transaction while run example

Instructions CreateAccountWithSeed 
Transaction when create Token Account 
https://solscan.io/tx/5X2N3ZRqgpdPDTHRcebSEeBWuhHaVMDN9A14Y2mMHU3cbM4KuEdckLSyAAMqKGwR9zn5uS73WzZMPXeGSKYrKWHH?cluster=devnet

#1 - Base -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQnicon copyWritableSignerFee Payer
#2 - Lamports -100000000
#3 - NewAccount -4u1ebTNicYtmbGZQJez91y2SUowHpgaEtS2ip9mzMakZicon copyWritable
#4 - Owner -2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Fficon copy
#5 - Seed -test1
#6 - Source -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQnicon copyWritableSignerFee Payer
#7 - Space -4

Transaction when interact with program sum  (Fee -0.000005 )
https://solscan.io/tx/3DQLR3YubkfQLrVrbzLqVqqa3f6YU1VvVMjUjmYRsCvr8Wz227UL43eyGBKFzkADZcTxPTvEh2eZRq5nXCdSygTT?cluster=devnet

#1 Unknown program instruction
> Program log: Debug output from the program
> Program log: Account ID 4u1ebTNicYtmbGZQJez91y2SUowHpgaEtS2ip9mzMakZ
> Program log: Executable false
> Program log: Lamports 100000000
> Program log: Debug output from the program complete
> Program log: Adding 1 to sum and storing the result in the account data
> Program log: Sum is now 1
> Program 2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff  consumed 14300 of 200000 compute units
> Program returned success


 solana logs |  grep "2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff invoke" -A 3
    Program 2xvrrzqfDG7AZCbV9kFN9RtESM3W9VJAgkLxLs63T7Ff invoke [1]
    Program log: Debug output from the program
    Program log: Account ID 4u1ebTNicYtmbGZQJez91y2SUowHpgaEtS2ip9mzMakZ
    Program log: Executable false



### Run Example SQUARE

npm run example:square

> advanced-math@1.0.0 example:square
> ts-node ./src/client/square.ts

Successfully connected to Solana dev net.
Local account loaded successfully.
Local account's address is:
   37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn
We're going to ping the square program.
It's Program ID is:
   52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K
For simplicity's sake, we've created an address using a seed.
That seed is just the string "test(num)".
The generated address is:
   E6HEK3pKVXcyfQQHaSc8vmFR281ykSiW22vywqXm273S
Looks like that account does not exist. Let's create it.
Client account created successfully.
All right, let's run it.
Pinging square program...
Ping successful.


### Account transaction while run example

Instructions CreateAccountWithSeed 
Create account with seed transaction information E6HEK3pKVXcyfQQHaSc8vmFR281ykSiW22vywqXm273S
https://solscan.io/tx/4aX8uduUxG5sE5Em2qkiKw6oUef3iKBKSNoa81SMuUcPuvHKTAST2JWVLJT2GhLJEHYLpQJGYwA3zQff4KyM4z6k?cluster=devnet

Input Accounts
#1 - Base -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn SignerFee Payer
#2 - Lamports -100000000
#3 - NewAccount -E6HEK3pKVXcyfQQHaSc8vmFR281ykSiW22vywqXm273S Writable
#4 - Owner -52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K 
#5 - Seed -test1
#6 - Source -37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn SignerFee Payer
#7 - Space -4



solana logs |  grep "52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K invoke" -A 3

  Program 52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K invoke [1]
    Program log: Debug output from the program
    Program log: Account ID E6HEK3pKVXcyfQQHaSc8vmFR281ykSiW22vywqXm273S
    Program log: Executable false


Ping program transaction information (Fee -0.000005 )
https://solscan.io/tx/3rDJZrHdXDAiDWEUsrvVSNjdLSG4aQymFMtpSAtMC2A9Chsv6E7iqH5uQ2C6xE34wnazRQkzd63JNjPUh7R12CSj?cluster=devnet

Program log
#1 Unknown program instruction
> Program log: Debug output from the program
> Program log: Account ID E6HEK3pKVXcyfQQHaSc8vmFR281ykSiW22vywqXm273S
> Program log: Executable false
> Program log: Lamports 100000000
> Program log: Debug output from the program complete
> Program log: Squaring the number and storing the result in the account data
> Program log: Current square is now: 1
> Program 52NNgpJEU98m2s8hXtNaiM7xNsjMbz9zzQJH9oGY6f3K  consumed 14467 of 200000 compute units
> Program returned success