// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar />
      <Hero />
      <Card />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       {/* </header> */}
  
     </div>
  );
}

export default App;
