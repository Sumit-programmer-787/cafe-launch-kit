import React from "react";

import {
  Page,
  Section,
  Heading,
  Text,
  Row,
  token,
} from "@hyper-elements/react";

import cafeData from "../data/cafeData";
import cafeTheme from "../theme/cafeTheme";

const CustomerMenu = () => {
  const availableItems = cafeData.menu.filter(
    (item) => item.available
  );

  return (


   <Page theme={cafeTheme}>


      {/* Café Header */}
      <Section
        style={{
          backgroundColor: token("colors.primary"),
          color: token("colors.primaryForeground"),
          padding: 40,
          gap: 12,
          alignItems: "center",
        }}
      >
     <Heading style={{ fontSize: 36, color: token("colors.primaryForeground") }}>
  {cafeData.cafe.name}
</Heading>
        <Text style={{ color: token("colors.primaryForeground"), fontSize: 16 }}>
          {cafeData.cafe.tagline}
        </Text>

        <Text style={{ color: token("colors.primaryForeground"), fontSize: 13 }}>
          {cafeData.cafe.address}
        </Text>
      </Section>

      {/* Menu */}
      <Section style={{ padding: 32, gap: 16 }}>
        <Heading
  style={{
    fontSize: 28,
    color: token("colors.primary"),
  }}
>
  Our Menu
</Heading>

        {availableItems.map((item) => (
          <Row
            key={item.id}
            style={{
             backgroundColor: token("colors.surface"),
              padding: 18,
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 600 }}>
              {item.name}
            </Text>

            <Text style={{ color: token("colors.primary"), fontWeight: 700 }}>
              INR {item.price}
            </Text>
          </Row>
        ))}
      </Section>

      {/* Footer */}
      <Section
        style={{
          backgroundColor: token("colors.secondary"),
          color: token("colors.muted"),
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text>Freshly made, happily served!</Text>
      </Section>
    </Page>
  );
};

export default CustomerMenu;
