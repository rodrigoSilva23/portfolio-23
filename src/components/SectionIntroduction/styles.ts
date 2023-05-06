import styled from "styled-components";

export const SectionProfile = styled.main`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  .textAnimed {
    margin: 20px 100px;

    text-align: justify;
    line-height: 120%;
    letter-spacing: -0.75px;
    text-indent: 20px;
    font-size: 1.5rem;
    font-family: var(--font-primary);
  }
  .secundary-content {
    width: 100%;
    position: relative;
    text-align: center;
    margin: auto 0;
    font-size: 10rem;
    color: #36cfd0;

    span {
      border-radius: 10px;
      animation: 6s linear pulseShadow infinite;
    }
    .textAnimed {
      position: absolute;
      overflow-y: auto;
      top: 30px;
      right: 50%;
      transform: translateX(160% );
      width: 90px;
      height: 54px;
      font-size: 0.5rem;
      ::-webkit-scrollbar {
        width: 2px; /* Largura da barra de rolagem */
        background-color: transparent; /* Cor de fundo da barra de rolagem */
      }
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    padding-bottom: 10px;
    .textAnimed {
      margin: 5px 25px;
      font-size: 1.4rem;
    }
 .secundary-content{
  .textAnimed{
    top: 45px;
      right: 50%;
      transform: translateX(80% );
    }
 }
  }

  @keyframes pulseShadow {
    100% {
      box-shadow: 0 0 9px -1.5px white, 0 0 100px -15px #36cfd0;
    }
    50% {
      box-shadow: 0 0 9px -3px white, 0 0 100px -30px #36cfd0;
    }
    0% {
      box-shadow: 0 0 9px -1.5px white, 0 0 100px -15px #36cfd0;
    }
  }
`;
