import styled from "styled-components";


type PropText = {
  delay: string;
  animationDuration: string;
};

export const TextAnimed = styled.p.attrs((props:PropText)=>({
  delay: props.delay,
  animationDuration:props.animationDuration
}))<PropText>`

  color: white;
  #pipeAnimed {
    
    animation: pisca  ${props => props.animationDuration ? props.animationDuration+'s': '.7s'} infinite;
  
  }
  @keyframes pisca {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .pisca{
    display:none ;
  }
`;
