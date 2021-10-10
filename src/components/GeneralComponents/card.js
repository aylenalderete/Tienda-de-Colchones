import '../../styles/GeneralComponents/card.scss'

const Card = ({
    img = '',
    title = '',
    description = '',
    descriptionMaxLength = 50,
    price = '',
    style = {},
    cardAction = () => {},
    buttons = [],
    imgStyle = {},
}) => {
    const renderDescription = (text) => {
        let element;
        text = description.length > descriptionMaxLength ? text.slice(0, 50) : text
        if(text.includes('\n')){
            element = text.split('\n').map((el) => (<>{el} <br></br> </>))
        }
        return element;
    }

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
                    <p>{renderDescription(description)}{description.length > descriptionMaxLength && '...'}</p>
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