//use anchor_lang::{prelude::Program, system_program::System};
use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]

pub mod gifportal {
    use super::*;

    pub fn start_stuff_off(_ctx: Context<StartStuffOff>) -> ProgramResult {
    
    Ok(())
    }
}

#[derive(Accounts)]
pub struct StartStuffOff{
    
}