// "Sono in lista?" Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

// chiedo all'utente di inserire la sua emaio
var email_utente = prompt("Inserisci la tua email");
console.log(email_utente);

//creo l'array con la lista delle email per creare un database
var email_database = ["paolo.suero@outlook.it","mario.rossi@ciao.it", "danilo.inverno@due.com", "maria.ferrari@libero.it"];
console.log(email_database);

//creo la variabile "emailInLista" per estrapolare il risultato dal ciclo ed evitare che si mostri il risultato per ogni valore di array
var emailInList = false;

//creo il ciclo per accedere alla sequenza dell array
for (var i = 0; i < email_database.length; i++) {
    console.log(email_database[i]); //check
    if (email_utente == (email_database[i])) {
        emailInList = true;
    }
}

// stampo il risultato in pagina HTML
if (emailInList == true) {
    document.writeln("Complimenti, sei in lista");
} else {
    alert("Ci dispiace non sei in lista! Inserisci un email presente nel database.");
}
