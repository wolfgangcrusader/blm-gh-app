import React from "react";
import "./PetitionsPage.css";

const petitions = [
  {
    id: 1,
    title: "Fight in Solidarity with Black Workers",
    link: "https://blacklivesmatter.com/actions/pledge-your-support-fight-in-solidarity-with-black-workers/",
    description:
      "Unionizing is one of the best ways workers can address racial inequities in the workplace.",
  },
  {
    id: 2,
    title: "End Qualified Immunity",
    link: "https://endqi.org/take-action",
    description:
      "Support legislation to hold police officers accountable for misconduct.",
  },
  {
    id: 3,
    title: "Support the Crown Act",
    link: "https://campaigns.organizefor.org/petitions/help-make-hair-discrimination-illegal",
    description:
      "Help end hair discrimination and protect natural Black hairstyles in schools and workplaces.",
  },
  {
    id: 4,
    title: "Reinvest in Black Communities and Defund Police",
    link: "https://blacklivesmatter.com/actions/act-now-to-defund-the-police-and-invest-in-communities/",
    description:
      "Advocate a national defunding of police. Demand investment in our communities and the resources to ensure Black people not only survive, but thrive.",
  },
  {
    id: 5,
    title: "Oppose H.R 9495",
    link: "https://naacp.org/actions/oppose-hr-9495-protect-nonprofit-organizations",
    description:
      "Stand up for justice, for free speech, and to protect organizations that fight for the rights of the people.",
  },
  {
    id: 6,
    title: "Justice for Dau Mabil ",
    link: "https://naacp.org/actions/justice-dau-mabil",
    description:
      "It's time to join together to ensure that Dau's death is fully investigated and justice is served.",
  },
  {
    id: 7,
    title: "Tell Michigan Business Leaders: Protect Black Voters",
    link: "https://act.newmode.net/action/color-change/tell-michigan-business-leaders-protect-black-voters",
    description:
      " Pro-corporate politicians are trying to bring back Jim Crow in a new form by again making it disproportionately harder for black people to vote.",
  },
  {
    id: 8,
    title: "For the love of Blackness Become an Issue Area Champion ",
    link: "https://naacp.org/actions/love-blackness-pledge-advance",
    description:
      "Sign our pledge and be a part of an important mission to uplift, empower, and inspire our communities.",
  },
  {
    id: 9,
    title: "Make Florida Safe for African-Americans",
    link: "https://naacp.org/actions/florida-unsafe-black-americans",
    description:
      "Florida has a goal to erase Black history and restrict diversity, equity, and inclusion programs in Florida schools.",
  },
  {
    id: 10,
    title: "Invest in Black Communities",
    link: "https://naacp.org/actions/invest-black-communities",
    description:
      "Urge your representatives to oppose the Fiscal Responsibility Act's harmful provisions to Black communities and pass a clean debt ceiling.",
  },
  {
    id: 11,
    title: "Demand Educational Freedom in Florida",
    link: "https://naacp.org/actions/demand-educational-freedom-florida",
    description:
      "Florida's current agenda of political interference in the AP African American studies curriculum directly conflicts with the values of equity, fairness, and justice.",
  },
  {
    id: 12,
    title: "Protect Expanded Medicaid Coverage",
    link: "https://naacp.org/actions/protect-expanded-medicaid-coverage",
    description:
      "Urge your Governor to maintain expanded Medicaid coverage during the Medicaid unwinding period for all community members,",
  },
  {
    id: 13,
    title: "Make July 13th Black Lives Matter Day.",
    link: "https://blacklivesmatter.com/actions/make-july-13th-black-lives-matter-day/",
    description:
      "As a way to honor the countless Black folks who have been injured, attacked, murdered, and impacted by police and vigilante violence.",
  },
  {
    id: 14,
    title: "Pledge Against White Supremacy in our Educational System",
    link: "https://blacklivesmatter.com/actions/take-a-pledge-to-commit-to-uproot-white-supremacy-out-of-our-educational-system-once-and-for-all/",
    description:
      "Gov. Ron DeSantis is back again, with the “Stop-WOKE” law, which bans educating our students and children about the covert and overt racism that has and still is established on Black people by racist white supremacists.",
  },
  {
    id: 15,
    title: "Pledge to #BlackLivesMatter",
    link: "https://blacklivesmatter.com/actions/the-movement-continues/",
    description:
      "Take action now and recommit yourself to Black Lives Matter and long-term solidarity with Black liberation by signing your name",
  },
];

const PetitionsPage = () => {
  return (
    <div className="petitions-container">
      {/* Hero Section */}
      <header className="blood-drive-hero">
        <h1 className="blood-drive-text">PETITIONS AND ACTIONS TO TAKE</h1>
      </header>

      {/* Petition List */}
      <section className="petitions-list">
        <p className="petitions-subtext">
          Your signature is powerful! You don't need to be able to donate
          millions of dollars. You can simply take a few seconds of your time to
          sign these petitions to advocate for justice, equality, and systemic
          change. xo wolf
        </p>

        <div className="petitions-grid">
          {petitions.map((petition) => (
            <div key={petition.id} className="petition-card">
              <h3>{petition.title}</h3>
              <p>{petition.description}</p>
              <a
                href={petition.link}
                target="_blank"
                rel="noopener noreferrer"
                className="petition-button"
              >
                Sign Petition
              </a>
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

export default PetitionsPage;
