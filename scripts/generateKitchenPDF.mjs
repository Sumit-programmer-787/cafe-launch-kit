import React from "react";
import { renderPdf } from "@hyper-elements/react/pdf";
import KitchenPrepSheet from "../src/templates/KitchenPrepSheet.jsx";
import fs from "node:fs";

const result = await renderPdf(KitchenPrepSheet());

fs.writeFileSync(
  "kitchen-prep-sheet.pdf",
  result.pdf
);

console.log("Kitchen Prep PDF generated successfully!");
console.log("Diagnostics:", result.diagnostics);
