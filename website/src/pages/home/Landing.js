import React from 'react';
import styles from '../../css/scss/styles.module.scss';

function LandingSection() {
  return (
    <section className={styles.landingSection}>
      <SplashContainer>
        <Logo img_src="../../img/glue-main-logo.svg"></Logo>
        <PromoSection>
          <ProjectMission><strong>Enterprise data model</strong> for <strong>buy-side firms</strong>, tailored for the needs of <strong>Wealth and Asset Managers</strong>. The model covers <strong>key entity</strong> domains such as <strong>Business Relationship</strong>, <strong>Investment Strategy</strong>, <strong>Asset Classification</strong> and <strong>Investment Propositions</strong>.</ProjectMission>
        </PromoSection>
      </SplashContainer>
    </section>
  );
}

const SplashContainer = ({ children }) => (
  <div className="home-container">
    <div className="home-splash-fade">
      <div className="wrapper home-wrapper">{children}</div>
    </div>
  </div>
);

const Logo = ({ img_src }) => (
  <div className={styles.projectLogo}>
    <img src={img_src} alt="Project Logo" />
  </div>
);

const PromoSection = ({ children }) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{children}</div>
    </div>
  </div>
);

const ProjectMission = ({ children }) => {
  return (
    <p className={styles.projectMissionText + ' container'}>
      {children}
    </p>
  )
}

export default LandingSection;