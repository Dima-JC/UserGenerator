import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions";
import { dataSelector } from "../../redux/selectors";
import { GET } from "../../requests";
import styled from 'styled-components';

import './titlesData.stayle.scss'

const TitlesData = () => {

    const genderColor = '#01baef';

    const UserCard = styled.div`
        width: 200px;
        height: 315px;
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: solid silver 2px;
        border-radius: 10px;
        background-color: ${genderColor};
    `;

    const dispatch = useDispatch()
    const selector = useSelector(dataSelector)

    const fetchUsers = async () => {
        const user = await GET();
        const data = user.data.results;
        dispatch(getData(data))
    };

    useEffect(() => {
        fetchUsers()
    }, [])

    const mappedData = (item: any) => {
        // if(item.gender === 'male') {
        //     genderColor = '#01baef'
        // } else {
        //     genderColor = '#e899dc'
        // }

        return (
            <UserCard key={item.login.uuid}>
                <div className='cartUser_img'>
                    <img src={item.picture.large} alt="alt" className='img' />
                </div>
                <div className='cartUser_info'>
                    <p>last name - {item.name.last}</p>
                    <p>first name - {item.name.first}</p>
                    <p>gender - {item.gender}</p>
                    <p>{item.dob.date.slice(0, 10)}</p>
                </div>
            </UserCard>
        )
    }

    const dataMap = selector.map(mappedData)

    return (
        <div className='users'>{dataMap}</div>
    )
}

export default TitlesData;
