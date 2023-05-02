import styled from "styled-components";

export const SectionProfile = styled.main`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    font-family: var(--font-primary);
    color: white;
    position: relative;

  }
  .textAnimed {
    margin:20px 100px;
    
    text-align: justify;
    line-height: 120%;
    letter-spacing: -0.75px;
    text-indent: 20px;
    font-size: 1.5rem;
    font-family: var(--font-primary);
  }
`;
