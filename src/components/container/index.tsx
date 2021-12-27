import { Routes, Route, Navigate } from "react-router";

import Header from "../Header";
import { PrivateRoute } from "../../PrivateRoute";
import Login from "../Login";
import TitlesData from "../TitlesData";
import UserInfo from "../TitlesData/UserInfo";

const Container = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Navigate replace to="/login" />
                }/>
                <Route path='/login' element={
                    <Login />
                }/>
                <Route path='/users' element={
                    <PrivateRoute components={
                    <TitlesData />
                }/>}
                />
                <Route path='/user_info' element={
                    <PrivateRoute components={
                    <UserInfo />
                }/>}
                />
            </Routes>
        </>
    )
}

export default Container;


