import styled from "styled-components";

export const SectionSkillsContainer = styled.section`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

.container{
  display: flex;
  width: 80vw;
  margin-top:30px
 
}

  .highlight {
    padding: 2px;
    background: linear-gradient(90deg, #4ca5ff 2%, #549fa0 100.78%);
    color: white;
  }
  @media (max-width: 928px) {
    .container{
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-top:30px
 
}
  }
`;
