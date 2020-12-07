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
                <img id="finosicon" src={`img/finos_wordmark.svg`} height='75px' alt="FINOS" title="FINOS" />
                <h2 id="proud">Proud member of the Fintech Open Source Foundation</h2>
              </FooterLink>
            </div>
          </div>
          {/* <div>
            <h5>Docs</h5>
            <a href={docUrl('home')}>
              Getting Started
              </a>
            <a href={docUrl('team')}>
              Team
              </a>
            <a href={docUrl('roadmap')}>
              Roadmap
              </a>
          </div> */}
          <div>
            {/* <h5>FINOS</h5> */}
            {/* <a
              href="https://www.finos.org/"
              target="_blank"
              rel="noreferrer noopener">
              FINOS Website
              </a>
            <a
              href="https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook"
              target="_blank"
              rel="noreferrer noopener">
              Community Handbook
              </a>
            <a
              href="https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530783/Community+Governance"
              target="_blank"
              rel="noreferrer noopener">
              Community Governance
              </a> */}
          </div>
          {/* <div className={styles.socialContainer}>
            <TwitterLink></TwitterLink>
            <LinkedinLink></LinkedinLink>
            <GithubLink></GithubLink>
          </div> */}
        </section>
        {/* <section className="copyright">{config.copyright}</section> */}
      </footer >
    );
  }
}

const FooterLink = ({ children, url }) => (
  <a href={url} className={styles.footerLink} target="_blank">{children}</a>
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
  <div className="social">
    <FooterLink
      className={styles.githubLink} // part of the https://buttons.github.io/buttons.js script in siteConfig.js
      url={config.repoUrl}
      data-count-href={`${config.repoUrl}/stargazers`}
      data-show-count="true"
      data-count-aria-label="# stargazers on GitHub"
      aria-label="Star this project on GitHub">
      {config.projectName}
    </FooterLink>
  </div>
)

export default Footer;
