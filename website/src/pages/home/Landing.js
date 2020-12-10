import React from 'react';
import styles from '../../css/scss/styles.module.scss';

function LandingSection({ siteConfig = { title: "" }, language = '' }) {
  return (
    <section className={styles.landingSection}>
      <SplashContainer>
        <Logo img_src="../../../static/img/glue-main-logo.svg"></Logo>
        <PromoSection>
          <ProjectMission><strong>Enterprise data model</strong> for <strong>buy-side firms</strong>, tailored for the needs of <strong>Wealth and Asset Managers</strong></ProjectMission>
          <Button href='/glue/docs/home'>Get Started</Button>
          <BusinessDomain>Covers <strong>key entity domains</strong> including <strong>Business Relationship, Portfolio</strong> / <strong>Investment Strategy, Asset Classification</strong> / <strong>Instruments and Proposal, Orders and Positions.</strong> </BusinessDomain>
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
  <div className="projectLogo">
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
    <p className={styles.projectMissionText}>
      {children}
    </p>
  )
}

const Button = ({ href, target, children }) => {
  return (
    <div className={styles.buttonWrapper}>
      <a className={styles.buttonLink, styles.getStarted} href={href} target={target}>{children}</a>
    </div>
  );
}

const BusinessDomain = ({children}) => {
  return (
  <p className={styles.businessDomain}>{children}</p>
  )
}

export default LandingSection;