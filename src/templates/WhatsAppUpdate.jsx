
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
import cafeTheme from "../theme/cafeTheme";

const WhatsAppUpdate = ({ cafeData }) => {
  const availableItems = cafeData.menu.filter((item) => item.available);
  const soldOutItems = cafeData.menu.filter((item) => !item.available);

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Keep the image balanced when the menu contains many items.
  const itemFontSize =
    availableItems.length > 12 ? 18 :
    availableItems.length > 8 ? 20 : 23;

  const itemPadding =
    availableItems.length > 12 ? 6 :
    availableItems.length > 8 ? 9 : 12;

  return (
    <Canvas width={1080} height={1350} theme={cafeTheme}>
      <Section
        style={{
          backgroundColor: token("colors.primary"),
          padding: 42,
          alignItems: "center",
          gap: 12,
        }}
      >
        <Text style={{ color: "#F5E6D3", fontSize: 19, fontWeight: 700 }}>
          TODAY'S SPECIAL UPDATE
        </Text>

        <Heading
          level={1}
          style={{
            color: "#FFFFFF",
            fontSize: 44,
            textAlign: "center",
          }}
        >
          {cafeData.cafe.name}
        </Heading>

        <Text
          style={{
            color: "#F5E6D3",
            fontSize: 21,
            textAlign: "center",
          }}
        >
          {cafeData.cafe.tagline}
        </Text>

        <Text style={{ color: "#F5E6D3", fontSize: 17 }}>
          {today}
        </Text>
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.background"),
          padding: 36,
          gap: 16,
        }}
      >
        <Heading
          level={2}
          style={{
            color: token("colors.primary"),
            fontSize: 29,
          }}
        >
          AVAILABLE TODAY
        </Heading>

        {availableItems.length > 0 ? (
          <Column style={{ gap: 5 }}>
            {availableItems.map((item) => (
              <Row
                key={item.id}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: itemPadding,
                  gap: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: itemFontSize,
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    color: token("colors.primary"),
                    fontSize: itemFontSize,
                    fontWeight: 700,
                  }}
                >
                  ₹{item.price}
                </Text>
              </Row>
            ))}
          </Column>
        ) : (
          <Text style={{ fontSize: 21 }}>
            No items are currently available. Please visit us again soon.
          </Text>
        )}

        {soldOutItems.length > 0 && (
          <Column
            style={{
              backgroundColor: "#FCEBE8",
              padding: 16,
              gap: 8,
            }}
          >
            <Heading
              level={3}
              style={{ color: "#A33A32", fontSize: 22 }}
            >
              CURRENTLY SOLD OUT
            </Heading>

            {soldOutItems.map((item) => (
              <Text
                key={item.id}
                style={{ color: "#8C302A", fontSize: 17 }}
              >
                {item.name}
              </Text>
            ))}
          </Column>
        )}
      </Section>

      <Section
        style={{
          backgroundColor: token("colors.secondary"),
          padding: 26,
          alignItems: "center",
          gap: 9,
        }}
      >
        <Heading
          level={3}
          style={{
            color: token("colors.primary"),
            fontSize: 24,
          }}
        >
          VISIT US TODAY!
        </Heading>

        <Text
          style={{
            color: token("colors.muted"),
            fontSize: 17,
            textAlign: "center",
          }}
        >
          {cafeData.cafe.address}
        </Text>
      </Section>
    </Canvas>
  );
};

export default WhatsAppUpdate;
