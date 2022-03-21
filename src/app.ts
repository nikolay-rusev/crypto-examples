import crypto from 'crypto';

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

const testAesKey = Buffer.from(
    '9E9CEB8356ED0212C37B4D8CEA7C04B6239175420203AF7A345527AF9ADB0EB8',
    'hex',
);
const phpToken = '+wcUaqfSlpuP9CweN5UR3WhOUne41RLfOEzr1bt/aSU=';

var buf = new Buffer(phpToken, 'base64');
var iv = buf.slice(0, 16);
var ciphertext = buf.slice(16);

const decipher = crypto.createDecipheriv('aes-256-cbc', testAesKey, iv);
const output = decipher.update(ciphertext);

console.log(Buffer.concat([output, decipher.final()]).toString('utf8'));

// import { Buffer } from 'buffer';
// import CryptoJS from 'crypto-js';

// const AESKey = Buffer.from(
//     '9E9CEB8356ED0212C37B4D8CEA7C04B6239175420203AF7A345527AF9ADB0EB8',
//     'hex',
// );
// const token = '+wcUaqfSlpuP9CweN5UR3WhOUne41RLfOEzr1bt/aSU=';

// var buf = new Buffer(token, 'base64');
// var iv = buf.slice(0, 16);
// var hexBuffer = Buffer.from(iv.toString(), 'hex');
// var ivHex = CryptoJS.enc.Hex.parse(hexBuffer.toString());
// var ciphertext = buf.slice(16);

// var decrypted = CryptoJS.AES.decrypt(ciphertext.toString(), AESKey.toString(), {
//     iv: ivHex,
// });
// var result = CryptoJS.enc.Utf8.stringify(decrypted);

// console.log(result);
