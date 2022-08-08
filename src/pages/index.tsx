import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Loading } from "../components/Loading";
import { SectionIntroduction } from "../components/SectionIntroduction";
import { SectionProjects } from "../components/SectionProjects";
import {SectionSkills } from "../components/SectionSkills";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);


 
  useEffect(() => {
      setLoading(!loading);
  }, []);
  return (
    <div>
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
          <Header />
          <SectionIntroduction/>
          <SectionSkills/>
          <SectionProjects/>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
