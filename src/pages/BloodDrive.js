import React from "react";
import "./BloodDrive.css";

const BloodDrivePage = () => {
  return (
    <div className="blood-drive-container">
      {/* Hero Section */}
      <header className="blood-drive-hero">
        <h1 className="blood-drive-text">Plan a Blood Drive</h1>
        <p className="blood-drive-text">
          Make a difference in the Black community
        </p>
      </header>

      {/* Intro */}
      <section className="blood-drive-intro">
        <p>
          Blood donation is a critical need, especially in the Black community,
          where rare blood types like Ro are more prevalent. Hosting a blood
          drive can save lives, support those with sickle cell disease, and
          strengthen healthcare access for all.
        </p>
        <a
          href="https://www.redcrossblood.org/hosting-a-blood-drive/learn-about-hosting/how-hosting-a-blood-drive-works/apply-to-host-a-blood-drive.html"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Now
        </a>
      </section>

      {/* What the Host & Red Cross Provides */}
      <section className="blood-drive-details">
        <h2>How Hosting a Blood Drive Works</h2>

        <div className="details-container">
          {/* Left Side - Host Responsibilities */}
          <div className="details-column">
            <h3>📍 What You Provide as a Host</h3>
            <ul>
              <li>
                <strong>🏢 Location:</strong> A large open room with space for
                donor privacy.
              </li>
              <li>
                <strong>👐 Volunteers:</strong> To recruit, schedule, and assist
                donors.
              </li>
              <li>
                <strong>🩸 Donors:</strong> Your job is to recruit and sign up
                enough donors.
              </li>
            </ul>
          </div>

          {/* Right Side - Red Cross Responsibilities */}
          <div className="details-column">
            <h3>🚑 What the Red Cross Provides</h3>
            <ul>
              <li>
                <strong>📅 Planning Assistance:</strong> A dedicated Red Cross
                rep helps organize your drive.
              </li>
              <li>
                <strong>🖥️ Recruitment Tools:</strong> Online scheduling and
                marketing tools to attract donors.
              </li>
              <li>
                <strong>📦 Equipment & Supplies:</strong> Everything from beds
                to snacks for post-donation recovery.
              </li>
              <li>
                <strong>👩‍⚕️ Trained Medical Staff:</strong> Professionals to
                screen donors and handle collections safely.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Steps to Organizing a Drive */}
      <section className="blood-drive-steps">
        <h2>Steps to Organizing a Successful Blood Drive</h2>

        <div className="step">
          <h3>✅ Before the Drive</h3>
          <ul>
            <li>✔️ Work with a Red Cross representative for guidance.</li>
            <li>
              ✔️ Set a date well in advance, avoiding conflicts with major
              events.
            </li>
            <li>✔️ Choose a large open room for privacy and efficiency.</li>
            <li>✔️ Recruit volunteers to help with sign-ups and operations.</li>
            <li>
              ✔️ Use social media, newsletters, and flyers to recruit donors.
            </li>
            <li>
              ✔️ Engage community partners to provide incentives and thank-you
              gifts.
            </li>
            <li>✔️ Follow Red Cross checklists to stay on track.</li>
          </ul>
        </div>

        <div className="step">
          <h3>✅ Day of the Drive</h3>
          <ul>
            <li>✔️ Ensure smooth check-in and donor screening.</li>
            <li>
              ✔️ Keep snacks and drinks available for post-donation recovery.
            </li>
            <li>✔️ Manage appointments efficiently to minimize wait times.</li>
          </ul>
        </div>

        <div className="step">
          <h3>✅ Post-Drive</h3>
          <ul>
            <li>✔️ Thank donors and encourage them to donate again.</li>
            <li>✔️ Review the success of the drive and gather feedback.</li>
            <li>✔️ Plan ways to improve for future blood drives.</li>
          </ul>
        </div>
      </section>

      {/* Importance for the Black Community */}
      <section className="blood-drive-impact">
        <h2>How Blood Donations Help the Black Community</h2>

        <div className="impact-card">
          <h3>More Life-Saving Transfusions</h3>
          <p>
            Black patients are more likely to find a compatible blood match
            from a Black donor, reducing transfusion complications and improving
            recovery outcomes.
          </p>
        </div>

        <div className="impact-card">
          <h3>Helping Sickle Cell Patients</h3>
          <p>
            Over 100,000 Black Americans live with sickle cell disease,
            a painful condition requiring regular blood transfusions to
            prevent severe complications and organ damage.
          </p>
        </div>

        <div className="impact-card">
          <h3>Emergency & Trauma Care</h3>
          <p>
            Black individuals face higher maternal mortality rates and
            greater health disparities. More Black blood donors ensure
            hospitals have enough supply for childbirth, surgeries, and
            life-saving treatments.
          </p>
        </div>

        <div className="impact-card">
          <h3>Universal Donors Save More Lives</h3>
          <p>
            Many Black individuals have O-negative (O-) blood, the
            universal donor type. This means their blood can be used for
            any patient in emergencies, including newborns and trauma
            victims.
          </p>
        </div>

        <div className="impact-card">
          <h3>Strengthening the Community</h3>
          <p>
            More Black blood donations mean better healthcare access for
            Black patients, ensuring they receive faster and more effective
            treatment when they need it most.
          </p>
        </div>

        <div className="impact-card">
          <h3>Preventing Blood Shortages</h3>
          <p>
            Black patients often require ethnically matched blood, but Black
            donors make up only 3-5% of all donors nationwide. Your donation
            can help prevent shortages and save lives.
          </p>
        </div>

        <div className="impact-card">
          <h3>Supporting Future Generations</h3>
          <p>
            By donating today, you help ensure that your family, children, and
            future generations will have access to the blood they need in
            times of crisis.
          </p>
        </div>
      </section>

      {/* Resources & External Links */}
      <section className="blood-drive-resources">
        <h2>Essential Blood Drive Resources</h2>
        <p className="resources-subtext">
          Everything you need to run a successful blood drive.
        </p>

        <div className="resource-list">
          <a
            href="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/hosting-a-blood-drive/components/242602-07_RunSuccessfulDrive_FullSpread_25.5x11sheet_RW-Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h3>📌 Running a Successful Drive</h3>
            <p>
              Step-by-step guide to organizing and executing a drive
              effectively.
            </p>
          </a>

          <a
            href="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/hosting-a-blood-drive/components/242602-6_DayofDriveChecklist_BloodProgramLeader_032119-AR%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h3>🗓️ Day of Drive Checklist</h3>
            <p>
              Everything to remember on the big day to keep your blood drive
              running smoothly.
            </p>
          </a>

          <a
            href="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/hosting-a-blood-drive/components/242602-6_PostDriveChecklist_BloodProgramLeader_032119-AR%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h3>✅ Post Drive Checklist</h3>
            <p>
              How to follow up with donors and ensure your drive makes a lasting
              impact.
            </p>
          </a>

          <a
            href="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/hosting-a-blood-drive/components/242602-6_RecruitToolsChecklist_BloodProgramLeader_032119-AR%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h3>📢 Recruitment Tools</h3>
            <p>
              Maximize turnout with official promotional materials and outreach
              strategies.
            </p>
          </a>

          <a
            href="https://www.redcrossblood.org/faq.html#donating-blood"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h3>❓ FAQs for Donors</h3>
            <p>
              Answers to common questions about donating blood and eligibility.
            </p>
          </a>
          <a
            href="https://www.redcrossblood.org/hosting-a-blood-drive/learn-about-hosting/how-hosting-a-blood-drive-works.html"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Learn More & Host a Drive</h3>
            <p>Click here for more info on how to start</p>
          </a>
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

export default BloodDrivePage;
