import Header from "../Header";
import { Language } from "../../interfaces";

interface Props {
    component: React.ReactElement;
    setLocale: React.Dispatch<React.SetStateAction<Language>>;
}

const Container = ({ setLocale, component}: Props) => {
    return(
        <>
            <Header setLocale={setLocale} />
            {component}
        </>
    )
}

export default Container;
