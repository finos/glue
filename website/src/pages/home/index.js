import React from 'react';
import Layout from '@theme/Layout';

import LandingSection from './Landing';
import WhatIsSection from './Whatis';
import UsageSection from './Usage';
import ExamplesSection from './Examples';
import BusinessValueSection from './BusinessValue';
import ContributeContactsSection from './ContributeContacts';

function HomeScreen({siteConfig, language}) {
    return (
        <Layout>
            <LandingSection siteConfig={siteConfig} language={language}/>
            <WhatIsSection />
            {/* <UsageSection /> */}
            <BusinessValueSection />
            <ExamplesSection />
            <ContributeContactsSection />
        </Layout>
    );
}

export default HomeScreen;