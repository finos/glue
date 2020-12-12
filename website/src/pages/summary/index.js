import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/scss/styles.module.scss';

function SummaryPage() {
    return (
        <Layout>
            <h1>Summary</h1>
            <div className={styles.summaryContainer}>
                <p>
                    A design principle of Glue is that any <strong>lookup table</strong> can have any values in it. There is no expectation or dependency elsewhere in the data model on certain values being present.
                </p>
                <p>    
                    <strong>PII- Personally identifiable information</strong>, is any <strong>data</strong> that could potentially be used to identify a particular person. Examples include a full name, Social Security number, National Insurance number, driver's license number, bank account number, passport number, and email address.
                ​</p>
                <p>
                    Technology has expanded the scope of PII considerably. It can include an IP address, login IDs, social media posts, or digital images. Geolocation, biometric, and behavioral data can also be classified as PII.
                    This broad definition of PII creates security and privacy challenges, especially when specific and stringent safeguards for it are spelled out in regulations such as the European Union’s (EU’s) <a href="http://ec.europa.eu/justice/data-protection/reform/files/regulation_oj_en.pdf">General Data Protection Regulation (GDPR)</a>. It has been in effect since May 25, 2018, and it impacts any company, worldwide, that processes or stores personal data of EU residents.
    ​            </p>
                <p>
                    What are the new user rights for PII?
                    Documented “opt-in” consent must be given for every person (or their legal guardian). The consent must explicitly identify the data collected, what it is used for, and how long it will be kept. Further, participants can remove their consent at any time and request that their personal data be deleted (as long as they supply one of the approved reasons).
                </p>
            </div>
        </Layout>
    );
}

export default SummaryPage;