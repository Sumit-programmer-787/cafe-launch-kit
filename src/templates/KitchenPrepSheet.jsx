
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
  return (
    <Document
      title="Kitchen Prep Sheet"
      size="A4"
      theme={cafeTheme}
    >
      <Section style={{ gap: 12 }}>
        <Heading level={1}>
          {cafeData.cafe.name}
        </Heading>

        <Heading level={2}>
          Daily Kitchen Prep Sheet
        </Heading>

        <Text>
          Date: ____________________
        </Text>

        <Text>
          Prepare the following items for today's service.
        </Text>

        <Table
          style={{
            cellPadding: [10, 8],
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
          </TableRow>

          {cafeData.menu.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>

              <TableCell>
                {item.prepQuantity}
              </TableCell>

              <TableCell>
                {item.available ? "Available" : "Sold Out"}
              </TableCell>
            </TableRow>
          ))}
        </Table>

        <Text>
          Kitchen staff: ____________________
        </Text>
      </Section>
    </Document>
  );
};

export default KitchenPrepSheet;
