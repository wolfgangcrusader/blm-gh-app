import React from "react";
import "./BlackOwnedEtsy.css";

const blackOwnedEtsyStores = [
  {
    name: "ShopUbuntu",
    link: "https://www.etsy.com/nz/shop/ShopUbuntu",
    image: "/images/ubuntu.webp",
    description:
      "Ubuntu is dedicated to finding the most beautiful gemstones and semi precious stones to create effortless jewelry that can be worn by women of any age.",
  },
  {
    name: "DorcasCreates",
    link: "https://www.etsy.com/nz/shop/DorcasCreates",
    image: "/images/dorcas.webp",
    description:
      "DorcasCreates is a visual artist obsessed with illustrating Black women and centering them in her work.",
  },
  {
    name: "KandKQuiltedTreasure",
    link: "https://www.etsy.com/nz/shop/KandKQuiltedTreasure",
    image: "/images/k.webp",
    description:
      "When people look at my quilts, I want them to see my personality. I want my quilts to show my personality, and how colors and patterns can be used to represent life’s many changes.",
  },
  {
    name: "CoolCrayations",
    link: "https://www.etsy.com/shop/CocoaButterEssentials",
    image: "/images/cray.webp",
    description:
      "I wanted my crayons to....Be meaningful. Be empowering. Be educational. Be purposeful. So, I decided to create crayons with a purpose. ",
  },
  {
    name: "EmmaMakeStudio",
    link: "https://www.etsy.com/nz/shop/EmmaMakeStudio",
    image: "/images/emma.webp",
    description:
      "Lisbon-based artist Emma Make designs is a great source for colorful home decor—she designs all kinds of whimsical, geometric prints, planners, and wall hangings.",
  },
  {
    name: "OmiWoods",
    link: "https://www.etsy.com/shop/OmiWoods",
    image: "/images/omi.webp",
    description:
      "For Insta-worthy jewelry, look no further than Omi Woods. Founder Ashley Alexis McFarlane says her designs are inspired by her African heritage and the African diaspora.",
  },
  {
    name: "TW Aromatics & Co",
    link: "https://www.etsy.com/shop/TWAromaticsandCo",
    image: "/images/tw.webp",
    description:
      "Whether you’re into moody notes of plum and black cherry or prefer the freshness of tropical fruit and sage, “each scent has a purpose to bring about balance, peace, and motivation,”",
  },
  {
    name: "MadeByRheal",
    link: "https://www.etsy.com/shop/MadeByRheal",
    image: "/images/rhe.webp",
    description:
      "Made by Rheal’s handcrafted pieces are a total win among home decor enthusiasts.",
  },
];

const BlackOwnedEtsy = () => {
  return (
    <div className="container">
      <header className="hero">
        <h1 className="hero-text">BLACK-OWNED ETSY STORES</h1>
      </header>

      <section className="about">
        <p>
          Supporting Black-owned businesses is a direct way to uplift
          communities. Check out these amazing Etsy stores and shop with
          purpose!
        </p>
      </section>

      <section className="listings-section">
        {blackOwnedEtsyStores.map((store, index) => (
          <div key={index} className="listing-card">
            <img src={store.image} alt={store.name} className="listing-image" />
            <div className="listing-info">
              <h2>{store.name}</h2>
              <p>{store.description}</p>
              <a
                href={store.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                Visit Store →
              </a>
            </div>
          </div>
        ))}
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
export default BlackOwnedEtsy;
