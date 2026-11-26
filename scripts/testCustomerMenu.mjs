import React from "react";
import { render } from "@hyper-elements/react";
import CustomerMenu from "../src/templates/CustomerMenu.jsx";
import fs from "node:fs";

const result = await render(
  React.createElement(CustomerMenu)
);

fs.writeFileSync(
  "customer-menu.html",
  result.html,
  "utf8"
);

console.log("Customer menu generated successfully!");
console.log("Diagnostics:", result.diagnostics);