import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReverseEditor from "../components/ReverseLinkedEditor";

const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      <ReverseEditor />
      <Footer />
    </div>
  );
};

export default CodeEditor;