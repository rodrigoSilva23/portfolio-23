import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Footer } from "../components/template/Footer";
import Header from "../components/template/Header";
import { Loading } from "../components/Loading";
import { About, Projects, Skills } from "../sections";
import { Content } from "../components/template/content";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content>
        <About />
        <Skills />
        <Projects />
      </Content>
      <Footer />
    </>
  );
};

export default Home;
