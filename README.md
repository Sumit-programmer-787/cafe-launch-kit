# ChaiBoard ☕

**A white-label daily content kit for independent cafés, powered by Hyper Elements.**

ChaiBoard helps cafés manage their daily menu information from one shared data source and generate multiple ready-to-use outputs for customers and staff.

The project demonstrates how one set of café data can power digital menus, printable menus, kitchen preparation sheets, and WhatsApp updates.

## ✨ Features

- **Customer Digital Menu:** Displays available menu items and automatically hides sold-out products.
- **Printable Counter Menu:** Generates a professionally styled menu grouped by food categories.
- **Kitchen Prep Sheet:** Displays menu items, preparation quantities, and availability status.
- **WhatsApp Daily Update:** Generates a shareable daily menu update as a 1080 × 1350 PNG.
- **Single Source of Truth:** Menu names, prices, and availability are managed centrally.
- **Reusable Theme:** Shared colors, typography, and styling across templates.

## 🛠️ Tech Stack

- React.js
- JavaScript
- Hyper Elements
- Vite
- Node.js
- @react-pdf/renderer
- Satori
- Resvg

## 📁 Project Structure

```text
cafe-launch-kit/
├── public/
├── scripts/
│   ├── testCustomerMenu.mjs
│   ├── testCounterMenu.mjs
│   ├── testKitchenPrep.mjs
│   ├── testWhatsAppUpdate.mjs
│   ├── generateKitchenPDF.mjs
│   └── generateWhatsAppPNG.mjs
├── src/
│   ├── data/
│   │   └── cafeData.js
│   ├── templates/
│   │   ├── CustomerMenu.jsx
│   │   ├── CounterMenu.jsx
│   │   ├── KitchenPrepSheet.jsx
│   │   └── WhatsAppUpdate.jsx
│   └── theme/
│       └── cafeTheme.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sumit-programmer-787/cafe-launch-kit.git
```

### 2. Navigate to the project

```bash
cd cafe-launch-kit
```

### 3. Install dependencies

```bash
npm install
```

## ⚙️ Generate the Outputs

Run the following commands from the project root.

### Generate HTML previews

```bash
npx tsx scripts/testCustomerMenu.mjs
npx tsx scripts/testCounterMenu.mjs
npx tsx scripts/testKitchenPrep.mjs
npx tsx scripts/testWhatsAppUpdate.mjs
```

### Generate PDF and PNG exports

```bash
npx tsx scripts/generateKitchenPDF.mjs
npx tsx scripts/generateWhatsAppPNG.mjs
```

Generated files are saved in the project root directory.

## 🎨 Demo Café

**The Chai Corner**

- Location: Gaya, Bihar, India
- Theme: Warm brown and cream
- Currency: INR

The café and menu data are fictional demonstration data.

## 💡 Core Concept

**One source of truth. Four useful outputs.**

Update menu information once in `src/data/cafeData.js`, then regenerate the templates to reflect the changes consistently.

## 🏗️ Project Goal

ChaiBoard was developed as a reusable, white-label café content kit for the Hyper Elements Template Challenge.

The goal is to demonstrate reusable templates, consistent design systems, structured data, and multiple output formats using Hyper Elements.

---

**Built with ☕ and React.**