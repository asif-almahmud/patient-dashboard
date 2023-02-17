import React from "react";
import Container from "../../component/container";
import Navbar from "../../component/navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default DashboardLayout;
