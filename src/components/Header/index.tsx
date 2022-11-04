import { HeaderWrapper, Banner } from "./styles";
import Tilt from "react-tilt";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Button } from "../Button";

const Header = () => {

  return (
    <HeaderWrapper id="home">
   

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
