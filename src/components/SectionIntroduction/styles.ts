import styled from "styled-components";

export const SectionProfile = styled.main`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: white;
    text-decoration: underline;
  }
  .textAnimed {
    margin: 0 20px;
    text-align: justify;
    line-height: 36px;
    font-size: 1.5rem;
    font-family: var(--font-primary);
  }
`;
