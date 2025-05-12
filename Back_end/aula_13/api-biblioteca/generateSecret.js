import crypto from 'crypto';

function generaSecretKey(){
    return crypto.randomBytes(64).toString('hex');
}

const secretKey = generaSecretKey();
console.log('Chave Secreta Gerada: ', secretKey)