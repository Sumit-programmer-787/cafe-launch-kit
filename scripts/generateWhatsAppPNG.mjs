import React from "react";
import fs from "node:fs/promises";
import { renderImage } from "@hyper-elements/react/image";

import chaiData from "../src/data/cafeData.js";
import beanData from "../src/data/beanBrewData.js";
import WhatsAppUpdate from "../src/templates/WhatsAppUpdate.jsx";

const cafes = [
  { folder: "chai", data: chaiData },
  { folder: "bean", data: beanData },
];

const fonts = [
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
];

for (const cafe of cafes) {
  const result = await renderImage(
    React.createElement(WhatsAppUpdate, {
      cafeData: cafe.data,
    }),
    { fonts }
  );

  const outputDirectory = `public/demos/${cafe.folder}`;

  await fs.mkdir(outputDirectory, { recursive: true });

  await fs.writeFile(
    `${outputDirectory}/whatsapp-daily-update.png`,
    result.image
  );

  console.log(`Generated WhatsApp update: ${cafe.data.cafe.name}`);
  console.log(`Dimensions: ${result.width} x ${result.height}`);
  console.log("Diagnostics:", result.diagnostics);
}

console.log("All café WhatsApp updates generated successfully!");
