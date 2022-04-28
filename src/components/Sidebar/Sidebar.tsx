import React from "react";
import "./Sidebar.scss";
import Logo from "../../logo.svg";
import { Card } from "../shared/Card/Card";

export const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="conatiner-sidebar">
      <Card color="green" heading="11930" subcontent="abc"></Card>
      <Card color="pink" heading="11930" subcontent="abc"></Card>  
      </div>
    </div>
  );
};
