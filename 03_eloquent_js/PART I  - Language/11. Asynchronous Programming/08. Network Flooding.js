//  - The fact that nests can talk only to their neighbors greatly inhibits the usefulness of this network. 
//  - For broadcasting information to the whole network, one solution is to set up a type of request that is automatically forwarded 
//    to neighbors. 
//  - These neighbors then in turn forward it to their neighbors, until the whole network has received the message.




import {everywhere} from "./crow-tech"; 

everywhere(nest => { 
    nest.state.gossip = [];
});
function sendGossip(nest, message, exceptFor = null) { 
    nest.state.gossip.push(message); 
    for (let neighbor of nest.neighbors) { 
        if (neighbor == exceptFor) continue;        // Skips the source of the message
        request(nest, neighbor, "gossip", message);
    }
}

requestType("gossip", (nest, message, source) => { 
    if (nest.state.gossip.includes(message)) return; 
    console.log(`${nest.name} received gossip '${ message}' from ${source}`);
    sendGossip(nest, message, source);
});

//  - To avoid sending the same message around the network forever, each nest keeps an array of gossip strings that it has already seen. 
//  - To define this array, we use the "everywhere" function—which runs code on every nest, to add a property to the nest’s state object, 
//    which is where we’ll keep nest-local state.

//   - When a nest receives a duplicate gossip message, which is very likely to happen with everybody blindly resending them, 
//     it ignores it. But when it receives a new message, it excitedly tells all its neighbors except for the one who sent it the message. 
//   - This will cause a new piece of gossip to spread through the network like an ink stain in water. 

//   - This style of network communication is called FLOODING. 
//   - it floods the network with a piece of information until all nodes have it.


