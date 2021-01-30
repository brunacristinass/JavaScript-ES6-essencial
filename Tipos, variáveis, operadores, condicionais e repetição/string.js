//Retorna o tamanho de uma string
const textSize = 'texto'.length; //length=Quantidade de caracteres na string
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substui por outro
const replacedText = 'texto'.replace('text', 'txet');

//Retorna a falta de um valor
const lastChar = 'text'.slice(-1);
console.log('\nUltima letra de uma string:', lastChar);

const allWthoutLastChar = 'texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima',allWthoutLastChar );

const secondToEnd = 'texto'.slice(1);
console.log('\nValor da string da segunda letra ate a ultima', secondToEnd);

//Retorna N caracters a partir de uma posicao
const TwoCharBeforeFirsPos = 'texto'.substring(0,2);
console.log ('\nAs duas letras primeira letrassao', TwoCharBeforeFirsPos);