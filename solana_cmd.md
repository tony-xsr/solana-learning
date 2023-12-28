export PATH="/Users/{YOUR_USER_NAME}/.local/share/solana/install/active_release/bin:$PATH"
solana --version

cd program

build byte encoding that solana uses
cargo build-bpf



# Deploying the program
solana-keygen new -o /Users/{YourUsername}/.config/solana/id.json
solana-keygen new -o ./wallets/id.json

# solana set ENV variable
solana config set --url https://api.mainnet-beta.solana.com
solana config set --url https://api.devnet.solana.com
solana config set --url http://localhost:8899

# solana config set wallet
solana config set --keypair /Users/{YourUsername}/.config/solana/id.json
solana config set --keypair ./wallets/id.json



# solana airdrop
solana airdrop 1
Requesting airdrop of 1 SOL

Signature: 3jQmgMhvhicnu.....
1 SOL

# solana balance
solana balance  


solana program deploy target/deploy/program.so

Program Id: 2k5voraZgPfGdh68xELz5axTPkv58i8ekoKW43tMgZAz

# solana program that you deployed
solana program show --programs



# solana program call
npm install @solana/web3.js

nvm use 12.14.0
nvm use 20.9.0
Now using node v20.9.0 (npm v10.1.0)