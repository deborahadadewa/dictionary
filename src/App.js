import logo from './logo.png';
import Dictionary from './Dictionary'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> 
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer"><small>Coded by <a href="https://github.com/deborahbotchwey/dictionary">Deb</a></small></footer>
      </div>
    </div>
  );
}
