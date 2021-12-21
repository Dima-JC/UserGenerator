import Logo from '../ascets/img/png/logo.png'

import './header.style.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header_logo'>
                <img src={Logo} alt="alt" className="header_logo-img" />
            </div>
            <div className="header_rout-button">
                <button>button</button>
                <button>button</button>
                <button>button</button>
            </div>
        </header>
    )
}

export default Header
