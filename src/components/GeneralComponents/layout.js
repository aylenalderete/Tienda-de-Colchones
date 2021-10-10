import { Link, NavLink } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import SuaveStarIcon from '../../assets/suavestarIcon.png'
import { HiMenu } from 'react-icons/hi'
import hamburguerMenu from "../../assets/hamburguerMenu.png"
import '../../styles/GeneralComponents/layout.scss'
import { useState } from 'react';
import WhatsappButton from './whatsappButton';
import Navlinks from './navlinks';
import { useHistory, useLocation } from "react-router";


const Layout = ({
    icon = true,
    searchBar = true,
    nav = true,
    children = <h2>pasale el children gil</h2>,
    footer = true
}) => {

    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false)
    const history = useHistory()


    const handleKeyDown = ({ keyCode }) => {
        if (keyCode !== 13) return null;
        else {     
            history.push(`/productos?search=${inputValue}`)
        }
    };

    return (
        <main className="layout__main">
            <header className='layout__header'>
                {icon && (
                    <div className="layout__header--iconContainer">
                        <img src={SuaveStarIcon} />
                    </div>
                )}
                {nav && (
                    <nav className="layout__header--navContainer">
                        <li>
                            <ul className="layout__header--navContainer_ul"><Link to='/'>Inicio</Link></ul>
                        </li>
                        <li>
                            <ul className="layout__header--navContainer_ul"><Link to='/productos'>Productos</Link></ul>
                        </li>
                        <li>
                            <ul className="layout__header--navContainer_ul"><Link to='/ContactoMayorista'>Contacto mayorista</Link></ul>
                        </li>
                        <li>
                            <ul className="layout__header--navContainer_ul"><Link to='/admin'>Admin</Link></ul>
                        </li>
                    </nav>
                )}
                {searchBar && (
                    <div className="layout__header--SearchBarContainer">
                        <input 
                            type="search"
                            placeholder='¿Qué está buscando?'
                            onChange={({target:{value}}) => setInputValue(value)} 
                            onKeyDown={handleKeyDown}
                            value={inputValue}
                        />
                    </div>
                )}
                {
                    <div className="menu-btn">
                        <HiMenu onClick={()=>setOpen(!open)} className="menu-btn__burger "/>
                    </div>
                }
                { open && <Navlinks />}
            </header>
            <section className='layout__section'>
                {children}
            </section>
            <div>
            <WhatsappButton />
            </div>
            <footer className='layout__footer'>
                <div className="layout__footer--links">
                    <Link to='/'>
                        Inicio
                    </Link>
                    <Link to='/productos'>
                        Productos
                    </Link>
                    <Link to='/ContactoMayorista'>
                        Contacto mayorista
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default Layout;

export const Grid = ({
    children,
    height = '18rem',
    width = '17rem',
    align = 'center',
    spacing = 'center',
    className=''
}) => {

    const styles = {
        display: 'grid',
        gridGap: '1rem',
        gap: '1rem',
        width: '100%',
        justifyItems: spacing,
        alignItems: align,
        gridAutoRows: height,
        gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${width}), 1fr))`
    }

    return (
        <div className={`grid__container ${className}`} style={styles} >            
            {children}
        </div>
    )
}