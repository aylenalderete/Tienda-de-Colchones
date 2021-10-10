import sliderprueba from "../../assets/sliderprueba.jpg"
import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider6.jpg"
import "../../styles/Home/sliderprueba.scss"

function Sliderprueba() {
    return (
        <div className="slider">
            <ul>
                <li><img alt='slider_1' src={sliderprueba} /></li>
                <li><img alt='slider_2' src={slider1} /></li>
                <li><img alt='slider_3' src={slider2} /></li>
                <li><img alt='slider_4' src={sliderprueba} /></li>
            </ul>
        </div>
    )
}

export default Sliderprueba
