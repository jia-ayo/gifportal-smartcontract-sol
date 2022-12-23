const anchor = require("@project-serum/anchor");


const main = async() => {
 console.log("starting test .....");

 const provider = anchor.AnchorProvider.env();
 anchor.setProvider(provider);
 const program = anchor.workspace.Gifportal;

  // Create an account keypair for our program to use.
  const baseAccount = anchor.web3.Keypair.generate();
  // Call start_stuff_off, pass it the params it needs!
  let tx = await program.rpc.startStuffOff({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    },
    signers: [baseAccount],
  });
 console.log("your transaction signatur", tx);
 
 let account = await program.account.baseAccount.fetch(
    baseAccount.publicKey
 );
 console.log("Gif Count", account.totalGifs.toString());

 await program.rpc.addGif("https://giphy.com/clips/buzzfeed-christmas-xmas-men-try-sexy-santa-lingerie-bkinIEj8w3S0rWWc16", {
    accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey
    }
 })

 account = await program.account.baseAccount.fetch(baseAccount.publicKey);
 console.log("Gif Count", account.totalGifs.toString());
 console.log("Gif List", account.gifList);

}

const runMain = async() => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
runMain();