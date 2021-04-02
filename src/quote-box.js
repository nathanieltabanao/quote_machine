function QuoteBox (props){
    const {quote, author, newQuote} = props;
    return(
        <div id="quote-box">
                  <p id='text'>"{quote}"</p>
                  <p id='author'>- {author}</p>
                  <div className="row">
                    <button id='new-quote' className="btn" onClick={() =>newQuote(2)}>New Quote</button>
                    <a id='tweet-quote' href='null'><button className="btn">Tweet Button</button></a>
                  </div>
            </div>
    )
}

export default QuoteBox;