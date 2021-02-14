import React from 'react'
import ListOfPlayers from './ListOfPlayers'
import OddPlayers from './OddPlayers';
import ScoreBelow70 from './ScoreBelow70'
import EvenPlayers from './EvenPlayers';
function Home() {


    const arr = [
        {
            name: 'Jack',
            score: 50
        },
        {
            name: 'Michael',
            score: 70
        },
        {
            name: 'John',
            score: 40
        },
        {
            name: 'Ann',
            score: 61
        },
        {
            name: 'Elisabeth',
            score: 61
        },
        {
            name: 'Sachin',
            score: 95
        },
        {
            name: 'Dhoni',
            score: 100
        },
        {
            name: 'Virat',
            score: 84
        },
        {
            name: 'Jadeja',
            score: 64
        },
        {
            name: 'Raina',
            score: 75
        },
        {
            name: 'Rohit',
            score: 80
        }

    ]
    const IndianTeam = ['Rohit', 'Virat', 'Sachin', 'Dhoni', 'Rahul', 'Vikas', 'Raina'];

    function indianPlayerList() {
        const T20Players = ['first player', 'second player', 'third player']
        const RanjiTrophyPlayers = ['fourth player', 'fifth player', 'sixth player']
        const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers]
        const players = IndianPlayers.map(player => (
            <div>
                <p>{player}</p>

            </div>
        ))

        return (
            <div>
                {players}
            </div>
        )

    }
    let flag = false
    if (flag == true) {
        return (
            <div style={{ float: "left" }}>
                <h3>List of Players</h3>
                <ListOfPlayers item={arr} />
                <h3>List of Players score below 70</h3>
                <ScoreBelow70 item={arr} />
            </div>
        )
    }
    else {
        return (
            <div style={{ float: "left" }}>
                <h3>List Of Odd Players</h3>
                <OddPlayers item={IndianTeam} />
                <h3>List of Even Players</h3>
                <EvenPlayers item={IndianTeam} />
                <h3>Indian Players</h3>
                {indianPlayerList()}
            </div>
        )
    }
}

export default Home
