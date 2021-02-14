import React from 'react'

function OddPlayers(props) {
    let [first, , third, , fifth] = props.item
    return (
        <div>
            <p> first: {first}</p>
            <p> third: {third}</p>
            <p> fifth: {fifth}</p>
        </div>
    )
}

export default OddPlayers
