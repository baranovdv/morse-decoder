const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = ''
    for(let i = 0; i < expr.length; i = i + 10) {
        // console.log(expr.slice(i,i+10))
        let r = ''
        let buf = expr.slice(i,i+10)

        if(buf == '**********') {
            result = result + ' '
            continue
        }
        for(let j = 0; j <= 4; j++){
            if(buf.slice(buf.length - 2*j -2,buf.length - 2*j) == '10') {
                r = '.' + r
            }
            if(buf.slice(buf.length - 2*j -2,buf.length - 2*j) == '11') {
                r = '-' + r
            }
            // console.log(r)
        }
        // console.log(r)
        result += MORSE_TABLE[r]

    }
// console.log(result)
return result
}

module.exports = {
    decode
}

// console.log(module.exports.decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))