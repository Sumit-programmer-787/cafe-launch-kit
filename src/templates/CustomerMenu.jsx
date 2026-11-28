
import React from "react";

import {
  Page,
  Section,
  Heading,
  Text,
  Row,
  Column,
  token,
} from "@hyper-elements/react";

import cafeTheme from "../theme/cafeTheme";

const CustomerMenu = ({ cafeData }) => {
  const availableItems = cafeData.menu.filter(
    (item) => item.available
  );

  const categories = [
    ...new Set(availableItems.map((item) => item.category)),
  ];

  return (
    <Page theme={cafeTheme}>
      {/* Cafe Header */}
      <Section
        style={{
          backgroundColor: token("colors.primary"),
          color: token("colors.primaryForeground"),
          padding: 40,
          gap: 12,
          alignItems: "center",
        }}
      >
        <Heading
          style={{
            fontSize: 36,
            color: token("colors.primaryForeground"),
          }}
        >
          {cafeData.cafe.name}
        </Heading>

        <Text
          style={{
            color: token("colors.primaryForeground"),
            fontSize: 16,
          }}
        >
          {cafeData.cafe.tagline}
        </Text>

        <Text
          style={{
            color: token("colors.primaryForeground"),
            fontSize: 13,
          }}
        >
          {cafeData.cafe.address}
        </Text>
      </Section>

      {/* Menu */}
      <Section style={{ padding: 32, gap: 22 }}>
        <Heading
          style={{
            fontSize: 28,
            color: token("colors.primary"),
          }}
        >
          Our Menu
        </Heading>

        {categories.map((category) => (
          <Column key={category} style={{ gap: 12 }}>
            <Heading
              style={{
                fontSize: 20,
                color: token("colors.primary"),
              }}
            >
              {category}
            </Heading>

            {availableItems
              .filter((item) => item.category === category)
              .map((item) => (
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

                  <Text
                    style={{
                      color: token("colors.primary"),
                      fontWeight: 700,
                    }}
                  >
                    INR {item.price}
                  </Text>
                </Row>
              ))}
          </Column>
        ))}

        {availableItems.length === 0 && (
          <Text style={{ color: token("colors.muted") }}>
            No items are currently available. Please check back soon.
          </Text>
        )}
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
        <Text>{cafeData.cafe.tagline}</Text>
      </Section>
    </Page>
  );
};

export default CustomerMenu;
