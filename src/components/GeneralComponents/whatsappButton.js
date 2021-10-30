import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import "../../styles/Home/whatsappbutton.scss"
import useScrollPosition from '../../utils/hooks'

function WhatsappButton() {
    const scrollPosition = useScrollPosition()
    const scrollHeight =  document.body.clientHeight - window.screen.height
    return (
        <div>
            <a 
                rel="noreferrer" 
                href="https://api.whatsapp.com/send?phone=+5491165183514&text=Hola!%20Vi%20tu%20pagina%20y%20estoy%20interesado/a%20en%20comprar%20un%20colch%C3%B3n" 
                className={`btn-wsp ${scrollPosition > (scrollHeight-100) && 'fixTop'}`} 
                target="_blank">
                <ImWhatsapp className="whatsapp-icon" />
            </a>
        </div>
    )
}

export default WhatsappButton
