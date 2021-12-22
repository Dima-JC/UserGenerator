import { useEffect, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUserInfo } from "../../redux/actions";
import { dataSelector, isLoading } from "../../redux/selectors";

import './titlesData.stayle.scss'

const TitlesData = () => {
    const selector = useSelector(dataSelector).data.results
    const loading = useSelector(isLoading)
    const dispatch = useDispatch()
    const addInfoIser = (item: any) => dispatch(addUserInfo([item]))

    const mappedData = (item: any) => {
        const className = item.gender === 'female'
            ? 'male'
            : 'female';
        return (
            <div key={item.login.uuid} onClick={() => addInfoIser(item)} >
                <Link to='/user_info' className={'cartUser ' + className}>
                    <div className='cartUser_img'>
                        <img src={item.picture.large} alt="alt" className='img' />
                    </div>
                    <div className='cartUser_info'>
                        <p><FormattedMessage id='last name' /> - {item.name.last}</p>
                        <p><FormattedMessage id='first name' /> - {item.name.first}</p>
                        <p><FormattedMessage id='gender' /> - {item.gender}</p>
                        <p><FormattedMessage id='Date Birth' /> - {item.dob.date.slice(0, 10)}</p>
                    </div>
                </Link>
            </div>
        )
    }

    const dataMap = useMemo(() => selector.map(mappedData), [selector])

    return (
        <>
            {!loading
                ? 'Loading'
                : <div className='users' >{dataMap}</div>
            }
        </>
    )
}

export default TitlesData;


