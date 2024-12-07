import React from "react";

//Importing components
import Carousle from "../components/Carousle";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Carousle></Carousle>
      <Aboutus></Aboutus>
      <Services></Services>
    </>
  );
}
