import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1 className="home-hero-text">BLACK HISTORY MONTH</h1>
        <h3 className="home-hero-text"> Take Action with The GH</h3>
      </header>

      <div className="home-about">
        <p className="home-paragraph">
          The Gamers Haven is an all-girls gaming server committed to
          inclusivity, empowerment, and making a difference. This Black History
          Month, we are taking action through multiple ways! <br/>
          If you want to be an ally to the Black Community and support BHM, we have put together
          a number of ways for you to take action!
          <br/>           <br/>
          <strong>Click on the tiles below to discover different ways
          you can support without needing lots of money! xo wolf</strong>
        </p>
      </div>
      <div className="home-grid-section">
        <div className="home-image-grid">
        <a href="/boost" className="home-grid-item">
            <img
              src="/images/tiles/boost.png"
              alt="Boost us for BHM"
            />
          </a>
          <a href="/black-creators" className="home-grid-item">
            <img
              src="/images/tiles/creators.png"
              alt="List of Black Creators to Follow"
            />
          </a>
          <a href="/black-owned-etsy" className="home-grid-item">
            <img src="/images/tiles/etsy.png" alt="Black-Owned Etsy Stores" />
          </a>

          <a href="/social" className="home-grid-item">
            <img
              src="/images/tiles/social.png"
              alt="Promote Empowering Graphics"
            />
          </a>
          <a href="/blood-drive" className="home-grid-item">
            <img
              src="/images/tiles/blood.png"
              alt="How to Host a Blood Drive"
            />
          </a>
          <a href="/movies" className="home-grid-item">
            <img
              src="/images/tiles/movie.png"
              alt="Watch Movies to Empower the Black Community"
            />
          </a>
          <a href="/petition" className="home-grid-item">
            <img
              src="/images/tiles/petition.png"
              alt="Sign petitions to help pro-black movements"
            />
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 The Gamers Haven | Black Lives Matter</p>
      </footer>
    </div>
  );
};

export default Home;
