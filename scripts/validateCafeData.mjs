import cafeData from "../src/data/cafeData.js";
import beanBrewData from "../src/data/beanBrewData.js";

function validateCafeData(data) {
  const errors = [];
  const warnings = [];
  const ids = new Set();

  if (!data.cafe?.name?.trim()) {
    errors.push("Cafe name is missing.");
  }

  if (!Array.isArray(data.menu) || data.menu.length === 0) {
    errors.push("Menu must contain at least one item.");
    return { errors, warnings };
  }

  data.menu.forEach((item, index) => {
    const itemLabel = item.name || `Item ${index + 1}`;

    if (item.id === undefined || item.id === null) {
      errors.push(`${itemLabel}: Missing item ID.`);
    } else if (ids.has(item.id)) {
      errors.push(`${itemLabel}: Duplicate item ID ${item.id}.`);
    } else {
      ids.add(item.id);
    }

    if (!item.name?.trim()) {
      errors.push(`Item ${index + 1}: Name is missing.`);
    }

    if (typeof item.price !== "number" || item.price <= 0) {
      errors.push(`${itemLabel}: Price must be greater than zero.`);
    }

    if (typeof item.available !== "boolean") {
      errors.push(`${itemLabel}: Availability must be true or false.`);
    }

    if (
      typeof item.prepQuantity !== "number" ||
      !Number.isFinite(item.prepQuantity) ||
      item.prepQuantity < 0
    ) {
      errors.push(`${itemLabel}: Preparation quantity is invalid.`);
    }

    if (item.available === false && item.prepQuantity > 0) {
      warnings.push(
        `${itemLabel}: Sold-out item has a non-zero preparation quantity.`
      );
    }
  });

  return { errors, warnings };
}


const cafes = [
  { name: "The Chai Corner", data: cafeData },
  { name: "Bean & Brew", data: beanBrewData },
];

let totalErrors = 0;
let totalWarnings = 0;

for (const cafe of cafes) {
  const result = validateCafeData(cafe.data);

  console.log(`\n${cafe.name}`);
  console.log("------------------------");

  result.errors.forEach((error) => console.log("ERROR:", error));
  result.warnings.forEach((warning) => console.log("WARNING:", warning));

  if (result.errors.length === 0) {
    console.log("SUCCESS: No validation errors found.");
  }

  totalErrors += result.errors.length;
  totalWarnings += result.warnings.length;
}

console.log("\nFINAL VALIDATION SUMMARY");
console.log("------------------------");
console.log("Total errors:", totalErrors);
console.log("Total warnings:", totalWarnings);

if (totalErrors > 0) {
  process.exitCode = 1;
}
