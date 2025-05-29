import { useParams } from "react-router";

const Noticia = () => {

    const { id } = useParams();

    const noticias = [
        {
            id: 1,
            titulo: "Max Titanium é confiável?",
            imagem: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/157717/creatine-max-titanium-300g-1.jpg?v=638715246475830000"
        },
        {
            id: 2,
            titulo: "O que comprar pra montar seu PC Gamer?",
            imagem: "https://a-static.mlcdn.com.br/800x560/computador-completo-intel-core-i5-8gb-hd-500gb-monitor-19-facil-computadores/olistplus/opm1cesajb7w4o2u/6b1de012a41ee43751dd98e3c2b161d8.jpeg"
        },
        {
            id: 3,
            titulo: "Por que salvar o meio ambiente, será que precisamos dele pra viver?",
            imagem: "https://www.unimedriopreto.com.br/blog/wp-content/uploads/2022/06/ESG.jpg"
        },
    ];

    return (
        <>
            <h1>Pagina de noticia</h1>
            {
                noticias.filter(noticia => noticia.id == id).map(noticia => (
                    <div key={noticia.id}>
                        <img style={{ width: "50%" }} src={noticia.imagem} alt="" />
                        <h2>{noticia.titulo}</h2>
                    </div>
                ))
            }
        </>
    );
}

export default Noticia;