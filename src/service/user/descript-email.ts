import aes from 'aes-js'

export function descryptCode(code: string) {

    const codeBytes = aes.utils.hex.toBytes(code)

    const keyBytes = aes.utils.hex.toBytes(process.env.KEY)
    
    const vectorBytes = aes.utils.hex.toBytes(process.env.VECTOR)

    const cifer = new aes.ModeOfOperation.ctr(keyBytes, new aes.Counter(vectorBytes))

    const email_value = cifer.decrypt(codeBytes)

    return aes.utils.utf8.fromBytes(email_value);
    
}