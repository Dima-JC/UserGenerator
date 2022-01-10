import { Routes, Route, Navigate } from "react-router";

import Header from "../Header";
import { PrivateRoute } from "../../PrivateRoute";
import Login from "../Login";
import TitlesData from "../TitlesData";
import UserInfo from "../TitlesData/UserInfo";
import { LOGIN, USERS, USERS_INFO } from "../../constants/path";

const Container = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Navigate replace to={LOGIN} />
                }/>
                <Route path={LOGIN} element={
                    <Login />
                }/>
                <Route path={USERS} element={
                    <PrivateRoute components={
                    <TitlesData />
                }/>}
                />
                <Route path={USERS_INFO} element={
                    <PrivateRoute components={
                    <UserInfo />
                }/>}
                />
            </Routes>
        </>
    )
}

export default Container;


