// chiedo all'utente di inserire un numero da 1 a 6
var human_number = parseInt(prompt("Inserisci un numero da 1 a 6"));
console.log(human_number);

// estraggo un numero a caso da 1 a 6 grazie alla funzione random
var pc_number = Math.floor(Math.random() * 6) + 1;
console.log(pc_number);

//stabilisco la condizione
//verifico che l'utente mi abbia dato un NUMERO che sia MAGGIORE/UGUALE di 1 e MINORE/UGUALE di 6
if (isNaN(human_number) || human_number < 1 || human_number > 6) {
    alert("Attenzione, non hai inserito un numero valido");
} else if (human_number >= pc_number){
    document.writeln("Complimenti. Hai vinto!");
} else {
    document.writeln("Hai perso. Ritenta la fortuna");
}
