import css from './cardstyle.module.css';

function Card({imgUrl, text1}){
    return(
        <div className={css["card"]}>
            <img  className='animate__animated animate__backInDown' src={imgUrl} alt="" />
            <p className='animate__animated animate__bounceInLeft'>{text1}</p>
        </div>
    )
}
function Card1({imgUrl, text1}){
    return(
        <div className={css["card1"]}>
            <img  className='animate__animated animate__lightSpeedInLeft' src={imgUrl} alt="" />
            <p  className='animate__animated animate__backInDown'>{text1}</p>
        </div>
    )
}
function Card2({imgUrl, text1, btn}){
    return(
        <div className={css["card2"]}>
            <img className='animate__animated animate__rotateInDownRight' src={imgUrl} alt="" />
            <p className='animate__animated animate__rollIn'>{text1}</p>
            <button className='animate__animated animate__zoomInRight'>{btn}</button>
        </div>
    )
}
function Card3({number, text1}){
    return(
        <div className={css["card3"]}>
            <div className={css["number"]}>
                <p>{number}</p>
            </div>
            
            <div className={css["text1"]}>
                <p>{text1}</p>
            </div>
            
        </div>
    )
}

export {Card, Card1, Card2, Card3}