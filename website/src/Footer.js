/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

function Footer(props) {
  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={props.config.baseUrl} className="nav-home">
          {props.config.footerIcon && (
            <img
              src={props.config.baseUrl + props.config.footerIcon}
              alt={props.config.title}
            />
          )}
        </a>
        <div>
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
        </div>
        <div>
          <h5>FINOS</h5>
          <a
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
              </a>
        </div>
        <div>
          <h5>More</h5>
          <div className="social">
            <a
              className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
              href={props.config.repoUrl}
              data-count-href={`${props.config.repoUrl}/stargazers`}
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              {props.config.projectName}
            </a>
          </div>
          {props.config.twitterUsername && (
            <div className="social">
              <a
                href={`https://twitter.com/${props.config.twitterUsername}`}
                className="twitter-follow-button">
                Follow @{props.config.twitterUsername}
              </a>
            </div>
          )}
          <div className="social">
            <a
              href={`https://www.linkedin.com/company/finosfoundation`}
              className="linkedin-follow-button">
              FINOS on LinkedIn
                </a>
          </div>
        </div>
      </section>
      <section className="finos finosBanner">
        <a href="https://www.finos.org">
          <img id="finosicon" src={`img/finos_wordmark.svg`} height='75px' alt="FINOS" title="FINOS" />
          <h2 id="proud">Proud member of the Fintech Open Source Foundation</h2>
        </a>

      </section>

      <section className="copyright">{props.config.copyright}</section>

    </footer>
  );
}
module.exports = Footer;
