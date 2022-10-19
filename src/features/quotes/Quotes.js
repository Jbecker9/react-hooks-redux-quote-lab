import React from "react";
import { useSelector } from "react-redux";
import QuoteCard from "./QuoteCard";

function Quotes() {

  const quoteState = useSelector((quotes) => quotes)

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            { quoteState.quotes.map((quote) => <QuoteCard quote={quote} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
