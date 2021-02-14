import React from 'react'


function ListOfPlayers(props) {
    const players = props.item.map(player => (
        <div>
            <p>Mr. {player.name} {player.score}</p>

        </div>
    ))

    return (
        <div>
            {players}
        </div>
    )
}

export default ListOfPlayers

