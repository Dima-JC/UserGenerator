import Header from "../Header";

interface Props {
    component: React.ReactElement;
    setLocale: React.Dispatch<React.SetStateAction<any>>;
}

const Container = ({setLocale, component}: Props) => {
    return(
        <>
            <Header setLocale={setLocale} />
            {component}
        </>
    )
}

export default Container;
