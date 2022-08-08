import styled from "styled-components";

interface Props {
  name: string;

}


export const Button = styled.button`
  font-family: var(--font-action);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: white;
  background: #834d9b; /* caso o navegador seja antigo */
  background: -webkit-linear-gradient(to left, #d04ed6, #834d9b);
  background: linear-gradient(to left, #d04ed6, #834d9b);
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover{
    transition: 0.5s;
       font-size:1.15rem;
  }
 
  
`;
