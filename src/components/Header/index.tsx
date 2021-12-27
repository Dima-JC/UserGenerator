import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import SideBar from '../SideBar'
import { LOCALES } from '../../intl/locales'
import { privateRoute } from '../../redux/selectors'
import { setLanguage } from '../../redux/actions'
import { BORDER_LANGUAGE, SWITCH_LANGUAGE } from '../../constants/style.colors'

import Logo from '../ascets/img/svg/logo.svg'
import './header.style.scss'

const Select = styled.select`
    width: 150px;
    height: 30px;
    margin-right: 30px;
    padding: 0 4px;
    border: 1px solid ${BORDER_LANGUAGE};
    box-sizing: border-box;
    border-radius: 8px;
    color: ${SWITCH_LANGUAGE};
    font-size: 12px;
    background: linear-gradient(45deg,#a8edeac4,#f7c1d294);
    cursor: pointer;
    
    :hover {
        box-shadow: 0px 0px 11px 5px rgb(255 255 255 / 61%);
    }

    @media (max-width: 445px) {
        margin-right: 0px;
    }
`;

const Header = () => {
    const dispatch = useDispatch()
    const isPrivate = useSelector(privateRoute)

    const changelanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(LOCALES[event.target.value]))
    }

    const optionMap = (item: string) => {
        return (
            <option
                key={item}
                value={item}>
                {item}
            </option>
        )
    }

    const mappedItems = useMemo(() => Object.keys(LOCALES).map(optionMap), [LOCALES])

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
                <Select onChange={changelanguage}>
                    {mappedItems}
                </Select>
            </div>
        </header>
    )
}

export default Header
