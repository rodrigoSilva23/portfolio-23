import { HeaderWrapper, Banner } from "./styles";
import Tilt from "react-tilt";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Button } from "../Button";

const Header = () => {
  const [selectedImg, setSelectedImg] = useState(1);
  useEffect(() => {
    const sequenceImage = () => {
      setTimeout(() => {
        selectedImg === 3 ? setSelectedImg(1) : setSelectedImg(selectedImg + 1);
      }, 5000);
    };
    sequenceImage();
  }, [selectedImg]);
console.log(selectedImg);
  return (
    <HeaderWrapper id="home">
   

      <div className="imgContainer">
        <img
          src={`/img/img-header${selectedImg}.jpg`}
          alt="fundoHeader"     
          className="img-header"
        />
      </div>
      <Tilt
        className="Tilt"
        options={{
          scale: 1.03,
          speed: 500,
          max: 10,
        }}
      >
        <Banner>
          <div className="avatarWrapper">
            <Image
              src="https://avatars.githubusercontent.com/u/55798409?v=4"
              alt="avatar"
              width="150px"
              height="150px"
             
            />
          </div>
          <div>
            <h1>Rodrigo dos santos silva</h1>
            <p>Web Developer - Full Stack </p>
            <Button className="ButtonClassic ">saiba mais </Button>
          </div>
        </Banner>
      </Tilt>
    </HeaderWrapper>
  );
};

export default Header;
