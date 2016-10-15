function issueChallenge(theyWhoChallenge, theyWhoAreChallenged) {
    return {
        type: 'ISSUE_CHALLENGE',
        payload: {
            challenger: theyWhoAreChallenged,
            challenged: theyWhoAreChallenged
        }
    };
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

export { issueChallenge, declareWinner };