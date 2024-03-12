let chosenOptions;
let checkboxes;
let password;
let char;
let lowercaseCaracter;
let uppercaseCaracter;
let number;
let symbole;
let y = '';
const passwordLength = document.getElementById("length");
const result =  document.getElementById("result");
const create = document.getElementById("create");
function save(checkboxes, chosenOptions) {
    chosenOptions = [];
    checkboxes = [];
        checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        for (let I = 0; I < 4; I++) {
            chosenOptions.push([checkboxes[I].checked]);            
        }
        return chosenOptions;
        }
function generate (chosenOptions,password, passwordLength) {
    password =[];
    char = [];
    const uppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    const symboles = ['!','@','#','$','%','^','&','*','(',')','_','+','{','}','[',']','|',':',',','<','>','.','?','/','~'];
    for (let i = 0; i < passwordLength.value; i++) {
        char = [];
            if (chosenOptions[0] == "true") {
                uppercaseCaracter = uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
                char.push(uppercaseCaracter);
            }
            if (chosenOptions[1] == "true") {
                lowercaseCaracter = lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
                char.push(lowercaseCaracter);
            }
            if (chosenOptions[2] == "true") {
                number = numbers[Math.floor(Math.random() * numbers.length)];
                char.push(number);
            }
            if (chosenOptions[3] == "true") {
                symbole = symboles[Math.floor(Math.random() * symboles.length)];
                char.push(symbole);
            }
        password.push(char[Math.floor(Math.random() * char.length)]);
    }
    return password;
}
function make(y) {
    let x = save(chosenOptions, checkboxes);
    let t = [];
    t = generate(x, password, passwordLength);
    y = t.join('');
    console.log(y);
    result.innerHTML = `
    <h2 id="result-message">your password :    <span id="done">${y}</span></h2>`;

    return y;
}
create.addEventListener("click", make);

