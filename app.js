import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [ React.createElement("h1", {}, "this is Namaste React😁"), React.createElement("h2", {}, "By Akshay Saini")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [ React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
 