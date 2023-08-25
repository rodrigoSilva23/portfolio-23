import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100vw;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  .title {
    margin: 40px 0;
  }
  .project-wrapper {
    display: grid;
   grid-template-columns:  1fr 1fr;
}


`;
