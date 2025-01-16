// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

let squadre =[
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 1
          nome: "Foggia Calcio",  
          puntiFatti : [],
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 2
          nome: "Manchester United",  
          puntiFatti : [],
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 3
          nome: "Barletta fc",  
          puntiFatti : [],
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 4
          nome: "Bayern Monaco",  
          puntiFatti : [],
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 5
          nome: "Lecce",  
          puntiFatti : [],
          falliSubiti : 0,
    },
  
]

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

for (let i = 0 ; i < squadre.length; i ++) {

    squadre[i].puntiFatti = Math.floor(Math.random() * 80);
    squadre[i].falliSubiti = Math.floor(Math.random() * 50);
}
console.table(squadre);


// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 

let arrayNomiFalli = [];
for (let i = 0; i < squadre.length; i++) {
    arrayNomiFalli.push({
        'nome': squadre[i].nome,
        'falliSubiti': squadre[i].falliSubiti
    });
}

// stampiamo tutto in console.
console.table(arrayNomiFalli);
