import { useState } from "react";
import "./App.css";
import Portfolio from "./components/filter/Portfolio";
import Store from "./components/layouts/Store";

function App() {
  const [selected, setSelected] = useState('Portfolio');
  const btns = ["Portfolio", "Layouts"].map((el, index) => {
    return (
      <button
        className={el === selected ? "btn styled" : "btn"}
        onClick={()=>{setSelected(el)}}
        key={index}
      >
        {el}
      </button>
    );
  });
  return (
    <div className="App">
      <div className="tollbar">{btns}</div>
      {selected==="Portfolio" ? <Portfolio />:''}
      {selected==="Layouts" ? <Store/> :''}
    </div>
  );
}

export default App;
