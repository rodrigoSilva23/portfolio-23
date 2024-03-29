import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .avatarWrapper {
    width: 155px;
    height: 155px;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    animation: 6s linear pulseShadow infinite;
  }
  .content {
    h1 {
      color: var(--text-100);
      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 200;
      letter-spacing: -0.75px;

    }
    p {
      font-family: var(--font-secondary);
      letter-spacing: 1px;
      color: white;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 425px) {
    .content {
      h1 {
        font-size: 2.1rem;
      }
      p {
        font-size: 1.5rem;
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
  .social-midia {
    position: fixed;
    top: 25px;
    left: 10px;
  }
`;
