import React from 'react';
import logo from './logo.svg';
import './App.css';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let subMap = new Map();
    'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .forEach(letter => {
        let subIndex = Math.random() * alphabet.length;
        let substitute = alphabet.charAt(subIndex);
        subMap.set(letter, substitute);
        alphabet = alphabet.split(substitute).join('');
      });
    this.state = {
      value: '',
      subValue: '',
      map: subMap
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    let subValue = event.target.value
      .split('')
      .map(l => {
        let lowerCase = l.toLocaleLowerCase();
        let isLower = l === lowerCase;
        let r = this.state.map.get(lowerCase);
        if (null != r) {
          return isLower ? r : r.toLocaleUpperCase();
        } else {
          return l;
        }
      })
      .join('');
    this.setState({
      value: event.target.value,
      subValue: subValue
    });
  }

  // handleSubmit(event) {
  //   alert('A phrase was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea id="text-field" type="text" value={this.state.value} onChange={this.handleChange} /><br/>
        <p>
          {this.state.subValue}
        </p>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cool React App</h1>
        <p>
          Tired of your words making sense? Want to really inconvenience a friend trying to read your chat messages? Look no further! Filter your dull, mundane texts through a magical cypher!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <TextForm />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
