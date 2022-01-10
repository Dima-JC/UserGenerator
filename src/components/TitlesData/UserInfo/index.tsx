import { useMemo } from 'react'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'

import { userInfoSelector } from '../../../redux/selectors'
import { Data } from '../../../interfaces'

import './userInfo.style.scss'

const UserInfo = () => {
    const data = useSelector(userInfoSelector)

    const mappedItems = (item: Data) => {
        return (
            <div className='userInfo_cart' key={item.login.uuid}>
                <div className="userInfo_cart__photo">
                    <img src={item.picture.large} alt="alt" />
                </div>
                <div className="userInfo_cart__info">
                    <p><FormattedMessage id='name' />
                        : {item.name.last}</p>
                    <p><FormattedMessage id='first' />
                        : {item.name.first}</p>
                    <p><FormattedMessage id='phone' />
                        : {item.phone}</p>
                    <p><FormattedMessage id='age' />
                        : {item.dob.age}</p>
                    <p><FormattedMessage id='Date Birth' />
                        : {item.dob.date.slice(0, 10)}</p>
                    <p> <FormattedMessage id='email' />
                        : {item.email} </p>
                    <p><FormattedMessage id='gender' />
                        : <FormattedMessage id={item.gender} /></p>
                    <p><FormattedMessage id='username' />
                        : {item.login.username}</p>
                    <p><FormattedMessage id='uuid' />
                        : {item.login.uuid}</p>
                </div>
            </div>
        )
    }

    const mapItems = useMemo(() => (data as Data[]).map(mappedItems), [data])

    return (
        <>
            <div className='userInfo'>
                {(data as Data[]).length === 0
                    ? <p className='warning'>
                        <FormattedMessage id="no users info" />
                    </p>
                    : mapItems
                }
            </div>
        </>
    )
}

export default UserInfo
