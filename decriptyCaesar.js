const alphabetic = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
/* !
    Caesar decript logic
    quantidadeDeCasas
    quantidadeLetrasAlfabeto = 26
    26%quantidadeLetrasAlfabeto=(quantidadeLetrasAlfabeto+quantidadeDeCasas)%quantidadeLetrasAlfabeto=0
    27%quantidadeLetrasAlfabeto=(quantidadeLetrasAlfabeto+quantidadeDeCasas)%quantidadeLetrasAlfabeto=1
    28%quantidadeLetrasAlfabeto=(quantidadeLetrasAlfabeto+quantidadeDeCasas)%quantidadeLetrasAlfabeto=2
  */
module.exports = function DecriptyCaesar() {
  var dataJsonAnswer = [];
  dataJsonAnswer.push(require("./answer.json"));

  const caesarDecriptyArray = dataJsonAnswer.map((caesarEncrypt) => {
    const decimalPlaces = caesarEncrypt.numero_casas;
    const splitedcaesardataJsonAnswer = caesarEncrypt.cifrado.split("");
    const amountOfLettersAlphab = 26;

    const decriptMessageCaesar = splitedcaesardataJsonAnswer.map(
      (whichLetter) => {
        if (alphabetic.includes(whichLetter)) {
          let indexOfWhichLetter =
            (amountOfLettersAlphab +
              alphabetic.indexOf(whichLetter) -
              decimalPlaces) %
            amountOfLettersAlphab;
          return alphabetic[indexOfWhichLetter];
        } else return whichLetter;
      }
    );
    return decriptMessageCaesar.join("");
  });
  return caesarDecriptyArray.join("");
};
