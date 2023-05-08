import styled from "styled-components";

export const SectionProfile = styled.main`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .highlight {
    padding: 2px;
    background: linear-gradient(90deg, #4ca5ff 2%, #549fa0 100.78%);
    color: white;
  }
  .textAnimed {
    margin: 30px 120px;
    color: #FFFFFF;
    text-align: justify;
    line-height: 140%;
    letter-spacing: -0.5px;
    text-indent: 20px;
    font-size: 1.5rem;
    font-family: var(--font-primary);
  }
  
  @media screen and (max-width: 768px) {
   
    .textAnimed {
      margin: 25px;
      font-size: 1.3rem;
    }
  }
`;
