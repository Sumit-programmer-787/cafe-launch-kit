import React from "react";
import { renderPdf } from "@hyper-elements/react/pdf";
import KitchenPrepSheet from "../src/templates/KitchenPrepSheet.jsx";
import cafeData from "../src/data/activeCafe.js";
import fs from "node:fs";


const result = await renderPdf(
  KitchenPrepSheet({ cafeData })
);

fs.writeFileSync(
  "kitchen-prep-sheet.pdf",
  result.pdf
);

console.log("Kitchen Prep PDF generated successfully!");
console.log("Diagnostics:", result.diagnostics);
