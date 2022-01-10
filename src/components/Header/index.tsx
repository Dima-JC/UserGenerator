import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBar from '../sideBar'
import { LOCALES } from '../../intl/locales'
import { privateRoute } from '../../redux/selectors'
import { setLanguage } from '../../redux/actions'

import Logo from '../ascets/img/svg/logo.svg'
import './header.style.scss'

const Header = () => {
    const dispatch = useDispatch()
    const isPrivate = useSelector(privateRoute)

    const changelanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(LOCALES[event.target.value]))
    }

    const mappedItems = (item: string) => {
        return (
            <option
                key={item}
                value={item}>
                {item}
            </option>
        )
    }

    const mapItems = useMemo(() => Object.keys(LOCALES).map(mappedItems), [LOCALES])

    return (
        <header className='header'>
            <div className='header_logo'>
                <img
                    src={Logo}
                    alt="alt"
                    className="header_logo-img"
                />
            </div>
            <div className='header_buttons'>
                {isPrivate
                    ? <SideBar />
                    : ''
                }
                <select className='select' onChange={changelanguage}>
                    {mapItems}
                </select>
            </div>
        </header>
    )
}

export default Header
