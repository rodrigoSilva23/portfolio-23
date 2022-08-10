import styled from "styled-components";

export const SidebarClassic = styled.div`

  .sidebar {
    width: 20rem;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0);
    position: fixed;
    top: 0;
    right: -18rem;
    transition: 1.5s;
    z-index: 10;
  }

  .show-menu {
    right: 0;
    background-color: white;
  }

  .hamburguer {
    width: 2rem;
    height: 2rem;
    position: fixed;
    z-index: 1000;
    right: 2.5rem;
    top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: 1.5s;
    opacity: 1;
  }
  .show-menu .hamburguer {
    right: 16rem;
  }

  .line {
    width: 100%;
    height: 0.1rem;
    background-color: white;
    box-shadow: 0.1rem 0.1rem 1px rgba(0, 0, 0);
    transition: transform 1s;
  }

  .show-menu #line2{
    opacity: 0;
  }

  .show-menu #line3 {
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;

    transform: rotate(-40deg);
  }
  .hamburguer span {
    font-family: var(--font-action);
    font-weight: 500;
    letter-spacing: 0.1rem;
    position: absolute;
    left: 3rem;
    background-color: #743b8d;
    height: 2rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }

  .hamburguer span::before {
    content: "";
    position: absolute;
    border-right: 0.7rem solid #743b8d;
    border-top: 0.5rem solid transparent;
    border-left: 0.7rem solid transparent;
    border-bottom: 0.6rem solid transparent;

    left: -1.4rem;
  }

  .show-menu .hamburguer:hover span {
    color: white;
    opacity: 1;
  }

  .show-menu #line1 {
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    transform: rotate(40deg);
  }

  .menu {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu-item {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .menu-link {
    font-family: var(--font-action);
    font-size: unset;
    color: #555;
  }

  .menu-link:hover {
    transition: color 0.8s;
    color: rgb(116, 59, 141);
  }

  .social-midia {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0;
    transition: 1.5s;
  }
  .show-menu .social-midia {
    opacity: 1;
  }

  .social-midia a {
    background-color: rgb(116, 59, 141);
    color: white;
    height: 2.6rem;
    width: 2.6rem;
    font-size: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .social-midia a:hover {
    transition: background-color 0.8s;
    background-color: rgb(147, 88, 172);
  }
  @media (max-height: 768px) and (orientation: landscape){
    .sidebar {
      font-size:20px !important;
      .hamburguer{ 
        top:10px;
        
      }
    }
    .show-menu .hamburguer {
      right: 17.5rem !important;
    }
   }
   @media (max-height: 1024px) and (orientation: portrait){
    .sidebar {
      font-size:30px !important;
      .hamburguer{
        top:10px;
        
      }
    }
    .show-menu .hamburguer {
      right: 17.5rem !important;
    }
    .hamburguer span{
      font-size:20px;
        
      }
   }
`;
