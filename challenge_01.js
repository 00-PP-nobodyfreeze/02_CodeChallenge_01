
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Zahl 1 und Zahl 2 als Variablen deklarieren
let zahl1, zahl2;

// Zahl 1 eingeben
zahl1 = parseFloat(prompt("Geben Sie die 1. Zahl ein:"));

// Zahl 2 eingeben
zahl2 = parseFloat(prompt("Geben Sie die 2. Zahl ein:"));

// Rechenschritt anzeigen und Summe der beiden Zahlen berechnen
let summe = zahl1 + zahl2;
console.log("Rechenschritt: " + zahl1 + " + " + zahl2 + " = " + summe);

// Summe in die Konsole ausgeben
console.log("Die Summe der Zahlen ist: " + summe);
