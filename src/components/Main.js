import React from 'react'
import { Profile } from './Profile'
import nba from 'nba'

window.nba = nba;

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {}
    }

    //nba.stats.playerInfo *GET*
    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((response) => {
                (console.log("playerInfo", response));
                let playerInfo = Object.assign(
                    {}, 
                    response.commonPlayerInfo[0],
                    response.playerHeadlineStats[0]
                );
                this.setState({playerInfo});
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo = {this.state.playerInfo} />
                <div>ShotChart</div>
            </div>
        );
    }
}