import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MonacoEditor from "../components/MonacoEditor";

const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      <MonacoEditor name = "reverse_number.py" />
      <Footer />
    </div>
  );
};

export default CodeEditor;
