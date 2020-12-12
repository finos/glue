import React from 'react';
import styles from '../../css/scss/styles.module.scss';
import { baseUrl } from '../../../docusaurus.config';

function BusinessValueSection() {
    return (
        <section className={styles.businessValueSection}>
            <div className={styles.businessDomainImpact}>
                <a href={`${baseUrl}summary/`}>
                    <img src="../../../static/img/business_domain_impact.png"></img>
                </a>
            </div>
            <div className={styles.businessDomainList}>
                <div>
                    <a href={`${baseUrl}summary/`}>
                        <img src="../../../static/img/business_domain_share.png"></img>
                    </a>
                    <a href={`${baseUrl}summary/`}>
                        <img src="../../../static/img/business_domain_portfolio.png"></img>
                    </a>
                    <a href={`${baseUrl}summary/`}>
                        <img src="../../../static/img/business_domain_instruments.png"></img>
                    </a>
                    <a href={`${baseUrl}summary/`}>
                        <img src="../../../static/img/business_domain_proposition_transactions.png"></img>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default BusinessValueSection;