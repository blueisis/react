import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';
import Panal from './components/Panal.js';
// import img1 from './img/blizzards.jpg';

function App() {
  return (
    <div className="App">
      {/* 전체 레이아웃  */}
      <figure>
        <Logo />
        <Menu />
        <Panal />
        <Footer />
      </figure>
    </div>
  );
}

export default App;