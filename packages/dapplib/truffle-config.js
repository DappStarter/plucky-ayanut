require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name radar tortoise column install pave army giant'; 
let testAccounts = [
"0x9ebd88503139c6b8edb35960f3d92ee3382e61fa1b1d2bc16594d66b4f258de7",
"0x4e6356f040d76c26d257c53ff67edd4ddbcdca7a8d52270378345c65c6610735",
"0x024ddc662ab51e272941b20c7c51963466bea84129f4a1d561cad9628ff548dd",
"0x30fca70c00a6f288048f0499e3fc8a79dd778fae57575cfe95917f436f7a7baa",
"0x9f145c8c1c512b86349547c711e33f9bae709c07eb67ebb6c3be717916ffd98b",
"0x914ad8fa2f10a9bc9400f0d88bc41e6e0751659a55f7d051441f2f2c793c4440",
"0xaa5f532b890d3ae7b7b960dc0729ef8f54bd9c4b374bc43dede9d4a45e1eab0c",
"0x3e54f03a11ae1ad35920b8d7446c7a1ad109898b71f9714b0ead401ade00a3fa",
"0x9a48da04df3d78ecec9091677db3087aa0820396c7f60b97b6eab19fa03428d9",
"0x8aeae3e75d7e1049b15168986843a56f82f878bbadd51bf222e7385f049a64b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
