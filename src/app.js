import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement(Pet, {
      name: "Minion",
      animal: "cat",
      breed: "Tabby"
    }),

    React.createElement(Pet, {
      name: "Pepper",
      animal: "dog",
      breed: "Havanese"
    }),

    React.createElement(Pet, {
      name: "Doink",
      animal: "cat",
      breed: "Stay"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
