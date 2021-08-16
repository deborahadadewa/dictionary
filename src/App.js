import Dictionary from './Dictionary'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> 
          <h1 className="title">dictionary</h1>
           <i className="fas fa-book-open App-logo"></i> 
        </header>
        <main>
          <Dictionary defaultKeyword="forest"/>
        </main>
        <footer className="App-footer"><small>Coded by <a href="https://github.com/deborahbotchwey/dictionary" rel="noreferrer" target="_blank">Deb</a></small></footer>
      </div>
    </div>
  );
}
