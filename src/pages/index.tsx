import React from "react";
import { NextPage } from "next";

// Components
import MainLayout from "@/common/layouts/Main";

// Containers
import Hero from "@/containers/Home/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
