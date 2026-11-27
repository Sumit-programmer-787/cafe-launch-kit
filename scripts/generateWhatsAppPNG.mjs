import React from "react";
import fs from "node:fs/promises";

import WhatsAppUpdate from "../src/templates/WhatsAppUpdate.jsx";
import { renderImage } from "@hyper-elements/react/image";

const result = await renderImage(
  React.createElement(WhatsAppUpdate),
  {
    fonts: [
      {
        family: "Arial",
        src: await fs.readFile("C:/Windows/Fonts/arial.ttf"),
        weight: 400,
      },
      {
        family: "Arial",
        src: await fs.readFile("C:/Windows/Fonts/arialbd.ttf"),
        weight: 700,
      },
      {
        family: "Georgia",
        src: await fs.readFile("C:/Windows/Fonts/georgia.ttf"),
        weight: 400,
      },
      {
        family: "Georgia",
        src: await fs.readFile("C:/Windows/Fonts/georgiab.ttf"),
        weight: 700,
      },
    ],
  }
);

await fs.writeFile("whatsapp-daily-update.png", result.image);

console.log("WhatsApp PNG generated successfully!");
console.log("Image dimensions:", result.width, "x", result.height);
console.log("Diagnostics:", result.diagnostics);