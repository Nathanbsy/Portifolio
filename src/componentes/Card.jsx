import "./Card.css";

function Card({ linkRepo, linkSite, img, descricao}) {
    return(
        <div className="card">
            <img src={img} alt="Imagem do Projeto" />
            <p>{descricao}</p>
            <a className="btn-card" href={linkRepo}>Repositório</a>
            <a className="btn-card" href={linkSite}>Site</a>
        </div>
    );
}

export default Card;