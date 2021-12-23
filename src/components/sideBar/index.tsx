import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"

import { privateRoute } from "../../redux/actions";
import { Button } from "../commons/Button"

const SideBar = () => {
    const dispatch = useDispatch()

    const entrance = () => dispatch(privateRoute(false))
    const intl = useIntl();

    return (
        <div className="header_rout-button">
            <Link to='/users'>
                <Button
                    className="button"
                    btnText={intl.formatMessage({ id: "Users" })}
                />
            </Link>
            <Link to='/user_info'>
                <Button
                    className="button"
                    btnText={intl.formatMessage({ id: "User Info" })}
                />
            </Link>
            <Link to='/login'>
                <Button
                    className="button"
                    btnText={intl.formatMessage({ id: "Log out" })}
                    onClick={entrance}
                />
            </Link>
        </div>
    )
}

export default SideBar
