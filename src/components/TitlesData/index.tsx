import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';

import { addUserInfo, getData, isActiveButton, namberUsersData } from "../../redux/actions";
import { stateSelector } from "../../redux/selectors";
import { Data } from "../../interfaces";
import Loader from "../Loader";

import './titlesData.stayle.scss'

const TitlesData = () => {
    const { 
        receivedData, isLoading, 
        numberUsers, isDataFetchError 
    } = useSelector(stateSelector)
    
    const dispatch = useDispatch()

    const addInfoIser = (item: Data) => {
        dispatch(isActiveButton('/user_info'))
        dispatch(addUserInfo([item]))
    }

    function onScrollList(event: React.UIEvent<HTMLElement>) {
        const scrollBottom = (event.target as HTMLElement).scrollTop
            + (event.target as HTMLElement).offsetHeight
            === (event.target as HTMLElement).scrollHeight;

        if (scrollBottom) {
            dispatch(namberUsersData(numberUsers + 1))
        }
    }

    useEffect(() => {
        dispatch(getData(numberUsers))
    }, [numberUsers])

    const mappedData = (item: Data) => {
        const className = item.gender === 'female'
            ? 'male'
            : 'female';
        return (
            <div key={uuid()} className='users_cart' onClick={() => addInfoIser(item)} >
                <Link to='/user_info' className={'cartUser ' + className}>
                    <div className='cartUser_img'>
                        <img
                            src={item.picture.large}
                            alt="alt"
                            className={'img_' + className}
                        />
                    </div>
                    <div className='cartUser_info'>
                        <p><FormattedMessage id='last name' />
                            : {item.name.last}
                        </p>
                        <p><FormattedMessage id='first name' />
                            : {item.name.first}
                        </p>
                        <p><FormattedMessage id='gender' />
                            : <FormattedMessage id={item.gender} />
                        </p>
                        <p><FormattedMessage id='Date Birth' />
                            : {item.dob.date.slice(0, 10)}
                        </p>
                    </div>
                </Link>
            </div>
        )
    }

    const dataMap = useMemo(() => (receivedData as Data[]).map(mappedData), [receivedData])

    if (isDataFetchError) return <div className='erorr'>Error!</div>

    return (
        <>
            {!isLoading
                ? <Loader />
                : <div 
                    className='users' 
                    onScroll={event => onScrollList(event)}
                >
                    {dataMap}
                </div>
            }
        </>
    )
}

export default TitlesData;
