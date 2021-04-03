import './App.css';
import {React, Component} from 'react';
//import QuoteBox from './quote-box';
import quoteData  from './quotes.json';

const quotes = quoteData.quotes;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.getRandomInt(),
      quote: '',
      author: '',
    };
  }

  getRandomInt = () => {
    const min = Math.ceil(1);
    const max = Math.floor(1639);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateQuote = () => {
    let q = quotes
    .filter(q => (
      q.id===this.getRandomInt()
    ))
    .map(qu => ({
      id: qu.id,
      quote: qu.quote,
      author: qu.author,
    }))
    console.log('value of q: ',q);
    console.log('before setState state: ',this.state);
    this.setState({
      author: q[0].author,
      quote: q[0].quote,
      id: q[0].id,
    })
    console.log('updated state: ',this.state);
    console.log('value of q after state update: ',q);
    console.log('value of q id after state update: ',q[0]);
  }

  tweetQuote = () => {

  }

  render(){
      return (
        <div className="App">
          <div className="Main grid-container">
          <div id="quote-box">
                  <p id='text' key={this.id}>"{this.state.quote}"</p>
                  <p id='author'>- {this.state.author}</p>
                  <div className="row">
                    <button id='new-quote' className="btn" onClick={this.updateQuote}>New Quote</button>
                    <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'><button className="btn">Tweet Button</button></a>
                  </div>
            </div>
          </div>
        </div>
      );
    
  }
}

export default App;