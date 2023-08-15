import { useEffect, useState } from "react";

function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch("https://type.fit/api/quotes").then(res => res.json()).then(json => {
            setQuote(json[0]);
            setQuotes(json)
        })

    }, [])
    function getNewQuote() {
        setQuote(getRandomQuote(quotes));
      }
    return (
        <>
         <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
          <span>"</span>
        </h3>
        <i>- {quote?.author}</i>
        </>
    )
}

export default Quotes;