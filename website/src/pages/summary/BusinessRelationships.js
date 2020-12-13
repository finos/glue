import React from 'react';
import Layout from '@theme/Layout';
import TableList from './TableList';
import BusinessRelationshipsTableList from './BusinessRelationshipsTableList';
import styles from '../../css/scss/styles.module.scss';

function BusinessRelationships() {
    return (
        <Layout>
            <h1>Domain Group for Party/Business Relationships</h1>
            <RelationshipsSummary></RelationshipsSummary>
            <div className={styles.imgContainer}>
            <img src="../../../static/img/business_.relationships.png"/>
            </div>
            <TableList tablesList={BusinessRelationshipsTableList}></TableList>
        </Layout>
    );
}

const RelationshipsSummary = () => (
    <div className={styles.relationshipsSummaryContainer}>
        <p>
            A Partner can be a client, non-client, family bonds,
            business environment, etc. Having a partner-centric
            approach is to do business with, a partner as well as
            having a business relationship (account) with them.
            Having this knowledge organized will help your business
            in marketing, advisory and regulatory purposes.
        </p>

        <p className={styles.businessTypesEntities}>
            <h3>The different types of business entities</h3>
            <ul>
                <li><strong>Legal entities</strong>: Individual,  Corporation, Limited Liability Company (LLC)</li>
                <li><strong>Non legal entities</strong>: Sole Proprietorship, Trust, Association, etc.</li>
                <li><strong>Special entities</strong>: can be internal, an issuer of an instrument, e.g:  a booking center, department, team, etc.</li>
            </ul>
        </p>

        <p>
            The Relationship between a business partner that is connected
            with a  person. One person can have multiple business partner 
            Relationships.
        </p>
    </div>
);

export default BusinessRelationships;