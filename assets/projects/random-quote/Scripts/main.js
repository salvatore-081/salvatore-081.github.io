const btn = document.querySelector('.generateButton');
const quote = document.querySelector('.quote');

let quotes = [``,
`Un uomo ammattisce se non ha qualcuno. Non importa chi è con lui, purché ci sia. Vi so dire, vi so dire che si sta così soli che ci si ammala`,
`Quante volte ho visto succedere che uno parla con un altro e non importa proprio niente che quello senta o capisca.`,
`I topi come noi non hanno una famiglia, mettono insieme un gruzzoletto e poi lo sperperano. Non hanno nessuno al mondo a cui importa un fico secco di loro... ma noi no, perché io o te e tu hai me`,
`Non c’è bisogno di troppo cervello per essere un bravo ragazzo, qualche volta mi pare anzi che il cervello faccia l’effetto opposto. Prendete uno che sia davvero in gamba, è difficile che sia una brava persona`,
`Come talvolta avviene, un attimo discese e si librò e durò molto più che un attimo. E il suono tacque e il movimento tacque, per molto molto più che un attimo.`,
`Scollamento del pensiero dell'uomo dalla realtà: i suoi sogni non si realizzano mai.`,
`The American Dream.`,
`Solitudine del vagabondo che va peregrinando di fattoria in fattoria alla ricerca di lavoro.`,
`Altra aspetto del sogno americano: desiderio di indipendenza.`,
`...Prima di vivere con gli altri io devo vivere con me stesso. L'unica cosa che non è tenuta a rispettare il volere della maggioranza è la coscienza.`,
`Quasi tutti sono simpatici, Scout, quando finalmente si riesce a capirli.`,
`Tutta la gente pensa di avere ragione e che tu abbia torto...`,
`Non è una buona ragione non cercare di vincere per il semplice fatto che si è battuti in partenza.`];
quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

btn.addEventListener('click', function(){
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomQuoteIndex];
});

