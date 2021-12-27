import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { setIsActiveButton, setIsPrivateRoute } from "../../redux/actions";
import { isActiveButtonSelector } from "../../redux/selectors";
import { Button } from "../commons/Button"

const SideBar = () => {
    const isActive = useSelector(isActiveButtonSelector)
    const intl = useIntl();
    const dispatch = useDispatch()
    
    const logout = () => {
        dispatch(setIsActiveButton(''));
        dispatch(setIsPrivateRoute(false));
        localStorage.setItem('privateRoute', 'false');
    }

    return (
        <div className="header_rout-button">
            <Link to='/users'>
                <Button
                    className={
                        isActive === '/users' ? 'button active' : "button"
                    }
                    onClick={
                        () => dispatch(setIsActiveButton('/users'))
                    }
                    btnText={
                        intl.formatMessage({ id: "Users" })
                    }
                />
            </Link>
            <Link to='/user_info'>
                <Button
                    className={
                        isActive === '/user_info' ? 'button active' : "button"
                    }
                    onClick={
                        () => dispatch(setIsActiveButton('/user_info'))
                    }
                    btnText={
                        intl.formatMessage({ id: "User Info" })
                    }
                />
            </Link>
            <Link to='/login'>
                <Button
                    className="button"
                    btnText={
                        intl.formatMessage({ id: "Log out" })
                    }
                    onClick={logout}
                />
            </Link>
        </div>
    )
}

export default SideBar
