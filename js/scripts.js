// Selecao de Elementos
const generatepasswordButton = document.querySelector("#generate-password");
const generatepasswordElement = document.querySelector("#generated-password");

// Funcoes
// Letras, Numeros e Simbolos
const getLetterLowerCase = () => {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$&*+-";
    return symbols[Math.floor(Math.random()* symbols.length)];
}

const generatepassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""
    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    for (i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        })
    }

    password = password.slice(0, passwordLength);

    generatepasswordElement.style.display = "block";
    generatepasswordElement.querySelector("h4").innerText = password;
}

// Eventos
generatepasswordButton.addEventListener("click", () => {

    generatepassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});