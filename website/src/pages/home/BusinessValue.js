import React from 'react';
import styles from '../../css/scss/styles.module.scss';
import { baseUrl } from '../../../docusaurus.config';

function BusinessValueSection() {
    return (
        <section className={styles.businessValueSection}>
            <div className={styles.businessDomainList}>
                <div className={styles.businessDomainTitle}>
                    <h3>THE GLUE DATA MODEL COVERS THE FOLLOWING KEY ENTITY DOMAINS</h3>
                </div>
                <div className={styles.businessDomainKey}>
                    <a href={`${baseUrl}docs/People_Business_Partners/Overview`}>
                        <img src="../../img/business_domain_share.png"></img>
                    </a>
                    <a href={`${baseUrl}docs/Portfolio/Overview`}>
                        <img src="../../img/business_domain_portfolio.png"></img>
                    </a>
                </div>
                <div className={styles.businessDomainKey}>
                    <a href={`${baseUrl}docs/Instruments/Overview`}>
                        <img src="../../img/business_domain_instruments.png"></img>
                    </a>
                    <a href={`${baseUrl}docs/Proposition_Order_Transaction/Overview`}>
                        <img src="../../img/business_domain_proposition_transactions.png"></img>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default BusinessValueSection;