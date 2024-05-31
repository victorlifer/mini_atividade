function idadeId() {
    var age = prompt('Informe a sua idade: ');

    if (age >= 0 && age < 15) {
        console.log(`ainda é menor, é criança, sua idade é ${age}`);
    } else if (age >= 15 && age < 30) {
        console.log(`Fase adulta, sua idade é ${age}`);
    } else if (age >= 30 || age < 60) {
        console.log(`Fase idosa, sua idade é ${age}`);
    } else {
        console.log('FIM');
    }


}

console.log(idadeId());