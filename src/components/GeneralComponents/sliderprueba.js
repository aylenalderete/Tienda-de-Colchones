import sliderprueba from "../../assets/sliderprueba.jpg"
import "../../styles/Home/sliderprueba.scss"

function Sliderprueba() {
    return (
        <div className="slider">
            <ul>
                <li><img src={sliderprueba} /></li>
                <li><img src={sliderprueba} /></li>
                <li><img src={sliderprueba} /></li>
                <li><img src={sliderprueba} /></li>
            </ul>
        </div>
    )
}

export default Sliderprueba
