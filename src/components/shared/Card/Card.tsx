import React from "react";
import Logo from "../../../logo.svg";
import "./Card.scss";

interface CardProps{
  color : string,
  heading : string,
  subcontent : string | null,
  border : boolean | false
}
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card__header"></div>
      <div className={`card__body  ${props.border &&  "border"}`}>
        <div className="card__body__icon">
          <div className={`card__body__icon__image ${props.color}`}>
                 
          </div>
        </div>
        <div className={`card__body__content`}>
          <span>{props.heading}</span><br></br>
          <span className="card__body__content__subcontent">{props.subcontent}</span>
        </div>
      </div>
      <div className="card__fotter"></div>
    </div>
  );
};
