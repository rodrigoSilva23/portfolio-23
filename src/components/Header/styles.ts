import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #0A0F1B;
  @keyframes zoomHeader {
    from {
      transform: scale(1.2);
      opacity: 0.7;
    }
    to {
      transform: scale(1);
      opacity: 9;
    }
  }

  .Tilt {

    min-width:275px;
    position: absolute;
    top: 30%;
    left: 10%;
    backdrop-filter: blur(4px);
    @media (max-width: 540px){ 
      top: 20vh;
      left: auto;
      margin: 0 20px ;
    }
  }
  @media (max-width: 667px) and (orientation: landscape){ 
     
     .Tilt {
       top: 90px;
       left: auto;
       margin: 0 20px ;
      div p{
         font-size:1.5rem !important ;
       }
       div h1{
         font-size:1.8rem !important ;
         text-shadow: 0.2rem 0.15rem 2px rgba(0, 0, 0, 0.4) !important;
       }
     }
     }
  @media (max-width: 425px){
    .Tilt {
       top: 90px;
      }
  }
  `;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  border-radius: 10px;
  background: #1f163b;
  animation: 6s linear pulseShadow infinite   ;
  div:nth-child(2) {
    margin: 30px 10px;

    h1 {
      color: white;
      font-size: 3rem;
      font-family: var(--font-primary);
      font-weight: 200;
      text-shadow: 0.2rem 0.25rem 2px rgba(0, 0, 0, 0.4);
    }
    p {
      font-family: var(--font-secondary);
      color: white;
      font-size: 2rem;
      text-shadow: 0.1rem 0.14rem 1.7px rgba(0, 0, 0, 0.4);
      font-weight: 400;
      margin-bottom: 10px;
    }
    button {
      margin-left: 20px;
    }
    @keyframes pulseShadow {
    100% {
      box-shadow:0 0 9px -1.5px white, 0 0 100px -15px #36CFD0;
     
    }
    50%{
      box-shadow:0 0 9px -3px white, 0 0 100px -30px #36CFD0;
    }
    0%{
      box-shadow:0 0 9px -1.5px white, 0 0 100px -15px #36CFD0;
    }
  }
  }
  .avatarWrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 10px 10px;
    img {
      border-radius: 50%;
    }
  }
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div:nth-child(2) {
      margin: 10px ;
      p,
      h1 {
        font-size: 20px;
        text-align: center;
      }
      .ButtonClassic {
        margin: 0px 30px;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media (max-width: 425px) and (orientation: landscape) {
    .avatarWrapper {
        width: 120px ;
        height: 120px ;
      }
  }
 
 
`;
