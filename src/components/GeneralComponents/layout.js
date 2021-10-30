import { Link } from 'react-router-dom';
import durmili from '../../assets/durmili.jpeg'
import { HiMenu } from 'react-icons/hi'
import '../../styles/GeneralComponents/layout.scss'
import { useState } from 'react';
import WhatsappButton from './whatsappButton';
import Navlinks from './navlinks';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import { logout } from '../../database/auth';


const Layout = ({
    icon = true,
    searchBar = true,
    nav = true,
    children = <h2>pasale el children gil</h2>,
    footer = true
}) => {
    const {isLogged} = useSelector(state => state.user)
    const [inputValue, setInputValue] = useState('')
    const [burgerStatus, setBurgerStatus] = useState({active: false, open: false})    
    const history = useHistory()
    
    const handleKeyDown = ({ keyCode }) => {
        if (keyCode !== 13) return null;
        else {     
            history.push(`/productos?search=${inputValue}`)
        }
    };

    const burgerOpen = (open) => {
        if(open){
            setBurgerStatus({...burgerStatus, active: true})
            setTimeout(() => setBurgerStatus({active: true, open: true}), 100)
        } else {
            setBurgerStatus({...burgerStatus, open: false})
            setTimeout(() => setBurgerStatus({open: false, active: false}), 100)
        }
    }

    return (
        <main className="layout__main">
            <header className='layout__header'>
                {icon && (
                    <div className="layout__header--iconContainer">
                        <Link to='/'>
                            <img alt='icon' src={durmili} />
                        </Link>
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
                        {isLogged && (
                            <>
                                <li>
                                    <ul className="layout__header--navContainer_ul"><Link to='/admin'>Admin</Link></ul>
                                </li>
                                <li>
                                    <ul onClick={() => logout()} className="layout__header--navContainer_ul">Cerrar sesión</ul>
                                </li>
                            </>
                        )}
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
                    <div tabIndex="0" onBlur={() => burgerOpen (false)} className="menu-btn">
                        <HiMenu onClick={()=>burgerOpen (!burgerStatus.active)} className="menu-btn__burger "/>
                    </div>
                }
                { burgerStatus.active && <Navlinks open={burgerStatus.open} />}
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
                <div className="layout__footer--createdBy">
                    <small>
                        Hecho por: <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/aylenalderete/'>Aylén Alderete</a>
                    </small>
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