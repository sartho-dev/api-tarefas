import aes from 'aes-js'

export function generateCode(value: string) {
    const key = aes.utils.hex.toBytes(process.env.KEY)

    const vector = aes.utils.hex.toBytes(process.env.VECTOR)

    const cifer = new aes.ModeOfOperation.ctr(key, new aes.Counter(vector))

    const valueBytes = aes.utils.utf8.toBytes(value)
    
    const crypto = cifer.encrypt(valueBytes)

    
    return aes.utils.hex.fromBytes(crypto);
}