function Panal(){
    return(
        <article key={index}>
            <div className="inner">
                <div className="pic">
                    <img src={`${path}/img/${data}.jpg`} />
                </div>
                <h2>{data}</h2>
            </div>
        </article>
    )
}

export default Panal;