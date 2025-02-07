// JavaScript Migliorato
function updateCounter() {
    let counter = document.getElementById('counter');
    let count = localStorage.getItem('page_view') ? parseInt(localStorage.getItem('page_view')) : 0;
    count++;
    localStorage.setItem('page_view', count);
    counter.textContent = count.toString().padStart(6, '0');
}

updateCounter();

const newsList = document.getElementById('newsList');

// Dati di esempio (da sostituire con una chiamata API o un feed RSS)
const notizie = [
    { titolo: "Notizia 1: Sviluppi recenti nel mondo tech", link: "#" },
    { titolo: "Notizia 2: Nuove scoperte scientifiche", link: "#" },
    { titolo: "Notizia 3: Eventi culturali da non perdere", link: "#" }
];

notizie.forEach(notizia => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = notizia.link;
    a.textContent = notizia.titolo;
    li.appendChild(a);
    newsList.appendChild(li);
});


// Funzione per caricare le notizie (da implementare con una fonte dinamica)
function caricaNotizie() {
    // Qui dovresti inserire il codice per recuperare le notizie da un'API o un feed RSS.
    // Una volta ottenute le notizie, aggiorna la lista #newsList.

    // Esempio (con dati statici):
    notizie.forEach(notizia => {
      // ... (codice per creare elementi <li> e <a>, come nell'esempio precedente)
    });
}

// caricaNotizie(); // Chiamare la funzione per caricare le notizie al caricamento della pagina