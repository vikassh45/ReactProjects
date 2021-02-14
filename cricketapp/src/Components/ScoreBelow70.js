import React, { Component } from 'react'

class ScoreBelow70 extends Component {
    render() {
        const Below70 = []
        {
            this.props.item.map((player) => {
                if (player.score < 70) {
                    Below70.push(player);
                }
            })
        }
        return (
            <div>
                {Below70.map(
                    (player) => {
                        return (
                            <div>
                                <p> Mr.{player.name}<span> {player.score}</span></p>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default ScoreBelow70;


