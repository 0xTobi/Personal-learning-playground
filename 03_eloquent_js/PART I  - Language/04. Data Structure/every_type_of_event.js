function journalEvents(journal) {           // Defines a function with name "journalEvents"
let events = [];                          // event list is empty at start
for (let entry of journal) {              // let entry = journal[0]..........if i < journal.length then increase i by 1, which triggers the loop to move to the next entry.
   for (let event of entry.events) {      // let event = entry.events[0]........if j < events.length then increase j by 1, which triggers the loop to jump to the next event under that entry.
      if (!events.includes(event)) {      // If event is not included in our newly defined events array, then;
         events.push(event);              // push event to the to the events array.
      }
    }
  }
return events; 
}
console.log(journalEvents(JOURNAL));


