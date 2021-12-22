import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getData, privateRoute } from '../../redux/actions'
import { Button } from '../commons/Button'

import './routLogin.style.scss'

const RoutLogin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])

    // useEffect(() => {
    //     document.addEventListener('scroll', (e: any) => scrollHandler(e))
    //     return function () {
    //         document.addEventListener('scroll', (e: any) => scrollHandler(e))
    //     }
    // }, [])
    
    // const scrollHandler = (event: any) => {
    //     if (event.target.documentElement.scrollHeight
    //         - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {  
    //             console.log(12);      
    //     }
    // }

    const entrance = () => dispatch(privateRoute(true))
    const intl = useIntl();

    

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
