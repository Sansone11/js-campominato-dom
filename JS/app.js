console.log('JS ok')
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. (quindi prima del click la griglia è vuota)
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 100 caselle in una griglia 10 x 10.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// crea le dimensioni della griglia
// aggiungi un evento al bottone una volta premuto il main class(container) deve diventare display block
const dimensioneGriglia = 10;
const numeroCelle = dimensioneGriglia ** 2;
const tabelloneEl = document.querySelector('.tabellone');
const bombe = [];

button = document.addEventListener('click', function () {
    let buttonStart = document.querySelector(".container").style.display = "block";
    for (let i = 0; i < numeroCelle; i++) {
        const cella = getSquareElelment()
        // cella.innerHTML = i + 1;
        cella.dataset = i + 1;
        tabelloneEl.append(cella)
    }

});
// crea le celle
function getSquareElelment() {
    //     // crea degli elementi div 
    const square = document.createElement('div')
    //     // aggiungi le celle (square) ai div
    square.classList.add('square')
    // creo un evento ed assegno solo il nome della funzione
    square.addEventListener('click', clickHandler)
    console.log(square)
    return square

};



function clickHandler(event) {
    // console.log(this)
    const square = this
    square.classList.toggle('clicked')
    // rimuovo l'evento
    square.removeEventListener('click', clickHandler)
    const numeroCella = parseInt(this.dataset.numero)
    let className = 'success'
    if (posizioniBombe.includes(numeroCella)) {
        className = 'danger'
    } else {
        punteggio++
    }
    this.classList.add(className)

};


function resetGame() {
gridElement.innerHTML = '';
}

// dobbiamo generare 16 bombe creiamo un aray di nueri casuali compresi tra 1 e 100
function generaBombe(max) {
    // crea 16 bombe non duplicate di 16 numeri
    // ciclo che genera bombe
    while (bombe.length < 16) {
        // genero num casuale intero da 1 a max,se il num non e presente nell array lo pusho
        const n = getRandomIntInclusive(1, max)
        if (!bombe.includes(n)) {
            bombe.push(n)
        }
    }

    return bombe
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}