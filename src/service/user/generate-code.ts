import aes from 'aes-js'

export function generateCode(value: string) {
    const key = aes.utils.hex.toBytes(process.env.KEY)

    const vector = aes.utils.hex.toBytes(process.env.VECTOR)

    const cifer = new aes.ModeOfOperation.ctr(key, new aes.Counter(vector))

    const valueBytes = aes.utils.utf8.toBytes(value)
    
    const crypto = cifer.encrypt(valueBytes)

    
    return aes.utils.hex.fromBytes(crypto);
}

export function generate4code() {

    
   const codigo = new Array<string>(4)



    for (let index = 0; index < 4; index++) {
        codigo[index] = Math.floor(Math.random() * 9).toString() 
        
    }
    
    return codigo.join("");
}