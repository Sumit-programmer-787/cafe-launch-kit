
import React from "react";
import { Page, Section, Heading, Text, render } from "@hyper-elements/react";
import fs from "node:fs";

const Test = () => (
  <Page>
    <Section
      style={{
        backgroundColor: "#8B4513",
        color: "#FFFFFF",
        padding: 40,
        gap: 12,
      }}
    >
      <Heading level={1} style={{ fontSize: 36, color: "#FFFFFF" }}>
        Styling Test
      </Heading>

      <Text style={{ fontSize: 18, color: "#FFFFFF" }}>
        If this text is white on brown, styling works!
      </Text>
    </Section>
  </Page>
);

const result = await render(<Test />);

fs.writeFileSync("style-test.html", result.html, "utf8");

console.log("Diagnostics:", result.diagnostics);
