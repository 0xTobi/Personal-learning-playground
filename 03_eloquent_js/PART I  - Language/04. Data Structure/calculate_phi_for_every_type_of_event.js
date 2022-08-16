for (let event of journalEvents(JOURNAL)) {       // Let event = journalEvents(JOURNAL)[0]........if i < journalEvents(JOURNAL).length, then increase i by 1, which triggers the loop to jump to the next event in journalEvents(JOURNAL).
    console.log(event + ":", phi(tableFor(event, JOURNAL)));        // event e.g (pizza):  + phi function which operates on the tableFor function which produces a 2 X 2 table of the event in relation to the squirrel transformations.
}




let theNumber = Number(prompt("Pick a number")); 
if (Number.isNaN(theNumber)) { 
    console.log("You entered an invalid number");
} else {
    console.log(`Your number is the square root of ${theNumber * theNumber}.`)
}


function evenNumbers(range) {
    for (let i=0; i <= range; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
} 

function evenNumbers(range) {
    let i = 0
    while (i < range) {
        console.log(i)
        i += 2
   }
} 