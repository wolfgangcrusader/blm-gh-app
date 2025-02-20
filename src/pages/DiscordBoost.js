import React from "react";
import "./DiscordBoost.css";

const DiscordBoostPage = () => {
  return (
    <div className="discord-boost-container">
      {/* Hero Section */}
      <header className="blood-drive-hero">
        <h1 className="blood-drive-text">
          Boost Our Discord, Support Black Charities
        </h1>
      </header>

      {/* Explanation Section */}
      <section className="boost-explanation">
        <p className="boost-subtext">
          For rest of February with every boost that our server gets,
          we’ll donate $1 to a bunch of charities that are helping Black
          Communities.
        </p>
        <h2>What is a Discord Server Boost?</h2>
        <p>
          A server boost is a way to support a Discord community by unlocking
          premium perks like better audio quality, custom banners, and exclusive
          emojis.
        </p>
        <p>
          By boosting our server, you’re not just supporting our
          community—you’re helping us raise funds for Black History Month!
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How Our BHM Initiative Works 🔥</h2>
        <div className="steps-container">
          <div className="step-card">
            <h3>Boost Our Server</h3>
            <p>
              Go to our Discord server and click "Server Boost" in the settings.If you need help finding this, open a ticket and ask our staff for help!
            </p>
          </div>
          <div className="step-card">
            <h3>We Donate $2</h3>
            <p>
              For every boost we receive, we’ll donate $2 to Black-led
              charities.
            </p>
          </div>
          <div className="step-card">
            <h3>Funds Are Split</h3>
            <p>
              The total amount raised will be split evenly between charities like the NAACP that support the Black Community.
              We will show any proof of donation in an announcement at the end of the month!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="boost-cta">
        <h2>Ready to Boost & Give Back?</h2>
        <p className="boost-message">
          Every Discord Boost helps our server and supports amazing Black
          charities! Join us in making a difference while unlocking fun
          server perks!
        </p>
        <p className="boost-note">
          Plus, our server will appreciate your support! ✨
        </p>
        <a
          href="https://discord.gg/nR3sEMQHeH"
          target="_blank"
          rel="noopener noreferrer"
          className="boost-button"
        >
          Boost Now
        </a>
      </section>
      
      <footer className="footer">
        <a href="/" className="cta-button">
          ← Back to Home
        </a>
        <p>&copy; 2025 The Gamers Haven | Black Lives Matter</p>
      </footer>
    </div>
  );
};

export default DiscordBoostPage;
