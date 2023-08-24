import { FooterComponent } from "./styles";
import { SocialMidias } from "../../SocialMidias";
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
        <SocialMidias  direction="right" delay={0}/>
        </div>
    </FooterComponent>
  );
};
