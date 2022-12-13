import React from "react";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Card from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div style={{padding: '2em'}}> 
        <h1>Welcome to Code Lab</h1>
        <h4>It's Time To Learn</h4>
      </div>
      <Card />
      <Intro />
      
      <Footer />
    </div>
  );
};

export default Home;
