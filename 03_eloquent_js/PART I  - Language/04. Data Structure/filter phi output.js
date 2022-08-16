// This code filters out only events with correlation greater than 0.1 or lesser than -0.1, o we can easily spot larger correlations.
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL)); 
    if (correlation > 0.1 || correlation < -0.1) {    // If correlation is greater than 0.1 or lesser than -0.1:
      console.log(event + ":" , correlation)          // Output correlation.
    }
}



