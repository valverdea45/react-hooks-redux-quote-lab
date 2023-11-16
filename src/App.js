import React from "react";
import Quotes from "./features/quotes/Quotes"
import QuoteForm from "./features/quotes/QuoteForm"
import { useDispatch } from "react-redux";
import { addQuote, upvoteQuote } from "./features/quotes/quotesSlice";

function App() {

  const dispatch = useDispatch()

  const quote = {
    content: "test quote",
    author: "test author",
    votes: 0,
    id: 1,
  };

  dispatch(addQuote(quote))

  dispatch(upvoteQuote(1))

  return (
    <div className="container-fluid">
      <div
        className="row title justify-content-center"
        style={{ paddingTop: "12px" }}
      >
        <h1>Quote Maker</h1>
      </div>
      <hr />
      <QuoteForm/>
      <Quotes/>

    </div>
  );
}

export default App;
