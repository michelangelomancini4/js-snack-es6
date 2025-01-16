// Creare un array di oggetti:
//  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

let biciclette =[
    {
        // Proprietà oggetto
        // Nome e peso bicicletta 1
          nome: "Mountain bike",  
          peso : 17 ,
    },
    {
        // Proprietà oggetto
        // Nome e peso bicicletta 2
          nome: "Bicicletta elettrica (ebike)",  
          peso : 20 ,
    },
    {
        // Proprietà oggetto
        // Nome e peso bicicletta 3
          nome: "Bici da pista",  
          peso : 12 ,
    },
    {
        // Proprietà oggetto
        // Nome e peso bicicletta 4
          nome: "BMX",  
          peso : 14 ,
    },
    {
        // Proprietà oggetto
        // Nome e peso bicicletta 5
          nome: "Bici da triathlon",  
          peso : 15 ,
    },
    
]
// stampo in console gli oggetti
for (let key in biciclette){
    console.log(biciclette[key]);
    
}

// creo la variabile per bicicletta con peso minore
let biciclettaLeggera = biciclette[0];

// ciclo per trovare bicicletta con peso minore
for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciclettaLeggera.peso) {
        
        biciclettaLeggera = biciclette[i];
    }

}
// stampo in console il risultato
console.log("La bicicletta con il peso minore è:", biciclettaLeggera.nome , 'Peso:',biciclettaLeggera.peso,'kg')

//  richiamo variabile per stampare a schermo

const outputElement= document.getElementById ('outputelement')

//  Stampo a schermo la bici con peso minore.
outputElement.innerText= "La bicicletta con il peso minore è:"+ biciclettaLeggera.nome + 'Peso:'+biciclettaLeggera.peso+'kg';