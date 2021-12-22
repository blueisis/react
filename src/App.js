import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Panal from './components/Panal.js';
import Btns from './components/Btns.js';
import Footer from './components/Footer.js';
import { useRef } from 'react';
// import img1 from './img/blizzards.jpg';

function App() {
  const frame = useRef(null); // 가상의 돔을 담는 것 useRef
  return (
    <div className="App">
      {/* 전체 레이아웃  */}
      <figure>
        <Logo />
        <Menu />
        <section ref={frame}> 
        {/* useRef(null) null 에 section을 담음. / console.log 찍어보면 curreunt(null) -> curreunt(section) */}
          <Panal />
        </section>
        <Btns frame={frame}/> 
        {/* props로 컴포넌트 Btns.js로 ref={frame}값을 보냄 => section */}
        <Footer />
      </figure>
    </div>
  );
}

export default App;