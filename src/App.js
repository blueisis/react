import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Panal from './components/Panal.js';
import Btns from './components/Btns.js';
import Footer from './components/Footer.js';
import { useRef } from 'react';
// import img1 from './img/blizzards.jpg';

function App() {
  const frame = useRef(null);
  return (
    <div className="App">
      {/* 전체 레이아웃  */}
      <figure>
        <Logo />
        <Menu />
        <section ref={frame}>
          <Panal />
        </section>
        <Btns frame={frame}/>
        <Footer />
      </figure>
    </div>
  );
}

export default App;