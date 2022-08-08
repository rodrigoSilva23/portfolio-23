import { SidebarClassic } from "./styles";
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("show-menu");
  };

  return (
    <SidebarClassic>
      <aside className="sidebar ">
        <div className="hamburguer" onClick={showSidebar}>
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <span>Fechar</span>
        </div>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <a href="#home" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#conhecimentos" className="menu-link">
                Conhecimento
              </a>
            </li>
            <li className="menu-item">
              <a href="#projetos" className="menu-link">
                Projetos
              </a>
            </li>
            <li className="menu-item">
              <a href="#contatos" className="menu-link">
                Contato
              </a>
            </li>
            <li className="menu-item">
              <a href="#orcamentos" className="menu-link">
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-midia">
          <a
            href="https://www.instagram.com/rodrigosilva.up/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/rodrigoSilva23"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-santos-silva-059b9a193/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </aside>
    </SidebarClassic>
  );
};

export default Sidebar;
