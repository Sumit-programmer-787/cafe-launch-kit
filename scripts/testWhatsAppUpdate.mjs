import React from "react";
import { render } from "@hyper-elements/react";
import WhatsAppUpdate from "../src/templates/WhatsAppUpdate.jsx";
import fs from "node:fs";

const result = await render(WhatsAppUpdate());

fs.writeFileSync(
  "whatsapp-update.html",
  result.html,
  "utf8"
);

console.log("WhatsApp Update generated successfully!");
console.log("Diagnostics:", result.diagnostics);