import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';
import Panal from './components/Panal.js';
// import img1 from './img/blizzards.jpg';


const path = process.env.PUBLIC_URL;
const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];


function App() {
  return (
    <div className="App">
      {/* 전체 레이아웃  */}
      <figure>
        <Logo />
        <Menu />

        <section>
          {
            arr.map((data,index)=>{
              return <Panal />
            })
          }
        </section>

        <Footer />
      </figure>
    </div>
  );
}

export default App;