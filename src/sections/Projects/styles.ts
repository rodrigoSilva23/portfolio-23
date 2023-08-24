import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100vw;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:10px;
  .highlight {
    padding: 2px;
    background: linear-gradient(90deg, var( --primary-100) 2%, var( --primary-200)100.78%);
    color: var(--text-100);
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
