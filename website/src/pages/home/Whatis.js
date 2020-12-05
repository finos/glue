import React from 'react';
import styles from '../../css/scss/styles.module.scss';

function WhatIsSection() {
    return (
        <section className={styles.whatisSection}>
            <div>
                <h3>Features</h3>
                <h4>
                    <strong>The GLUE Model</strong>, along with an appropriate platform implementation, will support necessary <strong>fault tolerance, disaster recovery and continuity</strong>.
                    This forms the basis of modern, <strong>data driven hybrid advisory platforms</strong> for clients and advisors with next generation digital experiences.
                </h4>
            </div>
            <div>
                <h3>The Industry</h3>
                <p>
                Buy-side firms are under enormous pressure to keep up with the <strong>digitalization wave</strong>. 
                Changing client demands, regulatory pressure and the rapid adoption of online, self-service investment management
                approaches are fueling investment into digitalization and data driven <strong>Asset &amp; Wealth Management</strong>.
                Often, firms are held back by legacy infrastructure and inappropriate data storage. Traditional Data-Warehousing 
                approaches do not provide the performance needed for modern <strong>digital and analytical solutions</strong> exposed
                to the end client; they struggle to adhere to the stringent regulatory requirements inherent in data-privacy, cross-border
                and data lineage.
                </p>
            </div>
        </section>
    );
}

export default WhatIsSection;