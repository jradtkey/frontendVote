import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div style={{'text-align': 'center'}}>
          <img src="vote.jpg" height="96" alt="JaredRadtkey.com"></img>
          <br />
          <h2>What is your favorite frontend framework in 2018?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-2 offset-xs-3 col-sm-2 offset-sm-3 col-md-2 offset-md-3 col-lg-2 offset-lg-3">
              <img src="angular.svg" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-md-2">
              <img src="logo.svg" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-md-2">
              <img src="vuejs.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
