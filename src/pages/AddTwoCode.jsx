import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddEditor from "../components/AddTwoEditor";

const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      <AddEditor />
      <Footer />
    </div>
  );
};

export default CodeEditor;