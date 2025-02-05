import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript!";
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "I am h1 tag."),
                React.createElement("h2", {}, "I am h2 tag.")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "I am h1 tag."),
                React.createElement("h2", {}, "I am h2 tag.")
            ]
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);