function issueChallenge(challenged) {
    return {
        type: 'ISSUE_CHALLENGE',
        payload: {
            challenged: challenged
        }
    };
}

function challenge(challenger) {
    return {
        type: 'CHALLENGE',
        payload: {
            challenger: challenger
        }
    }
}

function declareWinner(winner, loser) {
    return {
        type: 'RESULTS',
        payload: {
            winner: winner,
            loser: loser
        }
    }
}

export { issueChallenge, declareWinner, challenge };