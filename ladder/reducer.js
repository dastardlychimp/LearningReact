const challengeSpread = 2;

const initialState = {
    playerOrder: [
        'Geoff',
        'Stephen',
        'Joe',
        'Anonymous'
    ],
    pendingChallenge: false,
    challenger: false,
    challenged: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'DECLARE_CHALLENGE':
            return challenge(state, action);
        case 'RESULTS':
            return results(state, action);
        default:
            return state:
    }
}

function results(state, action) {
    let order = state.playerOrder;
    const winner = action.winner;
    const loser = action.loser;
    order = moveLoserDown();
    order = moveWinnerUp();
    return Object.assign({}, state, {
        playerOrder: order,
        pendingChallenge: false
    });

    function moveLoserDown(order, loser) {
        const loserIndex = order.indexOf(loser);
        if (loserIndex + 1 !== order.length) {
            order.move(loserIndex, loserIndex + 1)
        }
        return order;
    }
    function moveWinnerUp(order, winner, loser) {
        const winnerIndex = order.indexOf(winner);
        const loserIndex = order.indexOf(loser);
        if (winnerIndex - 1 >= 0) {
            order.move(winnerIndex, loserIndex - 1);
        }
        return order;
    }
}

function challenge(state, action) {
    return Object.assign({}, state, {
        pendingChallenge: true,
        challenger: action.challenger,
        challenged: action.challenged
    });
}

Array.prototype.move = function (oldIndex, newIndex) {
    if (newIndex >= this.length) {
        let neededSpots = newIndex - this.length;
        for (let i = 0; i < neededSpots; ++i) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(oldIndex, 1)[0]);
    return this;
}
/*
current reorder rules are:
    1. loser moves down a level switching with person below.
    2. Winner moves above loser.

A
B
C
D
E

D beats C
A
B
D
C
E

D beats B
A
C
D
B
E
*/