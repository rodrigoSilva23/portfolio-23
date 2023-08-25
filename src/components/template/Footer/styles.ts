import styled from "styled-components";

export const FooterComponent = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 3.3rem;
  background-color: #17181b;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-content {
    width: 70%;
    display: flex;
    justify-content: center;
    text-align: center;
    p {
      font-family: var(--font-secundary);
      color: #727172;
      font-size: 1.2rem;
    }
    .social-list {
      margin-left: 40px;
      a {
        margin: 0 1rem;
        color: #727172;
        font-size: 1.3rem;
        :hover {
          transition: color 0.5s;
          color: white;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 75%;
      .social-list {
        margin: 10px 0 0 0;
      }
    }
  }
`;
