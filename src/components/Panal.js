import { useState } from "react";

function Panal(){
    const path = process.env.PUBLIC_URL;
    const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
    const deg = 360/arr.length;
    const btnStyle = {position: 'fixed', top:0, left:0};

    let [names, setNames] = useState(arr);

    const changeState=()=>{
        let newArr = [...arr]; //배열 복사
        newArr[0] = 'Escape'; // 복사한 배열의 첫번째 값을 ''로 변경
        setNames(newArr); // 변경한 배열을 setNames에 배치

        console.log(newArr);
        console.log(arr);
    }
    
    
    return(
        <>
        <button style={btnStyle} onClick={changeState}>button</button>
        <section>
            {
            names.map((data,index)=>{
                let style = {transform:`rotate(${deg*index}deg) translateY(-100vh)`};
                let imgSrc = `${path}/img/${data}.jpg`;

                    return(
                        <article key={index} style={style}>
                            <div className="inner">
                                <div className="pic">
                                    <img src={imgSrc} />
                                </div>
                                <h2>{data}</h2>
                            </div>
                        </article>
                    )
                })
            }
            </section>
        </>
    )
}

export default Panal;