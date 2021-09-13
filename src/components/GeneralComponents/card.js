import '../../styles/GeneralComponents/card.scss'

const Card = ({
    img = '',
    title = '',
    description = '',
    price = 0,
    buttons = []
}) => {
    return (
        <div className="cardContainer">
            {img && (
                <div className="imgContainer">
                    <img src={img}/>
                </div>
            )}
            {title && (
                <div className="titleContainer">
                    <h4>{title}</h4>
                </div>
            )}
            {description && (
                <div className="descriptionContainer">
                    <p>{description}</p>
                </div>
            )}
            {price && (
                <div className="priceContainer">
                    <span>{price}</span>
                </div>
            )}
            {buttons.length > 0 && (
                <div className="buttonsContainer">
                    {buttons.map(({label, action}) => (
                        <button onClick={() => action()}>
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Card;