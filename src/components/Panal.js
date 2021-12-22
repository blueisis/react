import { useState } from "react";

function Panal(){
    const path = process.env.PUBLIC_URL;
    const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
    const deg = 360/arr.length;
    const btnStyle = {position: 'fixed', top:0, left:0};


    /*
        배열로(arr) 했을땐 이름은 바뀌지만 사진은 안바뀜.
        대신
        useState hook을 이용하여 state로 자주 변경되는 값을 관리 가능
        state값이 변경되면 해당 state값의 영향을 받는 모든 jsx가 자동으로 재랜더링.
        useState() 함수에 관리할 값을 인수로 넣어서 실행하면 리턴으로 배열값이 반환됨.
        첫번째 배열 반환값에는 state(해당 함수 arr)
        두번째 배열 반환값에는 해당 state를 변경할 수 있는 함수

        state 값의 변경은 무조건 state 변경 함수로만 가능. 기본 배열 X
    */

    //useState 함수로 arr을 인수값으로 넣고 names란 변수에는 state값을 받고
    // setNames 변수에는 수정 함수값 저장.
    let [names, setNames] = useState(arr);

    //이벤트에 등록할 함수 정의
    const changeState=()=>{
        let newArr = [...arr]; //기존 배열을 전개연산자를 이용해 새로운 배열로 복사
        newArr[0] = 'Escape'; // 복사한 배열의 첫번째 값을 ''로 변경
        setNames(newArr); // setNames 라는 state 변경 전용함수로 위에서 변경한 배열을 setNames에 배치
        // 해당 함수가 실행되면 state값이 변경되면서 해당 state를 활용한 모든 가상 DOM에 반영되어 재랜더링 됨.
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