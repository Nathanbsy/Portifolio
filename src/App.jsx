import Nav from "./componentes/Nav.jsx";
import "./App.css";
import Card from "./componentes/Card.jsx";
import imagemLaPallazo from "./assets/LaPallazo.png";
import imagemAnimesReact from "./assets/AnimesReact.png";
import imagemToDoList from "./assets/To-do-list.png";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="parallax"></div>
        <h1>Nathan Nascimento</h1>
        <h2>Desenvolvedor Front-End & Back-End</h2>
      </main>
      <section className="secao-cor" id="sobre">
        <div className="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Sou apaixonado por tecnologia, estudo programação desde os 17 anos e
            estou sempre buscando novos conhecimentos e me aprimorar.
          </p>
        </div>

        <div className="formacao">
          <div className="formacao-img">
            <div className="minha-foto"></div>
          </div>
          <div className="formacao-info">
            <h3>Formação</h3>
            <p>Técnico: Desenvolvimento de Sistemas</p>
          </div>
        </div>
      </section>
      <section id="skills">
        <h2>Soft Skills</h2>
        <div className="container-listas">
          <div className="esquerda">
            <ul className="lista-esquerda">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="direita">
            <ul className="lista-direita">
              <li>C#</li>
              <li>.NET</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="secao-cor" id="projetos">
        <h2>Projetos</h2>
        <div className="projetos">
          <Card
            linkRepo={"https://github.com/Nathanbsy/LaPallazo"}
            linkSite={"https://nathanbsy.github.io/LaPallazo"}
            img={imagemLaPallazo}
            descricao={"Site para um restaurante italiano feito durante o curso"}
          />
          <Card
            linkRepo={"https://github.com/Nathanbsy/AnimesReact"}
            linkSite={"https://animes-react.vercel.app/"}
            img={imagemAnimesReact}
            descricao={"Site de animes em React"}
          />
          <Card
            linkRepo={"https://github.com/Nathanbsy/to-do-list"}
            linkSite={"https://to-do-list-one-eta-23.vercel.app/"}
            img={imagemToDoList}
            descricao={"Site de lista em React"}
          />
        </div>
      </section>
      <div className="contato" id="contato">
        <h2>Contato</h2>
        <p>nathanbsy.dev@gmail.com</p>
      </div>
      <footer>
        <h2>@nathanbsy-2025-Direitos Reservados</h2>
      </footer>
    </>
  );
}

export default App;
