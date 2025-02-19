import React from "react";
import "./blackCreators.css";

const BlackCreators = () => {
  const creators = [
    {
      name: "Nyma Tang",
      summary:
        "A trailblazing beauty influencer, model and activist, Nyma Tang is an outspoken advocate for more diverse representation and shade ranges in the beauty industry. ",
      link: "https://www.instagram.com/nymatang/",
      image: "/images/nyma.jpg",
    },
    {
      name: "Kimberly Renee",
      summary:
        "Passionate about all things justice, intersectional, environmentalism, and plant-based living, Kimberly is a multi-hyphenate creator, producer, chef, actor, and singer with a bachelor of science in marketing from HBCU North Carolina A&T State University.",
      link: "https://www.instagram.com/itskimberlyrenee/",
      image: "/images/kimberly.webp",
    },
    {
      name: "Taylor Cassidy",
      summary:
        "Taylor prioritizes Black culture by teaching Black History through her “Fast Black History” series and uplifting current creatives in her mini talk show, “Black Girl Magic Minute.” Her purpose is to help her audience find the beauty in themselves and appreciate their cultural roots as well.",
      link: "https://www.instagram.com/taylorcassidyj",
      image: "/images/taylor.webp",
    },
    {
      name: "Lynae Vanee",
      summary:
        "​NAACP Image Award Nominee Lynae Vanee is a multifaceted performer, poet, influencer, writer, and actress hailing from Atlanta, Georgia. A graduate of Spelman College and Boston University with a Master’s Degree in African American Studies, Lynae uses her digital platforms to speak on race, feminism, politics, and inclusivity.",
      link: "https://www.instagram.com/lynaevanee",
      image: "/images/lynae.jpg",
    },
    {
      name: "Blair Imani",
      summary:
        "Blair Imani is writer, mental health advocate, and historian living at the intersections of Black, Queer, and Muslim identity. As an educator, influencer, and semi-retired organizer, Blair Imani is dedicated to making the world less terrible and amplifying the voices and work of those fighting the good fight.",
      link: "https://www.instagram.com/blairimani",
      image: "/images/blair.jpg",
    },
    {
      name: "Nick Courmon",
      summary:
        "Nick Courmon is an international poet, spoken word artist, recording artist, workshop facilitator, and motivational speaker from Greensboro, NC. He uses his art to teach African American History, address a myriad of social issues, and advocate for mental health awareness.",
      link: "https://www.tiktok.com/@ndcpoetry",
      image: "/images/nick.jpg",
    },
    {
      name: "Allyson Felix",
      summary:
        "Decorated Olympian and advocate for women’s empowerment, Allyson is redefining athletic sponsorships as she shares insights into her life as an athlete, mom, and entrepreneur.",
      link: "https://www.instagram.com/allysonfelix/?hl=en",
      image: "/images/felix.jpeg",
    },
    {
      name: "Wisdom Kaye",
      summary:
        "Dubbed the best-dressed man on TikTok this fashion creator captivates with bold, editorial-inspired outfits, merging high fashion with everyday wear and redefining modern menswear.",
      link: "https://www.instagram.com/wisdm/?hl=en",
      image: "/images/wisdom.webp",
    },
    {
      name: "Anok Yai",
      summary:
        "A trailblazing model and fashion icon gracing runways and campaigns, Anok represents Black excellence in high fashion.",
      link: "https://www.instagram.com/anokyai/?hl=en",
      image: "/images/anok.jpg",
    },
    {
      name: "Rochelle Johnson",
      summary:
        "This fashion blogger is inspiring confidence and embracing her curves with vibrant, bold outfit choices.",
      link: "https://www.instagram.com/iambeauticurve/",
      image: "/images/roc.jpg",
    },
    {
      name: "Essie Golden ",
      summary:
        "Model, content creator, and fashion inspiration all in one. Essie Golden celebrates body positivity and inclusive fashion through creative, confidence-boosting styles.",
      link: "https://www.instagram.com/essiegolden/",
      image: "/images/essie.jpeg",
    },
    {
      name: "Janea Brown",
      summary:
        "Known for her home and lifestyle content, Los Angeles-based creator Janea Brown is a must-follow for anyone who loves interior design and healthy living. ",
      link: "https://www.instagram.com/jnaydaily/?utm_source=ig_embed&ig_rid=1769de42-5b6b-4eaa-a6b3-d630011cfc8d",
      image: "/images/janea.webp",
    },
    {
      name: "Janicza Bravo",
      summary:
        "Filmmaker, visual artist, and style aficionado with a knack for merging art and fashion in her unbelievably cool content, Janicza’s followers know where to go for immaculate vibes.",
      link: "https://www.instagram.com/janicza/",
      image: "/images/jan.webp",
    },
    {
      name: "Golloria George",
      summary:
        "Golloria is a beauty influencer sharing vibrant looks, skincare tips, and relatable lifestyle content to inspire women. Her creativity and passion empowers her followers to live their authentic selves.",
      link: "https://www.instagram.com/golloria/?hl=en",
      image: "/images/goll.jpg",
    },
    {
      name: "Jackie Aina",
      summary:
        "Jackie is a beauty influencer and activist advocating for diversity in the beauty industry while offering top-tier makeup tutorials and product recommendations.",
      link: "https://www.instagram.com/jackieaina/",
      image: "/images/jackie.webp",
    },
    {
      name: "Keith Lee",
      summary:
        "Food critic turned viral sensation, Keith captures hearts with his honest reviews, heartwarming storytelling, and passion for local eateries.",
      link: "https://www.instagram.com/keith_lee125/?hl=en",
      image: "/images/keith.jpg",
    },
    {
      name: "Tabitha Brown",
      summary:
        "Actress, author, and media personality inspiring joy and positivity through vegan recipes, motivational content, and family values.",
      link: "https://www.instagram.com/iamtabithabrown/",
      image: "/images/tab.jpg",
    },
    {
      name: "Deondrick Hinton",
      summary:
        "Content creator and model Deondrick Hinton is also a photographer, so of course his Instagram features dreamy photos and videos that could be in GQ. Oh wait, they are!",
      link: "https://www.instagram.com/okdeon/",
      image: "/images/deon.webp",
    },
    {
      name: "Fellisia",
      summary:
        "This lifestyle influencer advocates for mental health awareness and offers relatable insights on navigating ADHD.",
      link: "https://www.instagram.com/browngirl.adhd/",
      image: "/images/felli.jpg",
    },
    {
      name: "Devante Burey ",
      summary:
        "Come for the music. Stay for the food and lifestyle content from this social media star.",
      link: "https://www.instagram.com/devodlive",
      image: "/images/devo.jpg",
    },
  ];

  return (
    <div className="container">
      <header className="hero">
        <h1 className="hero-text">Black Creators to Follow</h1>
      </header>
      <section className="about">
        <p>
          If you don’t have the financial means to support the cause, no
          worries! You can still make a difference by following and amplifying
          the platforms of Black creators on social media.
          <br />
          Click on a creators image to follow them and support their platforms
          xo wolf
        </p>
      </section>

      <section className="grid-section">
        <div className="image-grid">
          {creators.map((creator, index) => (
            <div>
              <div key={index} className="grid-item">
                <a
                  href={creator.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={creator.image} alt={creator.name} />
                  <p>{creator.summary}</p>
                </a>
              </div>
              <h2>{creator.name}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="/" className="cta-button">
          ← Back to Home
        </a>
        <p>&copy; 2025 The Gamers Haven | Black Lives Matter</p>
      </footer>
    </div>
  );
};

export default BlackCreators;
