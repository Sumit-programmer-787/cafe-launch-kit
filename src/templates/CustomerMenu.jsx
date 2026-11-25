
import React from "react";

import {
  Page,
  Section,
  Heading,
  Text,
} from "@hyper-elements/react";

import cafeData from "../data/cafeData";

const CustomerMenu = () => {
  const availableItems = cafeData.menu.filter(
    (item) => item.available
  );

  return (
    <Page>
      <Section style={{ padding: 32, gap: 16 }}>
        <Heading>{cafeData.cafe.name}</Heading>

        <Text>{cafeData.cafe.tagline}</Text>

        <Heading>Our Menu</Heading>
      </Section>

      {availableItems.map((item) => (
        <Section key={item.id} style={{ padding: 16, gap: 4 }}>
          <Text>{item.name}</Text>
          <Text>₹{item.price}</Text>
        </Section>
      ))}
    </Page>
  );
};

export default CustomerMenu;
