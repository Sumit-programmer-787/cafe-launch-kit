import React from "react";
import { render } from "@hyper-elements/react";
import CounterMenu from "../src/templates/CounterMenu.jsx";
import fs from "node:fs";

const result = await render(CounterMenu());

fs.writeFileSync(
  "counter-menu.html",
  result.html,
  "utf8"
);

console.log("Counter Menu generated successfully!");
console.log("Diagnostics:", result.diagnostics);
