import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { LOGIN, USERS, USERS_INFO } from "../../constants/path";

import { activeButton, setIsPrivateRoute } from "../../redux/actions";
import { isActiveButtonSelector } from "../../redux/selectors";
import { Button } from "../commons/Button"

const SideBar = () => {
    const isActive = useSelector(isActiveButtonSelector)
    const { formatMessage } = useIntl();
    const dispatch = useDispatch()
    
    const logout = () => {
        dispatch(activeButton(''));
        dispatch(setIsPrivateRoute(false));
        localStorage.setItem('isAuth', 'false');
    }

    return (
        <div className="header_rout-button">
            <Link to={USERS}>
                <Button
                    className={
                        isActive === '/users' ? 'button active' : "button"
                    }
                    onClick={
                        () => dispatch(activeButton('/users'))
                    }
                    btnText={
                        formatMessage({ id: "Users" })
                    }
                />
            </Link>
            <Link to={USERS_INFO}>
                <Button
                    className={
                        isActive === '/user_info' ? 'button active' : "button"
                    }
                    onClick={
                        () => dispatch(activeButton('/user_info'))
                    }
                    btnText={
                        formatMessage({ id: "User Info" })
                    }
                />
            </Link>
            <Link to={LOGIN}>
                <Button
                    className="button"
                    btnText={
                        formatMessage({ id: "Log out" })
                    }
                    onClick={logout}
                />
            </Link>
        </div>
    )
}

export default SideBar
