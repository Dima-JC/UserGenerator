import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { isActiveButton, privateRoute } from "../../redux/actions";
import { isActiveButtonSelector } from "../../redux/selectors";
import { Button } from "../commons/Button"

const SideBar = () => {
    const isActive = useSelector(isActiveButtonSelector)
    const intl = useIntl();
    const dispatch = useDispatch()
    
    const entrance = () => {
        dispatch(isActiveButton(''));
        dispatch(privateRoute(false));
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
                        () => dispatch(isActiveButton('/users'))
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
                        () => dispatch(isActiveButton('/user_info'))
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
                    onClick={entrance}
                />
            </Link>
        </div>
    )
}

export default SideBar
