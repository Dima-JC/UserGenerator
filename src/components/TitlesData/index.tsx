import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';

import { addUserInfo, getData, namberUsersData } from "../../redux/actions";
import { dataSelector, isLoading, numberUsers } from "../../redux/selectors";
import { Data } from "../../interfaces";

import './titlesData.stayle.scss'

const TitlesData = () => {
    const selectorData = useSelector(dataSelector)
    const loading = useSelector(isLoading)
    const countUsers = useSelector(numberUsers)
    const dispatch = useDispatch()

    const addInfoIser = (item: Data) => {
        dispatch(addUserInfo([item]))
    }

    function onScrollList(event: React.UIEvent<HTMLElement>) {
        const scrollBottom = (event.target as HTMLElement).scrollTop
            + (event.target as HTMLElement).offsetHeight
            === (event.target as HTMLElement).scrollHeight;

        if (scrollBottom) {
            dispatch(namberUsersData(countUsers + 1))
        }
    }

    useEffect(() => {
        dispatch(getData(countUsers))
    }, [countUsers])

    const mappedData = (item: Data) => {
        const className = item.gender === 'female'
            ? 'male'
            : 'female';
        return (
            <div key={uuid()} onClick={() => addInfoIser(item)} >
                <Link to='/user_info' className={'cartUser ' + className}>
                    <div className='cartUser_img'>
                        <img
                            src={item.picture.large}
                            alt="alt"
                            className='img'
                        />
                    </div>
                    <div className='cartUser_info'>
                        <p><FormattedMessage id='last name' />
                            - {item.name.last}
                        </p>
                        <p><FormattedMessage id='first name' />
                            - {item.name.first}
                        </p>
                        <p><FormattedMessage id='gender' />
                            - {item.gender}
                        </p>
                        <p><FormattedMessage id='Date Birth' />
                            - {item.dob.date.slice(0, 10)}
                        </p>
                    </div>
                </Link>
            </div>
        )
    }

    const dataMap = useMemo(() => selectorData.map(mappedData), [selectorData])

    return (
        <>
            {!loading
                ? 'Loading'
                : <div className='users' onScroll={event => onScrollList(event)}>
                    {dataMap}
                </div>
            }
        </>
    )
}

export default TitlesData;
