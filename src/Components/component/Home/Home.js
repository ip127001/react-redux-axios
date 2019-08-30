import React, {Component} from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Home.css';

import * as actionCreators from '../../Store/action';

class Home extends Component {
    componentWillMount() {
        console.log(this.props.data)
        if(!this.props.data[0]) {
            this.props.getTournamentdata();
        }
    }

    render() {
        let redirect = null;
        if(!this.props.auth) {
            redirect = <Redirect to="/" />
        }
        let showLeagues;

        if(this.props.data[0]) {
            showLeagues = (
                <div> 
                    {this.props.data.map(el => {
                        return (
                            <div className="card" key={el.code}>
                                <div className="row">
                                    <div className="column" style={{width: "26%"}}>
                                        <img src={el.completedLogo} alt='arena' width="80px" height="60px" />
                                    </div>
                                    <div className="column" style={{width: "74%"}}>
                                        <p><b>{el.name}</b></p>
                                        <p style={{width: "100%", fontSize: "12px", color: "#5e5c5c"}}>start: {new Date(this.props.data[0].startTimestamp).toDateString()} | end: {new Date(this.props.data[0].endTimestamp).toDateString()}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="column">
                                        <p><b>Game</b></p>
                                        <p style={{fontSize: "14px", color: "#5e5c5c"}}>{el.gameName}</p>
                                    </div>
                                    <div className="column">
                                        <p><b>Total Price</b></p>
                                        <p style={{fontSize: "14px", color: "#5e5c5c"}}>Rs.{el.totalWinnings}</p>
                                    </div>
                                    <div className="column">
                                        <p><b>Entry Fee</b></p>
                                        <p style={{fontSize: "14px", color: "#5e5c5c"}}>Rs.{el.entryFee}</p>
                                    </div>

                                    <div className="column" style={{width: "80%", margin: "5% 10%"}}>
                                        <div className="myProgress">
                                            <div className="myBar" style={{width: `${el.currentPlayers}%`}}></div>
                                        </div>
                                        <p style={{fontSize: "14px"}}>{el.currentPlayers}:<b>Players Joined</b>  |  <b>Total Spots:</b>{el.totalPlayers}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            );
        } else {
            showLeagues = null;
        }

        return (
            <div>
                {redirect}
                <h2>Open Leagues</h2>
                {showLeagues}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.dataArr,
        auth: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTournamentdata: () => dispatch(actionCreators.receiveTournamentData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);