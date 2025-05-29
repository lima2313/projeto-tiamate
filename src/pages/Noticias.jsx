import { Link } from "react-router";

const Noticias = () => {
    return (
        <>
            <h1>Pagina de noticias</h1>
            <ul>
                <li>
                    <Link to={"/noticias/1"}>Noticia 1</Link>
                </li>
                <li>
                    <Link to={"/noticias/2"}>Noticia 2</Link>
                </li>
                <li>
                    <Link to={"/noticias/3"}>Noticia 3</Link>
                </li>
            </ul>
        </>
    );
}

export default Noticias;