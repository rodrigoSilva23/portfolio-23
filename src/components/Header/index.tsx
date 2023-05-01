import { HeaderWrapper, Banner } from "./styles";
import Tilt from "react-tilt";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { HeroPattern } from "../HeroPattern";

const Header = () => {

  return (
    <HeaderWrapper id="home">
   <HeroPattern/>

        <Banner>
          <div className="avatarWrapper">
            <Image
              src="https://avatars.githubusercontent.com/u/55798409?v=4"
              alt="avatar"
          width={150}
          height={150}
             
            />
          </div>
          <div className="content">
            <h1>Rodrigo dos santos silva</h1>
            <p>Web Developer - Full Stack </p>
          </div>
        </Banner>
 
      
    </HeaderWrapper>
  );
};

export default Header;
