// chiedo all'utente di inserire la sua emaio
var email_utente = prompt("Inserisci la tua email");
console.log(email_utente);
//creo l'array con la lista delle email per creare un database
var email_database = ["paolo.suero@outlook.it","mario.rossi@ciao.it", "danilo.inverno@due.com", "maria.ferrari@libero.it"];
console.log(email_database);

//creo il ciclo per accedere alla sequenza dell array
for (var i = 0; i < email_database.lenght; i++) {
    console.log(i);
}
