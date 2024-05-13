import React, { useState } from "react";
import { ExcuseSection } from "./ExcuseSection.jsx";

const part_a = [
  "late to work",
  "missed the deadline",
  "forgot how to write React components",
  "woke up the cat",
  "fed my cats 5 minutes late",
];

const part_b = [
  "my cat wouldn't stop talking to ghosts",
  "I left the stove on and my kitchen caught fire",
  "Google Chrome needed to update (again)",
  "I got lost looking through node_modules because the package was undocumented",
];

const Home = () => {
  const [partA, setPartA] = useState(0);
  const [partB, setPartB] = useState(0);

  const changeSelected = () => {
    setPartA(Math.floor(Math.random() * part_a.length));
    setPartB(Math.floor(Math.random() * part_b.length));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <h1>Instant Excuse Generator:</h1>
          <h2>
            I was <ExcuseSection text={part_a[partA]} /> today because{" "}
            <ExcuseSection text={part_b[partB]} />.
          </h2>
          <button onClick={changeSelected} className="btn btn-danger">
            <h4>Excuse me? No, excuse you!</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
