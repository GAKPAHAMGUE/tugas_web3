import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <p>Halaman Home</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
