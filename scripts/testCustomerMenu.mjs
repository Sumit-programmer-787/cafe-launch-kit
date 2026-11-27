import React from "react";
import { render } from "@hyper-elements/react";
import CustomerMenu from "../src/templates/CustomerMenu.jsx";
import fs from "node:fs";

import cafeData from "../src/data/activeCafe.js";

const result = await render(CustomerMenu({ cafeData }));

fs.writeFileSync(
  "customer-menu.html",
  result.html,
  "utf8"
);

console.log("Customer menu generated successfully!");
console.log("Diagnostics:", result.diagnostics);