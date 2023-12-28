import {
    Keypair,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
  } from '@solana/web3.js';
  import fs from 'mz/fs';
  import path from 'path';
  
  
  /*
    Our keypair we used to create the on-chain Rust program
  */
  const PROGRAM_KEYPAIR_PATH = path.join(
    path.resolve(__dirname, '../../dist/program'),
    'program-keypair.json'
  );
  
  /*    
    Our keypair wallet we used to connect to the Solana DEV net
  */
  const WALLET_KEYPAIR_PATH = path.join(
    path.resolve(__dirname, '../../../wallets'),
    'id.json'
  );
  async function main() {
    
    console.log("Launching client...");
  
    /*
    Connect to Solana DEV net
    */
    let connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  
    /*
    Get our program's public key
    */
    const secretKeyString = await fs.readFile(PROGRAM_KEYPAIR_PATH, {encoding: 'utf8'});
    const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
    const programKeypair = Keypair.fromSecretKey(secretKey);
    let programId: PublicKey = programKeypair.publicKey;
    console.log("programId: " ,programId.toBase58());
    /*
     Generate an account (keypair) to transact with our program
    */
    // const triggerKeypair = Keypair.generate();
    // const airdropRequest = await connection.requestAirdrop(
    //   triggerKeypair.publicKey,
    //   LAMPORTS_PER_SOL,
    // );
    // await connection.confirmTransaction(airdropRequest);
    
    // if you don't want to generate a new keypair every time, you can use one you've already created
    const walletKeyString = await fs.readFile(WALLET_KEYPAIR_PATH, {encoding: 'utf8'});
    const walletKey = Uint8Array.from(JSON.parse(walletKeyString));
    const triggerKeypair = Keypair.fromSecretKey(walletKey);
    
    /*
    Conduct a transaction with our program
    */
    console.log('--Pinging Program ', programId.toBase58());
    const instruction = new TransactionInstruction({
      keys: [{pubkey: triggerKeypair.publicKey, isSigner: false, isWritable: true}],
      programId,
      data: Buffer.alloc(0),
    });
    await sendAndConfirmTransaction(
      connection,
      new Transaction().add(instruction),
      [triggerKeypair],
    );
  }
  
  
  main().then(
    () => process.exit(),
    err => {
      console.error(err);
      process.exit(-1);
    },
  );