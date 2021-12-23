import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { privateRoute } from '../../redux/actions'
import { Button } from '../commons/Button'

import './routLogin.style.scss'

const RoutLogin = () => {
    const dispatch = useDispatch()
    const intl = useIntl();

    const entrance = () => dispatch(privateRoute(true))

    return (
        <div className='login'>
            <Link to='/users'>
                <Button
                    onClick={entrance}
                    btnText={intl.formatMessage({ id: "Log in" })}
                    className='button'
                />
            </Link>
        </div>
    )
}

export default RoutLogin
