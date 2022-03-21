import crypto from 'crypto';
import CryptoJS from 'crypto-js';

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

function useCrypto() {
    const testAesKey = Buffer.from(
        '9E9CEB8356ED0212C37B4D8CEA7C04B6239175420203AF7A345527AF9ADB0EB8',
        'hex',
    );
    const phpToken = '+wcUaqfSlpuP9CweN5UR3WhOUne41RLfOEzr1bt/aSU=';

    var buf = Buffer.from(phpToken, 'base64');
    var iv = buf.slice(0, 16);
    var ciphertext = buf.slice(16);

    const decipher = crypto.createDecipheriv('aes-256-cbc', testAesKey, iv);
    const output = decipher.update(ciphertext);

    console.log(Buffer.concat([output, decipher.final()]).toString('utf8'));
}

// useCrypto();

function useCryptoJS() {
    const phpToken = '+wcUaqfSlpuP9CweN5UR3WhOUne41RLfOEzr1bt/aSU=';
    const testAesKey = Buffer.from(
        '9E9CEB8356ED0212C37B4D8CEA7C04B6239175420203AF7A345527AF9ADB0EB8',
        'hex',
    );

    var buf = Buffer.from(phpToken, 'base64');
    var iv = buf.slice(0, 16);
    var ciphertext = buf.slice(16);

    var DataKey = CryptoJS.enc.Base64.parse(testAesKey.toString('base64'));
    var DataVector = CryptoJS.enc.Base64.parse(iv.toString('base64'));
    var decrypted = CryptoJS.AES.decrypt(
        ciphertext.toString('base64'),
        DataKey,
        {
            iv: DataVector,
        },
    );
    var result = CryptoJS.enc.Utf8.stringify(decrypted);

    console.log(result);
}

useCryptoJS();
