import React from 'react';
import styles from '../../css/scss/styles.module.scss';

function WhatIsSection() {
    return (
        <section className={styles.whatisSection}>
            <div>
                <h3>Purpose</h3>
                <p>Buy-side firms are under enormous pressure to keep up with the <strong>digital transformation wave</strong>. Changing client demands, regulatory pressure and the rapid adoption of online, self-service investment management approaches are fueling investment into digital platforms and data driven <strong>Wealth & Asset Management</strong>. Often, firms are held back by legacy infrastructure and a fragmented data landscape. Traditional data warehousing approaches are not well suited to modern <strong>digital and analytical solutions</strong> exposed to the end client; they struggle to adhere to the stringent regulatory requirements inherent in data privacy, cross border access and internal data governance.</p>

                <p>EPAM’s <strong>GLUE Data Model</strong> has been designed for strong security, client data protection and <strong>GDPR compliance</strong> with clear separation of sensitive data, late enrichment and anonymized analytical patterns. It provides the flexibility to model hierarchical organization structures and instrument classification schemes, as well as the complex legal entity structures of typical buy-side client relationships.</p>
                
                <p>This forms the basis of modern, <strong>data driven hybrid advisory platforms</strong> for clients and advisors, specifically targeting next generation digital experiences. The GLUE Model, along with an appropriate platform implementation, will support necessary fault tolerance, <strong>disaster recovery and continuity</strong>.</p>
            </div>
            <div>
                <h3>Features of GLUE</h3>

                <ul>
                    <li>High-Performance in-memory analytical data fabric powering digital advisor and client solutions</li>
                    <li>Enabling massive parallelization of analytical calculations in a distributed in memory store</li>
                    <li>Enterprise grade fault tolerance and disaster recovery, horizontal scalability</li>
                    <li>Cloud native architecture deployable in public and private clouds</li>
                    <li>High degree of data security, GDPR compliant</li>
                </ul>

            </div>
        </section>
    );
}

export default WhatIsSection;