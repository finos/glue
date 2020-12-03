import React from 'react';
import Layout from '@theme/Layout';
import LandingSection from './Landing';

function HomeScreen({siteConfig, language}) {
    return (
        <Layout>
            <LandingSection siteConfig={siteConfig} language={language}/>
        </Layout>
        //<WhatIsSection />
        //<UsageSection />
        //<ExamplesSection />
        //<BusinessValueSection />
        //<InfrastructureSection />
        //<ContributeContactsSection />
    );
}

export default HomeScreen;