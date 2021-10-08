import '../../styles/GeneralComponents/card.scss'

const Card = ({
    img = '',
    title = '',
    description = '',
    price = '',
    style = {},
    cardAction = () => {},
    buttons = [],
    imgStyle = {},
}) => {
    return (
        <div className="card__container" style={style} onClick={cardAction}>
            {img && (
                <div className="card__img--container">
                    <img style={imgStyle} src={img} alt='Imagen'/>
                </div>
            )}
            {title && (
                <div className="card__title--container">
                    <h4>{title}</h4>
                </div>
            )}
            {description && (
                <div className="card__description--container">
                    <p>{description.slice(0, 50)}{description.length > 50 && '...'}</p>
                </div>
            )}
            {price && (
                <div className="card__price--container">
                    <span>${price}</span>
                </div>
            )}
            {buttons.length > 0 && (
                <div className="card__buttons--container">
                    {buttons.map(({label, action}) => (
                        <button className="card__buttons" onClick={() => action()}>
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Card;