
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Loading } from "../components/Loading";
import { SectionIntroduction } from "../components/SectionIntroduction";
import { SectionProjects } from "../components/SectionProjects";
import { SectionSkills } from "../components/SectionSkills";


const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!loading);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>  
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
