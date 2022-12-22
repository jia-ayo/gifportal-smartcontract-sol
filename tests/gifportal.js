const anchor = require("@project-serum/anchor");


const main = async() => {
 console.log("starting test .....");
 anchor.setProvider(anchor.AnchorProvider.env());
 const program = anchor.workspace.Gifportal;
 const tx= await program.rpc.startStuffOff();
 console.log("your transaction signatur", tx)
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