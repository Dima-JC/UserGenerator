import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { isActiveButton, privateRoute } from '../../redux/actions'
import { Button } from '../commons/Button'

import './routLogin.style.scss'

const Login = () => {
    const dispatch = useDispatch()
    const intl = useIntl();

    const entrance = () => {
        dispatch(privateRoute(true))
        dispatch(isActiveButton('/users'))
        localStorage.setItem('privateRoute', 'true')
    }

    return (
        <div className='login'>
            <Link to='/users'>
                <Button
                    onClick={entrance}
                    btnText={
                        intl.formatMessage({ id: "Log in" })
                    }
                    className='button'
                />
            </Link>
        </div>
    )
}

export default Login
