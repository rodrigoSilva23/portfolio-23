import styled from "styled-components";

export const SectionProfile = styled.main`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .textAnimed {
    margin: 30px 120px;
    padding: 20px;
    color: var(--text-200);
    text-align: justify;
    line-height: 140%;
    letter-spacing: -0.5px;
    text-indent: 23px;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: var(--font-primary);
    background-color:var(--bg-300);
    border-radius: 20px;
  }
  
  @media screen and (max-width: 768px) {
   
    .textAnimed {
      margin: 25px;
      font-size: 1.3rem;
    }
  }
`;
