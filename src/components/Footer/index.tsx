import { FaGithubAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FooterComponent } from "./styles";
export const Footer = () => {
  return (
    <FooterComponent>
      <div className="footer-content">
        <p>
          Copyright &copy;
          <span>
            {new Date().getFullYear()}
             &nbsp;RodrigoSilva - Todos os direitos reservados
          </span>
        </p>
        <div className="social-list">
         
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
      </div>
    </FooterComponent>
  );
};
