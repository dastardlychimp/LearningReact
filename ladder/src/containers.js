import { connect } from 'react-redux'
import * as components from './components'
import * as actions from './actions'

function mapStateToProps (state) {
    return state;
}

function mapDispatchToProps() {
    return {
        challenge: challenger => dispatch(actions.challenge(challenger)),
        issueChallenge: challenged => dispatch(actions.issueChallenge(challenged)),
        results: (winner, loser) => declareWinner(winner, loser)
    }
}

const playerList = connect(mapStateToProps, mapDispatchToProps)(components.playerList);

export { playerList }