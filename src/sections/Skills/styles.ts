import styled from "styled-components";

export const SkillsContainer = styled.section`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    width: 80vw;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  
    border-radius: 20px;
    img{
      margin:5px;
      background:transparent;
      animation: 6s linear pulseShadow infinite;
       transition: transform .2s linear;
      :hover{
        transform: scale(1.1);
      }
    }
  }

  @keyframes pulseShadow {
    100% {
      box-shadow: 0 0 9px -1.5px white, 0 0 50px -15px var(--primary-300);
    }
    50% {
      box-shadow: 0 0 9px -3px white, 0 0 50px -30px var(--primary-300);
    }
    0% {
      box-shadow: 0 0 9px -1.5px white, 0 0 50px -15px var(--primary-300);
    }
  }
  @media (max-width: 928px) {
    .container {
      display: flex;
      align-items: center;
      width: 80vw;
      margin-top: 30px;
    }
  }
`;
