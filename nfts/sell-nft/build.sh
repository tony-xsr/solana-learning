cargo build-bpf --manifest-path=./programs/mint-nft/Cargo.toml --bpf-out-dir=./dist/program
solana program deploy dist/program/mint_nft.so