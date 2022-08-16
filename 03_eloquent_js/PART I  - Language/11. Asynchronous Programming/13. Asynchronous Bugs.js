// - When your program runs synchronously, in a single go, there are no state changes happening except those that the program itself 
//   makes. For asynchronous programs this is different—they may have gaps in their execution during which other code can run.

function anyStorage(nest, source, name) { 
    if (source == nest.name) return storage(nest, name); 
    else return routeRequest(nest, source, "storage", name); 
}

async function chicks(nest, year) { 
    let list = ""; 
    await Promise.all(network(nest).map(async name => { 
        list += `${name}: ${ 
            await anyStorage(nest, name, `chicks in ${year}`)
        }\n`; 
    })); 
    return list;
}

//  - The async name => part shows that arrow functions can also be made async by putting the word async in front of them.

//  - The function is seriously broken!
//  - The problem lies in the += operator, which takes the current value of list at the time where the statement starts executing and 
//    then, when the await finishes, sets the list binding to be that value plus the added string.



