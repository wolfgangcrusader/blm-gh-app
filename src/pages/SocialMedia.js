import React from "react";
import "./SocialMedia.css";

const socialMediaImages = [
  {
    id: 1,
    title: "Instagram Post",
    src: "/images/social/1.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 2,
    title: "Instagram Post",
    src: "/images/social/2.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 3,
    title: "Instagram Post",
    src: "/images/social/3.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 4,
    title: "Instagram Post",
    src: "/images/social/4.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 5,
    title: "Instagram Post",
    src: "/images/social/5.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 6,
    title: "Instagram Post",
    src: "/images/social/6.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 7,
    title: "Instagram Post",
    src: "/images/social/7.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 8,
    title: "Instagram Post",
    src: "/images/social/8.png",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1350)",
  },
  {
    id: 9,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (1).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 10,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (2).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 11,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (3).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 12,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (4).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 13,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (5).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 14,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (6).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 15,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (7).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 16,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (8).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 17,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (9).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 18,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (10).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
  {
    id: 19,
    title: "Instagram Story or Tiktok",
    src: "/images/social/story (11).gif",
    alt: "BHM awareness - Instagram Post",
    dimensions: "(1080x1920)",
  },
];

const SocialMediaDownloads = () => {
  return (
    <div className="social-downloads-container">
      {/* Hero Section */}
      <header className="blood-drive-hero">
        <h1 className="blood-drive-text">Spread Awareness</h1>
        <h1 className="blood-drive-text">Download and share on social media</h1>
      </header>

      {/* Downloadable Images Section */}
      <section className="social-media-downloads">
        <p className="download-subtext">
          It's okay if you can't donate money to the cause, you can still use
          your platform and social media accounts for free to promote messages
          that empower the black community! <br/>
          Click below to download and share these images on social media. xo wolf
        </p>

        <div className="social-grid">
          {socialMediaImages.map((image) => (
            <div key={image.id} className="social-card">
              <img src={image.src} alt={image.alt} className="social-image" />
              <a href={image.src} download className="download-button">
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="social-media-impact">
        <h2>Use Your Platform for Good</h2>
        <p className="impact-subtext">
          If you can’t donate money, your voice is just as valuable. Social
          media can amplify awareness, educate, and drive real change.
        </p>

        <div className="social-impact-grid">
          <div className="social-impact-card">
            <h3>📢 Raise Awareness</h3>
            <p>
              By sharing posts, stories, and tweets, you help bring visibility
              to the importance of supporting the Black community.
            </p>
          </div>

          <div className="social-impact-card">
            <h3>💡 Educate & Inspire</h3>
            <p>
              Use your platform to share facts, debunk myths, and encourage
              conversations about why Black blood donors are crucial for saving
              lives.
            </p>
          </div>

          <div className="social-impact-card">
            <h3>🤝 Mobilize Your Community</h3>
            <p>
              Encourage friends and followers to sign up for a blood drive,
              volunteer, or donate. Collective action starts with one post.
            </p>
          </div>

          <div className="social-impact-card">
            <h3>🎤 Amplify Black Voices</h3>
            <p>
              Support Black-led organizations, blood donation advocates, and
              community leaders by sharing their messages and resources.
            </p>
          </div>

          <div className="social-impact-card">
            <h3>🆓 Make a Difference Without Spending Money</h3>
            <p>
              Even if you can’t make a financial donation, your time and effort
              on social media can be just as impactful in driving awareness and
              action.
            </p>
          </div>

          <div className="social-impact-card">
            <h3>🚀 Viral Power = Bigger Impact</h3>
            <p>
              One viral post can reach thousands, leading to more donors, more
              support, and more lives saved. Your voice has power—use it!
            </p>
          </div>
        </div>
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

export default SocialMediaDownloads;
