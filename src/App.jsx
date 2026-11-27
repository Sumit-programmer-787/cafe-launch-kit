import { useState } from "react";
import "./App.css";
import chaiData from "./data/cafeData";
import beanData from "./data/beanBrewData";

const outputs = [
  {
    number: "01",
    title: "Customer Menu",
    description: "A live menu that automatically hides unavailable items.",
    type: "HTML MENU",
    href: "/customer-menu.html",
    preview: "menu",
  },
  {
    number: "02",
    title: "Counter Menu",
    description: "A polished, category-wise menu ready for printing.",
    type: "PRINT DESIGN",
    href: "/counter-menu.html",
    preview: "counter",
  },
  {
    number: "03",
    title: "Kitchen Prep",
    description: "Preparation quantities and availability for your team.",
    type: "KITCHEN DOCUMENT",
    href: "/kitchen-prep-sheet.pdf",
    preview: "pdf",
  },
  {
    number: "04",
    title: "Daily WhatsApp Update",
    description: "A ready-to-share visual update for your customers.",
    type: "SOCIAL IMAGE",
    href: "/whatsapp-daily-update.png",
    preview: "image",
  },
];

function OutputPreview({ type, cafe }) {
  const basePath = `/demos/${cafe}`;

  if (type === "image") {
    return (
      <img
        className="real-preview whatsapp-preview"
        src={`${basePath}/whatsapp-daily-update.png`}
        alt="WhatsApp daily update preview"
      />
    );
  }

  const file =
    type === "menu"
      ? "customer-menu.html"
      : type === "counter"
      ? "counter-menu.html"
      : "kitchen-prep-sheet.pdf";

  return (
    <iframe
      className={`real-preview ${type}-preview`}
      src={`${basePath}/${file}`}
      title={`${type} output preview`}
      loading="lazy"
    />
  );
}

function App() {
  const [activeCafe, setActiveCafe] = useState("chai");

  const cafeData = activeCafe === "chai" ? chaiData : beanData;

  console.log("Selected cafe:", activeCafe);
  console.log("Preview path:", `/demos/${activeCafe}/kitchen-prep-sheet.pdf`);
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">C</span>
          <span>
            chaiboard<span className="brand-dot">.</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#workflow">How it works</a>
          <a href="#outputs">Templates</a>
          <a href="#about">About</a>
          <a
            href="https://github.com/Sumit-programmer-787/cafe-launch-kit"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <a href="#outputs" className="nav-cta">
          Explore the kit ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot"></span>
            A DAILY CONTENT SYSTEM FOR CAFÉS
          </div>

          <h1>
            Run your café.
            <br />
            <span>Not four different</span>
            <br />
            content workflows.
          </h1>

          <p className="hero-description">
            One menu. One source of truth. Every daily update,
            from customer-facing menus to the kitchen prep sheet.
          </p>

          <div className="hero-actions">
            <a href="#outputs" className="primary-cta">
              Explore the templates <span>↗</span>
            </a>

            <a href="#workflow" className="secondary-cta">
              See how it works
            </a>
          </div>

          <div className="hero-caption">
            <span>BUILT FOR INDEPENDENT CAFÉS</span>
            <span className="caption-divider"></span>
            <span>POWERED BY HYPER ELEMENTS</span>
          </div>
        </div>

        {/* LIVE CAFE DASHBOARD */}
        <div className="hero-visual">
          <div className="cafe-switcher">
            <span>EXPLORE DEMO:</span>

            <button
              className={activeCafe === "chai" ? "active" : ""}
              onClick={() => setActiveCafe("chai")}
            >
              The Chai Corner
            </button>

            <button
              className={activeCafe === "bean" ? "active" : ""}
              onClick={() => setActiveCafe("bean")}
            >
              Bean & Brew
            </button>
          </div>

          <div className="visual-label">
            TODAY AT {cafeData.cafe.name.toUpperCase()}
          </div>

          <div className="dashboard-window">
            <div className="window-top">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>DAILY MENU OVERVIEW</span>
              <span className="status-pill">● LIVE DEMO</span>
            </div>

            <div className="dashboard-body">
              <div className="dashboard-heading">
                <div>
                  <span className="small-label">
                    FRIDAY · DAILY MENU
                  </span>

                  <h3>{cafeData.cafe.name}</h3>
                  <p>{cafeData.cafe.tagline}</p>
                </div>

                <div className="cafe-symbol">☕</div>
              </div>

              <div className="dashboard-stats">
                <div>
                  <strong>
                    {cafeData.menu.length.toString().padStart(2, "0")}
                  </strong>
                  <span>MENU ITEMS</span>
                </div>

                <div>
                  <strong>
                    {cafeData.menu
                      .filter((item) => item.available)
                      .length.toString()
                      .padStart(2, "0")}
                  </strong>
                  <span>AVAILABLE</span>
                </div>

                <div>
                  <strong>
                    {cafeData.menu
                      .filter((item) => !item.available)
                      .length.toString()
                      .padStart(2, "0")}
                  </strong>
                  <span>SOLD OUT</span>
                </div>
              </div>

              <div className="dashboard-menu-title">
                <span>MENU AVAILABILITY</span>
                <span>PRICE</span>
              </div>

              {cafeData.menu.map((item) => (
                <div className="dashboard-item" key={item.id}>
                  <div className="item-info">
                    <span
                      className={`item-indicator ${
                        item.available ? "" : "sold"
                      }`}
                    ></span>

                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.category}</small>
                    </div>
                  </div>

                  <div className="item-price">
                    <strong>₹{item.price}</strong>

                    <small
                      className={
                        item.available ? "available" : "unavailable"
                      }
                    >
                      {item.available ? "Available" : "Sold out"}
                    </small>
                  </div>
                </div>
              ))}

              <div className="dashboard-footer">
                <span>ONE DATA SOURCE</span>
                <span>↗ FOUR GENERATED OUTPUTS</span>
              </div>
            </div>
          </div>

          <div className="floating-note">
            <span>✦</span>
            Update once. Stay consistent everywhere.
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <span>ONE SHARED DATASET</span>
        <b>→</b>
        <span>FOUR PRACTICAL OUTPUTS</span>
        <b>→</b>
        <span>ONE CONSISTENT CAFÉ BRAND</span>
      </section>

      {/* WORKFLOW */}
      <section className="workflow section" id="workflow">
        <div className="section-heading">
          <span className="eyebrow">THE IDEA BEHIND CHAIBOARD</span>

          <h2>
            Change it once.
            <br />
            <span>Use it everywhere.</span>
          </h2>

          <p>
            Your café's menu information stays in one place.
            ChaiBoard turns it into the content your customers
            and team need every day.
          </p>
        </div>

        <div className="workflow-steps">
          <div className="workflow-card source-card">
            <span className="step-number">01 / SOURCE</span>
            <div className="workflow-icon">▤</div>
            <h3>Your café data</h3>
            <p>Names, prices, availability and kitchen quantities.</p>
            <span className="code-chip">cafeData.js</span>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-card outputs-card">
            <span className="step-number">02 / GENERATE</span>
            <div className="workflow-icon">✳</div>
            <h3>Four useful formats</h3>
            <p>
              Customer menu, counter menu, prep sheet and daily update.
            </p>
            <span className="code-chip">Hyper Elements</span>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-card result-card">
            <span className="step-number">03 / RESULT</span>
            <div className="workflow-icon">✓</div>
            <h3>Consistent every day</h3>
            <p>
              Customers and staff see the same updated information.
            </p>
            <span className="code-chip">Ready to use</span>
          </div>
        </div>
      </section>

      {/* OUTPUT TEMPLATES */}
      <section className="outputs-section section" id="outputs">
        <div className="outputs-heading">
          <div>
            <span className="eyebrow">MADE FROM ONE SOURCE</span>

            <h2>
              Four formats.
              <br />
              <span>One café identity.</span>
            </h2>
          </div>

          <p>
            Take a closer look at the actual outputs generated
            by the ChaiBoard demo.
          </p>
        </div>

        <div className="outputs-grid">
          {outputs.map((output) => (
            <article className="template-card" key={output.number}>
              <div className="template-preview">
                <OutputPreview
                  type={output.preview}
                  cafe={activeCafe}
                />
              </div>

              <div className="template-details">
                <div className="template-meta">
                  <span>{output.type}</span>
                  <span>{output.number}</span>
                </div>

                <h3>{output.title}</h3>
                <p>{output.description}</p>

                <a
                  href={`/demos/${activeCafe}/${
                    output.preview === "menu"
                      ? "customer-menu.html"
                      : output.preview === "counter"
                      ? "counter-menu.html"
                      : output.preview === "pdf"
                      ? "kitchen-prep-sheet.pdf"
                      : "whatsapp-daily-update.png"
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open output <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div>
          <span className="eyebrow">
            A SMALL TOOL WITH A PRACTICAL PURPOSE
          </span>

          <h2>
            Made for the people
            <br />
            behind the counter.
          </h2>

          <p>
            ChaiBoard is a reusable, white-label content kit
            built to make everyday café communication simpler.
          </p>
        </div>

        <div className="about-stamp">
          BREW
          <br />
          BETTER
          <br />
          DAILY
          <span>✳</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-icon">C</span>
          <span>
            chaiboard<span className="brand-dot">.</span>
          </span>
        </a>

        <p>Built with care, React and Hyper Elements.</p>

        <a
          href="https://github.com/Sumit-programmer-787/cafe-launch-kit"
          target="_blank"
          rel="noreferrer"
        >
          View source code on GitHub ↗
        </a>

        <span>© 2026 CHAIBOARD</span>
      </footer>
    </main>
  );
}

export default App;