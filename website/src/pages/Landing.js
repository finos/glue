import React from 'react';

const SplashContainer = ({children}) => (
  <div className="home-container">
    <div className="home-splash-fade">
      <div className="wrapper home-wrapper">{children}</div>
    </div>
  </div>
);

const Logo = ({img_src}) => (
  <div className="projectLogo">
    <img src={img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = ({title = "", tagline =""}) => (
  <h2 className="projectTitle">
    {title}
    <small>{tagline}</small>
  </h2>
);

const PromoSection = ({children}) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{children}</div>
    </div>
  </div>
);

const Button = ({href,target,children}) => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={href} target={target}>
      {children}
    </a>
  </div>
);

function LandingSection({siteConfig = {title:""}, language = ''}) {
    return (
      <section className="landing-wrapper">
        <SplashContainer>
        <div className="inner">
          <ProjectTitle title={siteConfig.title} />
          <PromoSection>
            <Button href=''>Get Started</Button>
          </PromoSection>
        </div>
        </SplashContainer>
      </section>
    );
}

export default LandingSection;