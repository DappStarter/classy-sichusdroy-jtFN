require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rifle pitch home install open broken text'; 
let testAccounts = [
"0x53bf921f5643a32a7d5c473701cd2a6c725022e2d4f69fb715b026ac063376c5",
"0x1aa1b5299f923fb47df785995bc61a9089f6c2cd76510f69914c2118731fe18f",
"0x886b442cda9359effaa6d1c5431b613ead8c5dcdb5e7967e2722eab626386f4c",
"0x63bd1cdd7902533a1ded103a57e0da435a9666eba25c11b01a4d01de269f8702",
"0x02389af292ba7fb633f817e5e37f7863c2c7dbbc7d0a9180405e78404735edcc",
"0xccd22198e91ecf84620bf550ce078a4372435e5b53007e56e71aad17e83e1221",
"0x766bf1304dae887fe8ba89cc7f9f48d7f908f5daad9ab1e70c6b7063f83ee0fd",
"0x3aba7b1434ac98296e56a0987281ebbe0627acc6936ac48cead85bf0e4dd6972",
"0x8c0fed98d259856ad524c9c37142d4afc076ceed8363f4ce07ff803929523d20",
"0x098d93f39428f10711a5d9b3a34d14a6f68f49827b7a6e8c025c34df6ef6c517"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

