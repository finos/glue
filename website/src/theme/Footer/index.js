/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
// import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
// import styles from './styles.module.css';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({url, alt}) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer(props) {
  const config = props || {};
  const {footer} = useThemeConfig();
  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={config.baseUrl} className="nav-home">
          {config.footerIcon && (
            <img
              src={config.baseUrl + config.footerIcon}
              alt={config.title}
            />
          )}
        </a>
        <div>
          <h5>Docs</h5>
          <a href={useBaseUrl('home')}>
            Getting Started
              </a>
          <a href={useBaseUrl('team')}>
            Team
              </a>
          <a href={useBaseUrl('roadmap')}>
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
              href={config.repoUrl}
              data-count-href={`${config.repoUrl}/stargazers`}
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              {config.projectName}
            </a>
          </div>
          {config.twitterUsername && (
            <div className="social">
              <a
                href={`https://twitter.com/${config.twitterUsername}`}
                className="twitter-follow-button">
                Follow @{config.twitterUsername}
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

      <section className="copyright">{config.copyright}</section>

    </footer>
  );
}

export default Footer;
