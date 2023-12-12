import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mili",
      animal: "Kucing",
      breed: "Persia Medium",
    }),
    React.createElement(Pet, {
      name: "Nyanya",
      animal: "Kucing",
      breed: "Persia Kampung",
    }),
    React.createElement(Pet, {
      name: "Shiro",
      animal: "Kucing",
      breed: "Kampung",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
