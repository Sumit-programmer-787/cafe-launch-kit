
import React from "react";
import {
  Document,
  Section,
  Heading,
  Text,
  Table,
  TableRow,
  TableCell,
} from "@hyper-elements/react";

import cafeTheme from "../theme/cafeTheme";

const KitchenPrepSheet = ({ cafeData }) => {
  const availableItems = cafeData.menu.filter((item) => item.available);
  const soldOutItems = cafeData.menu.filter((item) => !item.available);

  return (
    <Document
      title={`${cafeData.cafe.name} - Kitchen Prep Sheet`}
      size="A4"
      theme={cafeTheme}
    >
      {/* HEADER */}
      <Section style={{ gap: 10 }}>
        <Heading level={1}>{cafeData.cafe.name}</Heading>
        <Heading level={2}>Daily Kitchen Preparation Sheet</Heading>
        <Text>Date: ____________________    Shift: ____________________</Text>
        <Text>
          Prepare and verify today's menu before service begins.
        </Text>
      </Section>

      {/* PREPARATION OVERVIEW */}
      <Section style={{ backgroundColor: "#F5E6D3", padding: 14, gap: 8 }}>
        <Heading level={3}>Preparation Overview</Heading>
        <Text>Total menu items: {cafeData.menu.length}</Text>
        <Text>Available items: {availableItems.length}</Text>
        <Text>Sold-out items: {soldOutItems.length}</Text>
      </Section>

      {/* PREPARATION CHECKLIST */}
      <Section style={{ gap: 10 }}>
        <Heading level={3}>Preparation Checklist</Heading>

        <Table
          style={{
            cellPadding: [9, 7],
            rowBorder: {
              width: 1,
              style: "solid",
              color: "#EADBC8",
            },
          }}
        >
          <TableRow header>
            <TableCell>Menu Item</TableCell>
            <TableCell>Prep Quantity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Checked</TableCell>
          </TableRow>

          {cafeData.menu.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.prepQuantity ?? "Not specified"}</TableCell>
              <TableCell>
                {item.available ? "AVAILABLE" : "SOLD OUT"}
              </TableCell>
              <TableCell>________</TableCell>
            </TableRow>
          ))}
        </Table>
      </Section>

      {/* ITEMS REQUIRING ATTENTION */}
      {soldOutItems.length > 0 && (
        <Section style={{ gap: 6 }}>
          <Heading level={3}>Items Requiring Attention</Heading>

          {soldOutItems.map((item) => (
            <Text key={item.id}>
              {item.name} — Restock before service
            </Text>
          ))}
        </Section>
      )}

      {/* STAFF VERIFICATION */}
      <Section style={{ gap: 12 }}>
        <Text>Kitchen staff: __________________________</Text>
        <Text>Preparation verified by: __________________</Text>
        <Text>Manager approval: ________________________</Text>
      </Section>
    </Document>
  );
};

export default KitchenPrepSheet;
