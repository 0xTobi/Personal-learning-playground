//  - To store important information, crows are known to duplicate it across nests. 
//  - That way, when a hawk destroys a nest, the information isn’t lost. 
//  - To retrieve a given piece of information that it doesn’t have in its own storage bulb, a nest computer might consult random 
//    other nests in the net work until it finds one that has it.

requestType("storage", (nest, name) => storage(nest, name)); 
function findInStorage(nest, name) { 
    return storage(nest, name).then(found => { 
        if (found != null) return found;
        else return findInRemoteStorage(nest, name);
    }); 
}
function network(nest) { 
    return Array.from(nest.state.connections.keys());
}
function findInRemoteStorage(nest, name) { 
    let sources = network(nest).filter(n => n != nest.name); 
    function next() { 
        if (sources.length == 0) { 
            return Promise.reject(new Error("Not found"));
        } else { 
            let source = sources[Math.floor(Math.random() * sources.length)];
            sources = sources.filter(n => n != source); 
            return routeRequest(nest, source, "storage", name) 
            .then(value => value != null ? value : next(), next);
        } 
    } 
    return next();
}