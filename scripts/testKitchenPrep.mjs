import { render } from "@hyper-elements/react";
import KitchenPrepSheet from "../src/templates/KitchenPrepSheet.jsx";
import fs from "node:fs";
import cafeData from "../src/data/activeCafe.js";

const result = await render(KitchenPrepSheet({ cafeData }));

fs.writeFileSync(
  "kitchen-prep.html",
  result.html,
  "utf8"
);

console.log("Kitchen Prep Sheet generated!");
console.log("Diagnostics:", result.diagnostics);
