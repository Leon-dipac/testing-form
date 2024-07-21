import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      {/* Header Component : */}
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

      {/* Contact Form Component : */}
      <h1> Contact Me....</h1>
      <ContactForm />

      {/* Footer Component : */}
    </div>
  );
}

export default App;
