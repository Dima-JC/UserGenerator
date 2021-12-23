import { useMemo } from 'react'
import styled from 'styled-components'

import SideBar from '../SideBar'
import { BORDER_LANGUAGE, SWITCH_LANGUAGE } from '../../constants/style.colors'
import { LOCALES } from '../../intl/locales'
import { Language } from '../../interfaces'

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
    @media (max-width: 445px) {
        margin-right: 0px;
    }
`;

interface Props {
    setLocale: React.Dispatch<React.SetStateAction<Language>>;
}

const Header = ({ setLocale }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const local: Record<string, string> = {
            value: LOCALES[event.target.value],
            name: event.target.value
        }

        setLocale(local)
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
                <SideBar />
                <Select onChange={handleChange}>
                    {mappedItems}
                </Select>
            </div>
        </header>
    )
}

export default Header
