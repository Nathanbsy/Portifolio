import "./Nav.css";

function Nav() {
  function modo() {
    const html = document.querySelector("html");
    const btnToggle = document.getElementById("btnToggle");
    const bolota = document.getElementById("bolota");
    btnToggle.classList.toggle("azul");
    bolota.classList.toggle("ativo");
    html.classList.toggle("dark");
    
  }
  return (
    <nav>
        <button className="btn-icon" id="btnIcon"></button>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
        <button className="btn-toggle" id="btnToggle" onClick={() => modo()}><div className="bolinha" id="bolota"></div></button>
    </nav>
  );
}

export default Nav;
