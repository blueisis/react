import { useState } from "react/cjs/react.development";
const deg = 45;

function Btns(props){

  let [index, setIndex] = useState(0);

  function plus(evt){
    setIndex(++index);
    props.frame.current.style.transform = `rotate(${index*deg}deg)`;
  }

  function minus(evt){
    setIndex(--index);
    props.frame.current.style.transform = `rotate(${index*deg}deg)`;
  }  

  return(
    <>
      <span className="btnPrev" onClick={e=> plus(e)}>prev</span>
      <span className="btnNext" onClick={e=> minus(e)}>next</span>
    </>
  )
}

export default Btns;