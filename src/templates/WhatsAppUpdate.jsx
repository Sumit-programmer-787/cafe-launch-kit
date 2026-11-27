import React from "react";


import {
  Canvas,
  Section,
  Heading,
  Text,
  Row,
  Column,
  token,
} from "@hyper-elements/react";

import cafeData from "../data/cafeData";
import cafeTheme from "../theme/cafeTheme";

const WhatsAppUpdate = () => {
  const availableItems = cafeData.menu.filter(
    (item) => item.available
  );

  const soldOutItems = cafeData.menu.filter(
    (item) => !item.available
  );

  const today = new Date().toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});
  return (
    <Canvas
  width={1080}
  height={1350}
  theme={cafeTheme}
>
      <Section
        style={{
          backgroundColor: token("colors.primary"),
          padding: 28,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ color: "#F5E6D3", fontSize: 12 }}>
          TODAY'S SPECIAL UPDATE
        </Text>

        <Heading
          level={1}
          style={{ color: "#FFFFFF", fontSize: 30 }}
        >
          {cafeData.cafe.name}
        </Heading>

        <Text style={{ color: "#F5E6D3", fontSize: 14 }}>
          {cafeData.cafe.tagline}
        </Text>

        <Text style={{ color: "#F5E6D3", fontSize: 12 }}>
  {today}
</Text>
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.background"),
          padding: 24,
          gap: 16,
        }}
      >
        <Heading
          level={2}
          style={{ color: token("colors.primary"), fontSize: 22 }}
        >
          AVAILABLE TODAY
        </Heading>

        {availableItems.map((item) => (
          <Row
            key={item.id}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: 700 }}>
              {item.name}
            </Text>

            <Text style={{ color: token("colors.primary"), fontWeight: 700 }}>
              INR {item.price}
            </Text>
          </Row>
        ))}

        {soldOutItems.length > 0 && (
          <Column style={{ gap: 8 }}>
            <Heading
              level={3}
              style={{ color: "#A33A32", fontSize: 18 }}
            >
              SOLD OUT
            </Heading>

            {soldOutItems.map((item) => (
              <Text key={item.id} style={{ color: "#A33A32" }}>
                {item.name}
              </Text>
            ))}
          </Column>
        )}
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.secondary"),
          padding: 18,
          alignItems: "center",
        }}
      >
        <Text style={{ color: token("colors.primary"), fontWeight: 700 }}>
          VISIT US TODAY!
        </Text>

        <Text style={{ color: token("colors.muted"), fontSize: 12 }}>
          {cafeData.cafe.address}
        </Text>
      </Section>
    </Canvas>
  );
};

export default WhatsAppUpdate;