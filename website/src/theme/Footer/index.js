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
          <div className={styles.footerLogoContainer}>
            <FooterLink url={config.baseUrl}>
              <img src={config.baseUrl + footerIconUrl}
                alt={config.title}
              />
            </FooterLink>
          </div>
          <div className={styles.finosLogoContainer}>
            <div className={styles.logoContainer}>
              <FooterLink url="https://www.finos.org">
                <img id="finosicon" src={`../../../static/img/finos_wordmark.svg`} height='75px' alt="FINOS" title="FINOS" />
                <h2 id="proud">Proud member of the Fintech Open Source Foundation</h2>
              </FooterLink>
            </div>
          </div>
          <GithubLink></GithubLink>
          <div className={styles.emailContainer}>
            <Email className={styles.email}></Email>
          </div>
          {/* <div className={styles.socialContainer}>
            <TwitterLink></TwitterLink>
            <LinkedinLink></LinkedinLink>
          </div> */}
        </section>
        {/* <section className="copyright">{config.copyright}</section> */}
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
  <FooterLink url={`mailto:glue@epam.org?subject="Contribution Question"`} noTarget={true}>glue@epam.org</FooterLink>
);

const TwitterLink = () => (
  <div className="social">
    <FooterLink
      url={`https://twitter.com/${config.twitterUsername}`}
      className={styles.twitterLink}>
      Follow {config.twitterUsername}
    </FooterLink>
  </div>
);

const LinkedinLink = () => (
  <div className="social">
    <FooterLink
      url={`https://www.linkedin.com/company/finosfoundation`}
      className={styles.linkedinLink}>
      FINOS on LinkedIn
    </FooterLink>
  </div>
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
      <img src={"../../../static/img/github-alt.svg"} height='75px' className={styles.githubLogo} />
    </FooterLink>
  </div>
)

export default Footer;
