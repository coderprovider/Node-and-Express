const { writeFileSync } = require('fs');
// about WriteFunSync

for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
}