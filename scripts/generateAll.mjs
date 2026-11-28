
import React from "react";
import fs from "node:fs/promises";

import { render } from "@hyper-elements/react";
import { renderPdf } from "@hyper-elements/react/pdf";
import { renderImage } from "@hyper-elements/react/image";

import chaiData from "../src/data/cafeData.js";
import beanData from "../src/data/beanBrewData.js";

import CustomerMenu from "../src/templates/CustomerMenu.jsx";
import CounterMenu from "../src/templates/CounterMenu.jsx";
import KitchenPrepSheet from "../src/templates/KitchenPrepSheet.jsx";
import WhatsAppUpdate from "../src/templates/WhatsAppUpdate.jsx";

const cafes = [
  { folder: "chai", data: chaiData },
  { folder: "bean", data: beanData },
];

// Find fonts available on the current operating system.
async function findFont(candidates) {
  for (const path of candidates) {
    try {
      await fs.access(path);
      return await fs.readFile(path);
    } catch {
      // Try the next font path.
    }
  }

  throw new Error(`No compatible font found. Checked: ${candidates.join(", ")}`);
}

const fonts = [
  {
    family: "Arial",
    src: await findFont([
      "C:/Windows/Fonts/arial.ttf",
      "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
      "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]),
    weight: 400,
  },
  {
    family: "Arial",
    src: await findFont([
      "C:/Windows/Fonts/arialbd.ttf",
      "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
      "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]),
    weight: 700,
  },
  {
    family: "Georgia",
    src: await findFont([
      "C:/Windows/Fonts/georgia.ttf",
      "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
    ]),
    weight: 400,
  },
  {
    family: "Georgia",
    src: await findFont([
      "C:/Windows/Fonts/georgiab.ttf",
      "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
    ]),
    weight: 700,
  },
];

for (const cafe of cafes) {
  const { data, folder } = cafe;
  const outputDirectory = `public/demos/${folder}`;

  await fs.mkdir(outputDirectory, { recursive: true });

  console.log(`\nGenerating outputs for ${data.cafe.name}...`);

  const customerResult = await render(
    React.createElement(CustomerMenu, { cafeData: data })
  );

  await fs.writeFile(
    `${outputDirectory}/customer-menu.html`,
    customerResult.html,
    "utf8"
  );

  console.log("Customer menu generated.");
  console.log("Diagnostics:", customerResult.diagnostics);

  const counterResult = await render(
    React.createElement(CounterMenu, { cafeData: data })
  );

  await fs.writeFile(
    `${outputDirectory}/counter-menu.html`,
    counterResult.html,
    "utf8"
  );

  console.log("Counter menu generated.");
  console.log("Diagnostics:", counterResult.diagnostics);

  const kitchenResult = await renderPdf(
    React.createElement(KitchenPrepSheet, { cafeData: data })
  );

  await fs.writeFile(
    `${outputDirectory}/kitchen-prep-sheet.pdf`,
    kitchenResult.pdf
  );

  console.log("Kitchen Prep PDF generated.");
  console.log("Diagnostics:", kitchenResult.diagnostics);

  const whatsappResult = await renderImage(
    React.createElement(WhatsAppUpdate, { cafeData: data }),
    { fonts }
  );

  await fs.writeFile(
    `${outputDirectory}/whatsapp-daily-update.png`,
    whatsappResult.image
  );

  console.log("WhatsApp update generated.");
  console.log("Dimensions:", whatsappResult.width, "x", whatsappResult.height);
  console.log("Diagnostics:", whatsappResult.diagnostics);
}

console.log("\nAll outputs generated successfully for both cafés!");
