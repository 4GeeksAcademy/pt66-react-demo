import React from "react";
import "./ExcuseSection.css";

const ExcuseSection = ({ text = "DEFAULT EXCUSE SECTION" }) => {
  return <span className="excuse-section">{text}</span>;
};

export { ExcuseSection };
