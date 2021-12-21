function Panal(){
    const path = process.env.PUBLIC_URL;
    const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
    const deg = 360/arr.length;
    
    return(
        <>
            {
            arr.map((data,index)=>{
                    return(
                        <article key={index} style={{transform:`rotate(${deg*index}deg) translateY(-100vh)`}}>
                            <div className="inner">
                                <div className="pic">
                                    <img src={`${path}/img/${data}.jpg`} />
                                </div>
                                <h2>{data}</h2>
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}

export default Panal;