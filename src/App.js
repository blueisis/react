import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <figure>
        <h1>
          <strong>DCODELAB</strong><br />
          <span>UX/UI DESIGN & DEVELOPMENT</span>
        </h1>

        <a href="#" className="menu">
          <i className="fas fa-bars"></i>
        </a>

        <Footer />
      </figure>
    </div>
  );
}

export default App;