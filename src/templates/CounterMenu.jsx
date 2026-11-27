import React from "react";

import {
  Document,
  Section,
  Heading,
  Text,
  Row,
  Column,
  token,
} from "@hyper-elements/react";


import cafeTheme from "../theme/cafeTheme";

const CounterMenu = ({ cafeData }) => {  
  const availableItems = cafeData.menu.filter(
    (item) => item.available
  );

  const categories = [...new Set(
    availableItems.map((item) => item.category)
  )];

  return (
    <Document theme={cafeTheme}>
      <Section
        style={{
          backgroundColor: token("colors.primary"),
          padding: 32,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ color: "#F5E6D3", fontSize: 12 }}>
          EST. WITH LOVE • FRESHLY PREPARED
        </Text>

        <Heading
          level={1}
          style={{
            color: "#FFFFFF",
            fontSize: 34,
          }}
        >
          {cafeData.cafe.name}
        </Heading>

        <Text style={{ color: "#F5E6D3", fontSize: 14 }}>
          {cafeData.cafe.tagline}
        </Text>

        <Text style={{ color: "#F5E6D3", fontSize: 12 }}>
          {cafeData.cafe.address}
        </Text>
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.background"),
          padding: 28,
          gap: 20,
        }}
      >
        <Column style={{ alignItems: "center", gap: 5 }}>
          <Heading
            level={2}
            style={{
              color: token("colors.primary"),
              fontSize: 26,
            }}
          >
            OUR MENU
          </Heading>

          <Text style={{ color: token("colors.muted"), fontSize: 12 }}>
            GOOD FOOD. GOOD MOOD.
          </Text>
        </Column>

        {categories.map((category) => (
          <Column key={category} style={{ gap: 12 }}>
            <Heading
              level={3}
              style={{
                color: token("colors.primary"),
                fontSize: 19,
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
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
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
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.secondary"),
          padding: 18,
          alignItems: "center",
          gap: 6,
        }}
      >
        <Text style={{ color: token("colors.primary"), fontWeight: 700 }}>
          THANK YOU FOR VISITING!
        </Text>

        <Text style={{ color: token("colors.muted"), fontSize: 12 }}>
          {cafeData.cafe.tagline}
        </Text>
      </Section>
    </Document>
  );
};

export default CounterMenu;
