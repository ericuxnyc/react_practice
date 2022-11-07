import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);
/*
function App() {
  return (
    /!*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*!/
  );
}
*/

// export default App;
