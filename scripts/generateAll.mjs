
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
  const { data, folder } = cafe;
  const outputDirectory = `public/demos/${folder}`;

  await fs.mkdir(outputDirectory, { recursive: true });

  console.log(`\nGenerating outputs for ${data.cafe.name}...`);

  // 1. Customer Menu
  const customerResult = await render(
    React.createElement(CustomerMenu, { cafeData: data })
  );

  await fs.writeFile(
    `${outputDirectory}/customer-menu.html`,
    customerResult.html,
    "utf8"
  );

  console.log("Customer menu generated.");
  console.log("Customer menu diagnostics:", customerResult.diagnostics);

  // 2. Counter Menu
  const counterResult = await render(
    React.createElement(CounterMenu, { cafeData: data })
  );

  await fs.writeFile(
    `${outputDirectory}/counter-menu.html`,
    counterResult.html,
    "utf8"
  );

  console.log("Counter menu generated.");
  console.log("Counter menu diagnostics:", counterResult.diagnostics);

  // 3. Kitchen Prep PDF
  const kitchenResult = await renderPdf(
    React.createElement(KitchenPrepSheet, { cafeData: data })
  );

  await fs.writeFile(
    `${outputDirectory}/kitchen-prep-sheet.pdf`,
    kitchenResult.pdf
  );

  console.log("Kitchen Prep PDF generated.");
  console.log("Kitchen PDF diagnostics:", kitchenResult.diagnostics);

  // 4. WhatsApp Update PNG
  const whatsappResult = await renderImage(
    React.createElement(WhatsAppUpdate, { cafeData: data }),
    { fonts }
  );

  await fs.writeFile(
    `${outputDirectory}/whatsapp-daily-update.png`,
    whatsappResult.image
  );

  console.log("WhatsApp update generated.");
  console.log("Image dimensions:", whatsappResult.width, "x", whatsappResult.height);
  console.log("WhatsApp diagnostics:", whatsappResult.diagnostics);
}

console.log("\nAll outputs generated successfully for both cafés!");
