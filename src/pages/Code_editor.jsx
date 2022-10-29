import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Monaco_editor from "../components/Monaco-editor";

const Code_editor = () => {
  return (
    <div>
      <Navbar />
      <Monaco_editor />
      <Footer />
    </div>
  );
};

export default Code_editor;