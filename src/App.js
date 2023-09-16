import React, { useState } from "react";
import "./App.css";
import UrlForm from "./Layout/UrlForm";
import Display from "./Layout/Display";

function App() {
  const [items, setItems] = useState([]);
  console.log(process.env)
  const setResponseItems = (items) => {
    setItems(items);
    console.log(items, typeof items);
  };

  return (
    <div className="App">
      <section className="form-section">
        <UrlForm setItems={setResponseItems} />
      </section>
      <section className="display-section">
        <Display items={items || []} />
      </section>
    </div>
  );
}

export default App;
