import React from 'react'

function Player (props) {
    return (
        <div className="playerWrapper">
            <img className="playerImage" src="images/{this.props.image}"/>
            <span className="playerName">{props.playerName}</span>
        </div>
    )
}

function PlayerList (props) {
    const { playerOrder: players } = props;
    return (
        <div className="playerList">
        {
            players.map((player) => {
                <Player playerName={player}/>
            })
        }
        </div>
    )
}