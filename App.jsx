import alexasImg from './assets/alexas.jpg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <img
        src={alexasImg}
        alt="Alexas"
        className="main-image"
      />
      <h1 className="main-title">Imágenes gratis</h1>
      <a
        href="https://pixabay.com/es/"
        target="_blank"
        rel="noopener noreferrer"
        className="explore-button"
      >
        Explore imágenes gratis
      </a>
    </div>
  );
}

export default App;
