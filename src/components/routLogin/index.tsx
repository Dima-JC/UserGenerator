import { Link } from 'react-router-dom'

import { Button } from '../commons/Button'

import './routLogin.style.scss'

const RoutLogin = () => {
    return (
        <div className='login'>
            <Link to='/users'>
                <Button
                    btnText='Log in'
                    className='button'
                />
            </Link>
        </div>
    )
}

export default RoutLogin
