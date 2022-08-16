//  - If a given node wants to talk to a single other node, flooding is not a very efficient approach. 
//  - Especially when the network is big, that would lead to a lot of useless data transfers. 
//  - An alternative approach is to set up a way for messages to hop from node to node until they reach their destination.


requestType("connections", (nest, {name, neighbors}, source) => {
    let connections = nest.state.connections;
    if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors)) return; 
    connections.set(name, neighbors); 
    broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) { 
    for (let neighbor of nest.neighbors) { 
        if (neighbor == exceptFor) continue; 
        request(nest, neighbor, "connections", { 
            name, 
            neighbors: nest.state.connections.get(name) 
        }); 
    }
}

everywhere(nest => { 
    nest.state.connections = new Map; 
    nest.state.connections.set(nest.name, nest.neighbors); 
    broadcastConnections(nest, nest.name);
});

// - The comparison uses JSON.stringify because ==, on objects or arrays, will return true only when the two are the exact same value, 
//   which is not what we need here. Comparing the JSON strings is a crude but effective way to compare their content.

// - The findRoute function searches for a way to reach a given node in the network. 
// - But instead of returning the whole route, it just returns the next step. 
// - That next nest, using its current information about the network, will decide where it sends the message.

function findRoute(from, to, connections) { 
    let work = [{at: from, via: null}]; 
    for (let i = 0; i < work.length; i++) { 
        let {at, via} = work[i]; 
        for (let next of connections.get(at) || []) { 
            if (next == to) return via; 
            if (!work.some(w => w.at == next)) { 
                work.push({at: next, via: via || next});
            } 
        }
    }
    return null;
}

//  - Now we can build a function that can send long-distance messages. 
//  - If the message is addressed to a direct neighbor, it is delivered as usual. 
//  - If not, it is packaged in an object and sent to a neighbor that is closer to the target, using the "route" request type, 
//    which will cause that neighbor to repeat the same behavior.

function routeRequest(nest, target, type, content) { 
    if (nest.neighbors.includes(target)) { 
        return request(nest, target, type, content);
    } else { 
        let via = findRoute(nest.name, target, nest.state.connections);
        if (!via) throw new Error(`No route to ${target}`); 
        return request(nest, via, "route", {target, type, content});
    } 
}

requestType("route", (nest, {target, type, content}) => { 
    return routeRequest(nest, target, type, content);
});


//  - We’ve constructed several layers of functionality on top of a primitive communication system to make it convenient to use. 
//  - This is a nice (though simplified) model of how real computer networks work.

