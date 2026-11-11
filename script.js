// Uppgift 2 ----------------------------------------------------------------------------------------
{
  var d6Dice = 3;
  console.log(d6Dice);
}
console.log(d6Dice);

{
  let d8Dice = 5;
  console.log(d8Dice);
}
//console.log(d8Dice); Går inte att använda, får error eftersom den bara är deklarerad i sitt block

{
  const d12Dice = 10;
  console.log(d12Dice);
}
//console.log(d12Dice); Går inte att använda, får error eftersom den bara är deklarerad i sitt block
/*
    Från början var 'var' det enda sättet att deklarera en variabel, men hur det var designat och hur man använde
    sig av 'var' var krångligt och lätt att man fick fel. 'var' kan också deklareras globalt vart man än sätter den,
    vilket gör att man också kan komma åt den både utanför och inifrån ett block,
    det är också möjligt att ändra värdet på en 'var'.
    För modernare och en bättre lösning använder man sig a 'let' i stället, 'let' deklareras på det stället man vill
    använda sig av det till exempel i ett block där det stoppas av {}. 
    'let' går precis som 'var' att ändra värdet på. 'let' kan man också deklarera utan ett värde, 
    till exempel let d8Dice; och sedan tilldela den ett värde när det behövs.
    'const' fungerar som let hur man kan placera det och hur man kommer åt den, men till skillnad från 'let'
    så kan man inte ändra på en const och man måste deklarera ett värde på den skapas, 
    som till exempel let d12Dice; kommer inte fungera, men d12Dice = 10;.

    Som kommentarer ovan så kan man inte skriva ut 'let' och 'const' utanför sitt block, utan man måste
    använda sig av dom inom sitt område. 'var' där emot går att komma åt vart man vill oavsett om man
    deklarerat den i ett block.
*/

// Uppgift 3 ----------------------------------------------------------------------------------------
