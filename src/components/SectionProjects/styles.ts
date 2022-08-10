import styled from "styled-components";

export const SectionProjectsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: white;
  padding-bottom: 20px;
  background-image: radial-gradient(
    circle,
    white 15%,
    #0000002f 0%,
    #0f2231 100%
  );
  h1 {
    font-size: 2rem;
    text-decoration: underline;
    padding: 10px 0;
    text-align: center;
  }
  .container-carousel {
    width: 90vw;
    height: 80vh;
    .swiper-button-prev {
      left: -65px;
      right: auto;
    }

    .swiper-button-next {
      right: -65px;
    }
    .card-skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding:5px ;
      border-radius: 18px;
      font-size:2rem;
      font-weight: bold;
      background-color: white;
      color: #0f2231;
      span {
        font-size: 2rem;
      }
      .text-align-center {
        display: flex;
        justify-content: center;
        align-items:center
      }
      header {
        margin-top:20px
      }
      .img-fundo {
        height: 75% ;
        position: absolute;
        top:50px ;
        opacity: 0.08;
        margin:10px ;
      }
      main{
        width:90%;
        margin: 0 15px;
        font-weight: 400;
        font-family: Arial;
        text-align:center;
      }
      main div{
        display: flex;
        flex-wrap: wrap;
      }
     footer {
        position: relative;
        bottom: 10px;
      }
    }
  }
  .my-Thumbs {
    margin-top: 20px;
  }
  .mySwiper .swiper-slide {
    width: 150px !important;
    border: 1px solid #000000;
  }
  .container-skills-img {
    width: 100%;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      margin: 5px;
      width: 100px;
      height: 30px;
    }
  }
`;
