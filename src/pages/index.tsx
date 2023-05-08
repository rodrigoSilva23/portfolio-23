
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Loading } from "../components/Loading";
import { SectionIntroduction } from "../sections/SectionIntroduction";
import { SectionProjects } from "../sections/SectionProjects";
import { SectionSkills } from "../sections/SectionSkills";


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
        <div>  
          <Header />
          <SectionIntroduction />
          <SectionSkills />
          <SectionProjects />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
