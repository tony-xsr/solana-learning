#![feature(build_hasher_simple_hash_one)]
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MathStuffSquare{
    pub square: u32, 
}

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult { 

    // Iterating accounts is safer then indexing
    let accounts_iter = &mut accounts.iter(); 

    let account = next_account_info(accounts_iter)?;

    // Check if the account is owned by the program
    if account.owner != program_id {
        msg!("Account does not have the correct program id");
        return Err(ProgramError::IncorrectProgramId);
    }
     msg!("Debug output from the program");
     msg!("Account ID {:?}", account.key);
     msg!("Executable {:?}", account.executable);
     msg!("Lamports {:?}", account.lamports());
   
     msg!("Debug output from the program complete"); 

     msg!("Squaring the number and storing the result in the account data");

    
    let mut math_stuff_square = MathStuffSquare::try_from_slice(&account.data.borrow())?;
    math_stuff_square.square += 1;
    math_stuff_square.serialize(&mut &mut account.data.borrow_mut()[..])?;

    msg!("Current square is now: {:?}", math_stuff_square.square);
    Ok(())
}
