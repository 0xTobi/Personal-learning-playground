let journal = [] // Empty journal book
function addEntry(events, squirrel) {
    journal.push(events, squirrel); //this expression pushes values into the property names.
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false)     // journal[0]
addEntry(["work", "ice cream", "cauli flower", "lasasgna", "touched tree", "brushed teeth"], false)     // journal[1]
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)      // journal[2]

// console.log(journal)



var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];



// This function calculates the Phiof a given 2 X 2 table
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
  (table[0] + table[1]) *
  (table[1] + table[3]) *
  (table[0] + table[2]));
}
//console.log(phi([76, 9, 4, 1]));



// This function generates a 2 X 2 table for an event e.g ("pizza")
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];                           // Declares an empty table, that will be filled later on.
  for (let i = 0; i < journal.length; i++) {          // Checks whether i is less than the length of the journal. If yes, then i is increased by 1.
      let entry = journal[i], index = 0;              // Equates entry to journal.
      if (entry.events.includes(event)) index += 1;   // If the specified event e.g ("pizza") is present in the event property, increase the index value by 1.
      if (entry.squirrel) index += 2;                 //
      table[index] += 1;                              // The index value is used to locate an element in the table array, then that element is increased by 1.
  }
  return table;
}
// console.log(tableFor("pizza", JOURNAL));                // Calculates how many times the "pizza" value appears in a specific journal data entry determined by the journal[i].



// This functions finds every type of event that happend and stores them in the "events" array.
function journalEvents(journal) {           // Defines a function with name "journalEvents"
  let events = [];                          // event list is empty at start
  for (let entry of journal) {              // let entry = journal[0]..........if i < journal.length then increase i by 1, which triggers the loop to move to the next entry.
     for (let event of entry.events) {      // let event = entry.events........if j < events.length then increase j by 1, which triggers the loop to jump to the next event under that entry.
        if (!events.includes(event)) {      // If event is not included in our newly defined events array, then;
           events.push(event);              // push event to the to the events array.
        }
      }
    }
  return events; 
}
console.log(journalEvents(JOURNAL));



// This code calculates the phi of each event in the journalEvents(JOURNAL) array.
for (let event of journalEvents(JOURNAL)) {       // Let event = journalEvents(JOURNAL)[0]........if i < journalEvents(JOURNAL).length, then increase i by 1, which triggers the loop to jump to the next event in journalEvents(JOURNAL).
   
  // console.log(event + ":", phi(tableFor(event, JOURNAL)));        // event e.g (pizza):  + phi function which operates on the tableFor function which produces a 2 X 2 table of the event in relation to the squirrel transformations.
}



// This code filters out only events with correlation greater than 0.1 or lesser than -0.1, o we can easily spot larger correlations.
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL)); 
  if (correlation > 0.1 || correlation < -0.1) {    // If correlation is greater than 0.1 or lesser than -0.1:
    console.log(event + ":" , correlation)          // Output correlation.
  }
}