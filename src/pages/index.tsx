import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Loading } from "../components/Loading";
import { SectionIntroduction } from "../components/SectionIntroduction";
import { SectionProjects } from "../components/SectionProjects";
import { SectionSkills } from "../components/SectionSkills";
import { SideBar } from "../components/Sidebar";
import {
  FaGithubAlt,
  FaInstagram,
  FaHome,
  FaBook,
  FaCode,
  FaEnvelope,
  FaDollarSign,
} from "react-icons/fa";

const itemsFromMenu = [
  {
    name: "Home",
    icon: <FaHome />,
    href: "#home",
  },
  {
    name: "Conhecimento",
    icon: <FaBook />,
    href: "#conhecimentos",
  },
  {
    name: "Projetos",
    icon: <FaCode />,
    href: "#projetos",
  },
  {
    name: "Contato",
    icon: <FaEnvelope />,
    href: "#contato",
  },
  {
    name: "Orçamento",
    icon: <FaDollarSign />,
    href: "#orcamento",
  },
];
const midia = [
  {
    name: "Linkedin",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/rodrigosilva.up/",
  },
  {
    name: "Github",
    icon: <FaGithubAlt />,
    href: "https://github.com/rodrigoSilva23",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.linkedin.com/in/rodrigo-santos-silva-dev/",
  },
];
const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!loading);
  }, []);
  return (
    <>
      <Head>
        <title>Rodrigo-Dev</title>
        <link rel="icon" type="image/png" href="/link-icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio Rodrigo dos santos." />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SideBar midia={midia} itemsFromMenu={itemsFromMenu} />
          <Header />
          <SectionIntroduction />
          <SectionSkills />
          <SectionProjects />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
