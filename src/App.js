import React from "react";
import QuoteForm from "./features/quotes/QuoteForm.js";
import Quotes from "./features/quotes/Quotes.js";

function App() {
  return (
    <div className="container-fluid">
      <div
        className="row title justify-content-center"
        style={{ paddingTop: "12px" }}
      >
        <h1>Quote Maker</h1>
      </div>
      <hr />
      <QuoteForm />
      <Quotes />
    </div>
  );
}

export default App;
