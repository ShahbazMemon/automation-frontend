import React from "react";
import { NextPage } from "next";

// Components
import MainLayout from "@/common/layouts/Main";

// Containers
// import Hero from "@/containers/Home/Hero";
import Hero from "@/containers/Website/Hero";

const Website: NextPage = () => {
  return (
    <>
      <Hero/>
    </>
  );
};

Website.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Website;
