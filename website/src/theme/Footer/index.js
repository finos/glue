import React, { Component } from 'react';
import styles from '../../css/scss/styles.module.scss';
import config from '../../../docusaurus.config';

const footerIconUrl = 'img/glue-main-logo.svg';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className={styles.footer} id="footer">
        <section>
          <div className={styles.footerContainer}>
            <GlueLink></GlueLink>
            <FinosLink></FinosLink>
            <EpamLink></EpamLink>
            <GithubLink></GithubLink>
          </div>
          <div className={styles.emailContainer}>
            <Email className={styles.email}></Email>
          </div>
        </section>
      </footer >
    );
  }
}

const FooterLink = ({ children, url, noTarget }) => {
  let link = null;
  if(noTarget) {
    link = (<a href={url} className={styles.footerLink}>{children}</a>);
  }
  else {
    link = (<a href={url} className={styles.footerLink}>{children}</a>);
  }
  return link;
};

const Email = () => (
  <FooterLink url={`mailto:glue@epam.com?subject="Contribution Question"`} noTarget={true}>glue@epam.com</FooterLink>
);

const GithubLink = () => (
  <div className={styles.githubLogoContainer}>
    <FooterLink
      className={styles.githubLink} // part of the https://buttons.github.io/buttons.js script in siteConfig.js
      url={config.githubHost}
      data-count-href={`${config.githubHost}`}
      data-show-count="true"
      data-count-aria-label="# stargazers on GitHub"
      aria-label="Star this project on GitHub">
      <img src={"../../img/github-alt.svg"} height='100px' className={styles.githubLogo} />
    </FooterLink>
  </div>
)

const FinosLink = () => (
  <div className={styles.finosLogoContainer}>
    <div className={styles.logoContainer}>
      <FooterLink url="https://www.finos.org">
        <img id="finosicon" src={`../../img/finos_wordmark.svg`} height='75px' alt="FINOS"/>
        <h2 id="proud">Proud member of the Fintech Open Source Foundation</h2>
      </FooterLink>
    </div>
  </div>
)

const EpamLink = () => (
  <div className={styles.footerLogoContainer}>
    <FooterLink url="https://www.epam.com">
      <img id="epamicon" src={`../../img/epam-logo.svg`}/>
    </FooterLink>
  </div>
)

const GlueLink = () => (
  <div className={styles.footerLogoContainer}>
    <FooterLink url={config.baseUrl}>
      <img src={config.baseUrl + footerIconUrl}
        alt={config.title}
      />
    </FooterLink>
  </div>
)

export default Footer;
