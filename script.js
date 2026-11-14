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
    1. Från början var 'var' det enda sättet att deklarera en variabel, men hur det var designat och hur man använde
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

    2. Som kommentarer ovan så kan man inte skriva ut 'let' och 'const' utanför sitt block, utan man måste
    använda sig av dom inom sitt område. 'var' där emot går att komma åt vart man vill oavsett om man
    deklarerat den i ett block.
*/

// Uppgift 3 ----------------------------------------------------------------------------------------

const add = (num1, num2) => num1 + num2;
console.log(add(12, 33));
/*
  1. Om man använder 'let' istället för 'const' så kan man ändra add till något annat, 
  till exempel så kanske man råkar skriva add = "Hej", och då blir add en sträng med hej i stället.
  
  2. add som en funktion i stället:
  function add(num1, num2) { return num1 + num2; }

  3. När en funktion returnerar något som 'return' är det ett värde som funktionen skickar tillbaka till
  anroparen och att funktionen är avslutad. Funktionen körs inte längre men värdet den skickat
  kan fortsätta användas beroende på vart den lagras.
*/

// Uppgift 4 ----------------------------------------------------------------------------------------

// Använder add2 här istället för att komentera bort add funktionen ovan, för att hålla isär uppgifterna.
const add2 = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? "truthy" : "falsy");

  if (
    num1 !== null &&
    num1 !== undefined &&
    typeof num1 === "number" &&
    num2 !== null &&
    num2 !== undefined &&
    typeof num2 === "number"
  ) {
    return num1 + num2;
  } else {
    return "Input är felaktig.";
  }
};
console.log(add(45, 17));

/*
  1. En ternary är en kompakt form av ett vilkor som till exempel en if sats med ett boolean uttryck.
  Det består av tre delar: ett vilkor två blooean vilkor truthy och falsy. Det första vilkoret är det man 
  vill kolla, det i sin tur följs av ett ? och sedan ens sanna eller falska uttryck separerad med ett :.
  Om vilkort är sant kommer man skriva ut det som står först och om det är falskt kommer det att skriva ut
  det som kommer sist, detta måste inte vara truthy or falsy, utan kan vara till exempel:
  let temperature = (temp <= 20) ? "Kallt" : "Varmt"; där en temperatur under eller lika med 20 kommer att visa kallt och över visa varmt.

  2. En jämnförelse med två == gör en lös jämnförelse som försöker typomvandla för att kunna gör jämnförelsen, 
  som till exemmpel om man jämnför en int 5 och en string "5": 5 == "5" så kommer resultatet att bli true.
  Om man istället gör jämnförelsen med === istället så kommer den göra en strick jämnförelse, 
  samma exempel som ovan, men 5 === "5" kommer att resultera i false istället.

  3. Jag försökte först att kolla både null och undefined för num1 på engång: num1 !== (null && undefined), detta gick inte.
  Den vill tydligen att man ska deklarera num1 varje gång man ska kolla den. Så då får jag lov att kolla num1
  med både num1 !== null && num1 !== undefined, !== används eftersom jag inte vill att dom ska vara null vilket === hade gjort.
  Nu har jag löst dom första två och måste kolla vilken typ den är, så jag kollade upp hur man skriver en typeof och 
  kollade typeof num1 med console.log(typeof num1) och fick number i retur. Nu blev det lite detektiv arbete efter som
  att skriva oftype num1 === number funkar inte. typeof returnera typen som en string så då måste man kolla typeof num1 === "number"
  för att det skulle fungera. Jag valde att kolla alla värden med === i stället för == då jag inte visste om några problem 
  skulle missas vid användandet med enbart ==. För att det ska bli rätt i if satsen behöver vi använda och(&&) efter varje koll,
  efter som vi vill att alla vilkor ska vara true för att returnera num1 + num2, är något av vilkoren false kommer vi att
  returnera "Input är felaktig." i stället.
*/

// Uppgift 5 ----------------------------------------------------------------------------------------

const num1 = 0;
let arg1;
let sum = false;

console.log("Test 1: " + add2(sum, 1));
console.log("Test 2: " + add2("0", 3));
console.log("Test 3: " + add2(3, "num1"));
console.log("Test 4: " + add2(-5, num1));
console.log("Test 5: " + add2(arg1, 7));
console.log("Test 6: " + add2());
console.log("Test 7: " + add2(10, 25));

console.log("Skriv ut num1: " + num1);
console.log("skriv ut sum: " + sum);

/*
  1. 
  Variabel: är ett namngiven behållare som håller ett värde som till exempel let num1 = 11;.
  Parameter: är det man vill att en funktion ska ta emot och vill använda, s
  om till exempel const add = (num1, num2) =>, där num1 och num2 är parametrarna.
  Argument: är de värden vil vill skicka in när man anroppar en funktion som till exemple add(11, 22) där 11 är num1 och 22 är num2 som funktionen vill ha.

  2. num1 kommer att skrivas ut som 0, efter som vi inte kallar på den lokala num1 i funktionen så kommer vi att använda det globala num1 vilket är const num1 = 0;.

  3.
  Test 4: Vi har num1 = -5 och num2 = num1 vilket är 0.
  num1 == 0 vilket är -5 == 0 : blir false efter som -5 inte är lika med noll.
  num2 === "0" vilket är 0 === "0" : blir false eftersom en strickt koll inte konverterar int till string eller vice versa.
  num2 === 0 vilket är 0 === 0 : blir true efter som 0 är lika med 0.
  num1 == NaN vilket är -5 == NaN : blir false efter som -5 is-a-number och inte not-a-number.
  num1 ? "truthy" : "falsy" : blir truthy efter som -5 är ett värde som inte är NaN eller 0(förstår inte riktigt varför 0 inte räknas).
  För if satsen så är varken num1 eller num2 inte null, inte undefined och båda är ett number så den kommer att skriva ut -5 + 0 = -5.
  Test 1: Returnerar: Input är felaktigt, eftersom sum är en boolean och inte ett number.
  Tets 2: Returnerar: Input är felaktigt, eftersom "0" är en string och inte ett number.
  Tets 3: Returnerar: Input är felaktigt, eftersom "num1" är en string och inte ett number.
  Test 5: Returnerar: Input är felaktigt, eftersom arg1 inte har något värde d.v.s. undefined.
  Test 6: Returnerar: Input är felaktigt, eftersom vi inte skickar med någont värde d.v.s. undefined
  Test 7: Returnerar: 35, eftersom båda argumenten är numbers så adderar funktion dem och returnerar resultatet.
*/
