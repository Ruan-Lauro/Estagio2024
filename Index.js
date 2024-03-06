const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Escreva FIB (Para escolher Fibonacci) ou STRING para (Usar a função de inverter string) ', (answer) => {
   
    if (answer === "FIB") {
        rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
            const numeroInt = parseInt(numero);
            Fibonacci(numeroInt)
            rl.close();
        });
    } else if (answer === "STRING") {
        
        rl.question('Digite uma frase para ficar invertida: ', (text) => {
            
            const stringInvertida = inverteString(text);
            console.log(`String original: ${text}`);
            console.log(`String invertida: ${stringInvertida}`);
            rl.close();
        });

    }
  
});

//-------------------------------------------------------------------------------------------------------

// 1) Observe o trecho de código abaixo:
// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

//R = Soma vai ser igual a 91

// K = 1, SOMA = 1
// K = 2, SOMA = 3
// K = 3, SOMA = 6
// K = 4, SOMA = 10
// K = 5, SOMA = 15
// K = 6, SOMA = 21
// K = 7, SOMA = 28
// K = 8, SOMA = 36
// K = 9, SOMA = 45
// K = 10, SOMA = 55
// K = 11, SOMA = 66
// K = 12, SOMA = 78
// K = 13, SOMA = 91

//-------------------------------------------------------------------------------------------------------

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const Fibonacci = (numero) =>{

    let a = 0;
    let b = 1;
    let soma;

    if (numero === 0 || numero === 1) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
        return;
    }

    while (true) {
        soma = a + b;
        if (soma === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        } else if (soma > numero) {
            console.log(`${numero} não pertence à sequência de Fibonacci.`);
            return;
        }
        a = b;
        b = soma;
    }
}

//-------------------------------------------------------------------------------------------------------

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, 9 - números ímpares

// b) 2, 4, 8, 16, 32, 64, 128 - soma por ele mesmo, 2+2=4, 4+4=7... 64+64=128

// c) 0, 1, 4, 9, 16, 25, 36, 49 - É o número naturais ao quadrado, 0^2 = 0; 1^2 = 1; 2^2=4... 7^2 = 49
           
// d) 4, 16, 36, 64, 100 - São os números ímpares ao quadrado, 2^2=4; 4^2=16... 10^2=100

// e) 1, 1, 2, 3, 5, 8, 13 é a sequência de Fibonacci, 0+1=1; 1+1=2; 2+1=3... 8+5=13

// f) 2,10, 12, 16, 17, 18, 19, 200 - são todos os números que começam com d, dois, dez, doze, Dezesseis... duzentos.

// a) 9
// b) 128
// c) 49
// d) 100
// e) 13
// f) 200

//-------------------------------------------------------------------------------------------------------

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Primeiro, ligue um dos interruptores e espere um pouco. Em seguida, desligue o primeiro interruptor e ligue um segundo interruptor. Depois, vá até a sala. Se encontrar uma lâmpada desligada e quente, isso corresponde ao primeiro interruptor. Se encontrar uma lâmpada acesa, isso corresponde ao segundo interruptor. Se encontrar uma lâmpada apagada e fria, isso corresponde ao terceiro interruptor.

//-------------------------------------------------------------------------------------------------------

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverteString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

//-------------------------------------------------------------------------------------------------------