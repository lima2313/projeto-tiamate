import { Link } from "react-router";

const NotFound = () => {
    return (
        <>
            <h1>Pagina não encontrada</h1>
            <Link to={-1}>Voltar</Link>
        </>
    );
}

export default NotFound;