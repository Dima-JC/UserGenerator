import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import SideBar from '../sideBar'
import { BORDER_LANGUAGE, SWITCH_LANGUAGE } from '../../constants/style.colors'
import { LOCALES } from '../../intl/locales'

import Logo from '../ascets/img/png/logo.png'
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
`;

interface Props {
    setLocale: React.Dispatch<React.SetStateAction<any>>;
}

const Header = ({ setLocale }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const local: Record<string, string> = {
            value: LOCALES[event.target.value],
            name: event.target.value
        }
        setLocale(local)
    }

    const itemsMap = (item: string) => {
        return (
            <option
                key={item}
                value={item}>
                {item}
            </option>
        )
    }

    const mappedItems = useMemo(() => Object.keys(LOCALES).map(itemsMap), [LOCALES])

    return (
        <header className='header'>
            <div className='header_logo'>
                <img src={Logo} alt="alt" className="header_logo-img" />
            </div>
            <div className='header_buttons'>
                <SideBar />
                <Select onChange={handleChange}>
                    {mappedItems}
                </Select>
            </div>
        </header>
    )
}

export default Header
