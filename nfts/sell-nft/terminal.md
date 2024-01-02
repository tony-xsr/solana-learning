cargo build-bpf --manifest-path=./programs/mint-nft/Cargo.toml --bpf-out-dir=./dist/program
solana program deploy dist/program/mint_nft.so

## First time build and deploy to get program id
## ERROR
Error: Account 37F7w5srJWSCXmkAHnskT5sR1V3ogQYBvEruxERoXgQn has insufficient funds for spend (4.01049816 SOL) + fee (0.001445 SOL)


solana program deploy dist/program/mint_nft.so
Program Id: BJKfnpMh2ebHQ7txvVWWpFvVJq75U8NXEMMaTEtftz1u


Change 
declare_id!("BJKfnpMh2ebHQ7txvVWWpFvVJq75U8NXEMMaTEtftz1u");


or 
https://www.anchor-lang.com/docs/installation 
npm i -g @project-serum/anchor-cli

remember backup your keypair .json program first program deployed

anchor build  
 Compiling mint-nft v0.1.0 (/.../solana-learning/nfts/sell-nft/programs/mint-nft)
    Finished release [optimized] target(s) in 1.38s

remember backup your keypair .json replace current deploy .json keypair


### update code by replace your new program id and re-deploy
anchor deploy

Only x86_64 / Linux distributed in NPM package right now.
Trying globally installed anchor.
Deploying cluster: https://api.devnet.solana.com
Upgrade authority: /Volumes/CodeSpace/blockchain/solana/solana-learning/wallets/id.json
Deploying program "mint_nft"...
Program path: /Volumes/CodeSpace/blockchain/solana/solana-learning/nfts/sell-nft/target/deploy/mint_nft.so...
Program Id: BJKfnpMh2ebHQ7txvVWWpFvVJq75U8NXEMMaTEtftz1u

Deploy success


