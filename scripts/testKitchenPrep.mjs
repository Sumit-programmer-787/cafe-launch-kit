import { render } from "@hyper-elements/react";
import KitchenPrepSheet from "../src/templates/KitchenPrepSheet.jsx";
import fs from "node:fs";

const result = await render(KitchenPrepSheet());

fs.writeFileSync(
  "kitchen-prep.html",
  result.html,
  "utf8"
);

console.log("Kitchen Prep Sheet generated!");
console.log("Diagnostics:", result.diagnostics);
