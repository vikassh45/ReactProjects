import React from 'react'

function EvenPlayers(props) {
    let [, second, , fourth, , sixth] = props.item
    return (
        <div>
            <p>second: {second}</p>
            <p> fourth: {fourth}</p>
            <p>sixth:  {sixth}</p>
        </div>
    )
}

export default EvenPlayers
