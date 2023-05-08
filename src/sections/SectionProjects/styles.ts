import styled from "styled-components";

export const SectionProjectsContainer = styled.section`
  width: 100vw;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:10px;
  .highlight {
    padding: 2px;
    background: linear-gradient(90deg, #4ca5ff 2%, #549fa0 100.78%);
    color: white;
  }
  .title{
    margin: 40px 0;
  }
 .wrap-cards{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;

  }
`;
