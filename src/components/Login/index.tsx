import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { USERS } from '../../constants/path'

import { activeButton, setIsPrivateRoute } from '../../redux/actions'
import { Button } from '../commons/Button'

import './routLogin.style.scss'

const Login = () => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl();

    const entrance = () => {
        dispatch(setIsPrivateRoute(true))
        dispatch(activeButton('/users'))
        localStorage.setItem('isAuth', 'true')
    }

    return (
        <div className='login'>
            <Link to={USERS}>
                <Button
                    onClick={entrance}
                    btnText={
                        formatMessage({ id: "Log in" })
                    }
                    className='button'
                />
            </Link>
        </div>
    )
}

export default Login
