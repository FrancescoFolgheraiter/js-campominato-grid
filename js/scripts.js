/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

SVOLGIMENTO
1)prendo in input il pulsante gioca
2)genero una griglia composta da celle 10 x 10
    -uso un ciclo da 1-100 ad ogni giro di cilo creo una cella
        *per creare una cella devo prima creare l'elento
        *poi do la classe all'elemento
        *poi la "appendo" nel mio DOM
    -al click sulla cella dell'utente la cella cambia colore e manda un msg in console
*/
//input pulsante gioca
const gioca = document.querySelector("button");

gioca.addEventListener("click", function(){
    alert("ciao")
})