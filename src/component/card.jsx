import css from './cardstyle.module.css';

function Card({imgUrl, text1}){
    return(
        <div className={css["card"]}>
            <img src={imgUrl} alt="" />
            <p>{text1}</p>
        </div>
    )
}
function Card1({imgUrl, text1}){
    return(
        <div className={css["card1"]}>
            <img src={imgUrl} alt="" />
            <p>{text1}</p>
        </div>
    )
}
function Card2({imgUrl, text1, btn}){
    return(
        <div className={css["card2"]}>
            <img src={imgUrl} alt="" />
            <p>{text1}</p>
            <button>{btn}</button>
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