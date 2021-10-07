import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);

class App extends Component {
  state = {
    value1: value1,
    value2: value2,
    value3: value3,
    correctAnswer: (value1 + value2 + value3),
    proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
    numCorrect: 0,
    numQuestions: 0
  }
  regenerateNumbers = () => {
    this.setState((prevState) => ({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      correctAnswer: (prevState.value1 + prevState.value2 + prevState.value3),
      proposedAnswer: Math.floor(Math.random() * 3) + prevState.value1 + prevState.value2 + prevState.value3,
      numQuestions: prevState.numQuestions + 1
    }))
  }
  correctAnswer = () => {
    this.setState((prevState) => ({
      numCorrect: prevState.numCorrect + 1
    }))
    this.regenerateNumbers();
  }
  checkAnswer = (option) => {
    (option === true) ? (
      (this.state.proposedAnswer === this.state.correctAnswer) ? this.correctAnswer() : this.regenerateNumbers()
    ) : (this.state.proposedAnswer !== this.state.correctAnswer) ? this.correctAnswer() : this.regenerateNumbers()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
