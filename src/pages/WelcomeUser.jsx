import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";


const WelcomeUser = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
};

export default WelcomeUser;