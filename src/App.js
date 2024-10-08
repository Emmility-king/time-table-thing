import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return <button onClick={handlePrint}>Print Timetable</button>;
};

function App() {
  return (
    <div>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
