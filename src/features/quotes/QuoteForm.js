import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const [formData, setFormData] = useState({
    content: "",
    author: ""
  });
  
  const dispatch = useDispatch();

  function handleChange(event) {
    // Handle Updating Component State
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    const newQuoteData = {...formData, id: uuid}
    // Pass quote object to action creator
    dispatch(addQuote(newQuoteData))
    // Update component state to return to default state
    setFormData({
      content: '',
      author: ''
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      onChange={handleChange}
                      className="form-control"
                      id="content"
                      name="content"
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="author"
                      id="author"
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
