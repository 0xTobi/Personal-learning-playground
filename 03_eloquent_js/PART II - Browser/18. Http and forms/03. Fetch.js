var count = 0;

function cc(card) {
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        count++;
    } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        count--;
    }

    var holdBet = (count > 0) ? "Bet" : "Hold" 

    return `${count} ${holdBet}`;
}



























var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "trcks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "trcks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1425": {
        "artist": "Prince",
        "trcks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
}









function updateRecords(id, prop, value) {
    var ids = Object.keys(collection)
    for (let value of ids) {
        if (value == id) {
            collection[value].prop = value;
        }
    }
    return collection
}