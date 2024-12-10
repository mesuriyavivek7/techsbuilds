import React from "react";

//Importing components
import Carousle from "../components/Carousle";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import TechIndex from "../components/TechIndex";

export default function Home() {
  return (
    <>
      <Carousle></Carousle>
      <Aboutus></Aboutus>
      <WhyChooseUs></WhyChooseUs>
      <Services></Services>
      <TechIndex></TechIndex>
    </>
  );
}
