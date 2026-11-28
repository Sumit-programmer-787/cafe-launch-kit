
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

const CounterMenu = ({ cafeData }) => {
  const availableItems = cafeData.menu.filter((item) => item.available);
  const categories = [...new Set(availableItems.map((item) => item.category))];

  return (
    <Page theme={cafeTheme}>
      <Section
        style={{
          backgroundColor: token("colors.primary"),
          color: "#FFFFFF",
          padding: 32,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ color: "#F5E6D3", fontSize: 12, fontWeight: 700 }}>
          FRESHLY PREPARED • MADE WITH CARE
        </Text>

        <Heading
          level={1}
          style={{ color: "#FFFFFF", fontSize: 34, textAlign: "center" }}
        >
          {cafeData.cafe.name}
        </Heading>

        <Text
          style={{ color: "#F5E6D3", fontSize: 15, textAlign: "center" }}
        >
          {cafeData.cafe.tagline}
        </Text>
      </Section>

      <Section style={{ padding: 30, gap: 20 }}>
        <Heading
          level={2}
          style={{
            color: token("colors.primary"),
            fontSize: 26,
            textAlign: "center",
          }}
        >
          MENU
        </Heading>

        {categories.length > 0 ? (
          categories.map((category) => (
            <Column key={category} style={{ gap: 10 }}>
              <Heading
                level={3}
                style={{ color: token("colors.primary"), fontSize: 19 }}
              >
                {category}
              </Heading>

              <Column style={{ gap: 8 }}>
                {availableItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Row
                      key={item.id}
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                        padding: 8,
                        backgroundColor: token("colors.surface"),
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        {item.name}
                      </Text>

                      <Text
                        style={{
                          color: token("colors.primary"),
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        ₹{item.price}
                      </Text>
                    </Row>
                  ))}
              </Column>
            </Column>
          ))
        ) : (
          <Text style={{ color: token("colors.muted"), fontSize: 16 }}>
            Our menu is currently unavailable. Please check back soon.
          </Text>
        )}
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.secondary"),
          padding: 20,
          alignItems: "center",
          gap: 7,
        }}
      >
        <Heading
          level={3}
          style={{ color: token("colors.primary"), fontSize: 18 }}
        >
          THANK YOU FOR VISITING!
        </Heading>

        <Text
          style={{
            color: token("colors.muted"),
            fontSize: 13,
            textAlign: "center",
          }}
        >
          {cafeData.cafe.address}
        </Text>
      </Section>
    </Page>
  );
};

export default CounterMenu;
