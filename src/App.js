import logo from "./book.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="logo-img">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            This project is coded by
            <a href="https://github.com/RanaMohammadi/dictionary-project">
              Rana Mohammadi
            </a>{" "}
            hosted on
            <a
              href="https://superlative-meerkat-05d685.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
