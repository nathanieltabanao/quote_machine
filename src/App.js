import './App.css';
import {React, Component} from 'react';
import QuoteBox from './quote-box';
import quoteData  from './quotes.json';

const quotes = quoteData.quotes;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      quote: '',
      author: '',
    };
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getQuote = (id) => {
     return quotes.filter(q => (
      q.id === id
    ))
    .map(q => ({
      id: q.id,
      quote: q.quote,
      author: q.author
    }))
    
  }

  render(){
      console.log("test: " + this.getQuote(1));
      console.log(quotes.length);
      return (
        <div className="App">
          <div className="Main grid-container">
            <QuoteBox {...this.state} newQuote={this.getQuote}/>
          </div>
        </div>
      );
    
  }
}

export default App;