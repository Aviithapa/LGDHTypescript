import React from "react";
import "./index.scss";
// import { Maps } from "../../Map/Map";
import { Sidebar } from "../../Sidebar/Sidebar";
import { Card } from "../../shared/Card/Card";
export const Index: React.FC = () => {
  return (
    <div className="background-container-main">
      <div className="background-container__breadcrums">
        LGDH - Local Development Data Hub
      </div>
      <div className="background-container">
        <div className="background-container__map">
          <div className="container-card">
            <div className="container-card-left">
              {/* <Maps></Maps> */}
              <Card color="green" heading="11930" subcontent="abc"></Card>
            </div>
            <div className="container-card-right">
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
        <div className="background-container__bar"></div>
      </div>
      <div className="container"></div>
    </div>
  );
};
