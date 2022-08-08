import styled from "styled-components";

export const SectionProfile = styled.main`
  background-color: black;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;

  .textAnimed {
    position: absolute;
    text-align: justify;
    line-height: 36px;
    left: 53px;
    top: 61px;
    font-size: 1.5rem;
    max-width: 335px;
  }
  .text2 {
    position: absolute;
    left: 62%;
  }
  .profile-emoji {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    font-size: 130px;
  }
  @media (max-width: 768px) {
    .textAnimed {
      max-width: 90vw;
      z-index:9
    }
    .text2 {
      top: 129px;
      left: 50px;
      
    }
    .profile-emoji {
      z-index: 0;
      opacity: 0.5;
    }
  }

  @media (max-width: 425px) {
    .text-query {
      display: none;
      color: red;
      z-index: 9999;
    }
    .textAnimed {
      margin: 0 30px;
      z-index: 9;
      top: 35px;
      left: 10px;
    }
    .profile-emoji {
      z-index: 0;
      opacity: 0.5;
    }
  }
`;
