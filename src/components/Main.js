import React from 'react'
import { Profile } from './Profile'
import nba from 'nba'
import { DataViewContainer } from './DataViewContainer';
import { SearchBar } from './SearchBar';
// import {DEFAULT_PLAYER_INFO} from '../constants';

window.nba = nba;

export class Main extends React.Component {
    state = {
        // playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: nba.players[Math.floor(Math.random()*540)],
        // playerInfo: DEFAULT_PLAYER_INFO,
    }

    //nba.stats.playerInfo *GET*
    componentDidMount() {
        // this.loadPlayerInfo(nba.players[Math.floor(Math.random()*540)].fullName);
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    loadPlayerInfo = (playerName) => {
        // console.log("loadPlayerInfo", playerName);
        const { playerId } = nba.findPlayer(playerName);

        nba.stats.playerInfo({ PlayerID: playerId })
            .then((response) => {
                // (console.log("playerInfo", response));
                let playerInfo = Object.assign(
                    {},
                    response.commonPlayerInfo[0],
                    response.playerHeadlineStats[0]
                );
                this.setState({ playerInfo });
            })
            .catch(console.log);
    }
    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo} />
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerInfo.playerId} />
                </div>
            </div>
        );
    }
}