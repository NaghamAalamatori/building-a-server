function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenhiet (celcius){
    return (celcius * 9) /5 + 32;
}

module.export = {                     //common js
    generateRandomNumber,
    celciusToFahrenhiet,
};    
