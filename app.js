const JSEncrypt = require('node-jsencrypt');
const forge = require('node-forge');
const fs = require('fs');

let pki = forge.pki;

const options = { publicKeys: fs.readFileSync("./rsa_2048_pub.pem", "utf8"), privateKey: fs.readFileSync("./rsa_2048_priv.pem","utf8") };

let publicKey =  options.publicKeys;
let privateKey=  options.privateKey;
 

let inputText='Test';
var encrypt = new JSEncrypt();
encrypt.setPublicKey(publicKey);
var encrypted = encrypt.encrypt(inputText);

// Decrypt with the private key...
var decrypt = new JSEncrypt();
decrypt.setPrivateKey(privateKey);
var uncrypted = decrypt.decrypt(encrypted);

// Now a simple check to see if the round-trip worked.
if (uncrypted == inputText) {
  alert('It works!!!');
}
else {
  alert('Something went wrong....');
}
