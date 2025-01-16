// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

let squadre =[
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 1
          nome: "Foggia Calcio",  
          puntiFatti : 0,
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 1
          nome: "Manchester United",  
          puntiFatti : 0,
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 1
          nome: "Barletta fc",  
          puntiFatti : 0,
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 1
          nome: "Bayern Monaco",  
          puntiFatti : 0,
          falliSubiti : 0,
    },
    {
        // Proprietà oggetto
        // nome, punti fatti, falli subiti SQUADRA 1
          nome: "Lecce",  
          puntiFatti : 0,
          falliSubiti : 0,
    },
  
]
// stampo in console gli oggetti
for (let key in squadre){
    console.log(squadre[key]);
    
}

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.


// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
