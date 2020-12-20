import React from 'react';
import Layout from '@theme/Layout';
import TableList from './TableList';
import PortfolioStrategyRelationshipsTableList from './PortfolioStrategyRelationshipsTableList'
import styles from '../../css/scss/styles.module.scss';

function PortfolioStrategy () {
    return (
        <Layout>
            <h1>Portfolio / Financial Account / Investment Strategy</h1>
            <PortfolioStrategySummary></PortfolioStrategySummary>
            <div className={styles.imgContainer}>
                <img src="../../../static/img/portfolio_strategy_relationship_connections.png"/>
            </div>
            <TableList tablesList={PortfolioStrategyRelationshipsTableList}></TableList>
        </Layout>
    );
}

const PortfolioStrategySummary = () => (
    <div className={styles.summaryContainer}>
                <p>
                The list of all asset classes, including industry view, 
                shows assets distributed across industries in order to 
                explore the sector exposure of the clients. 
                The official GICS structure for this view is used.  
                The regional view is clients' assets distributed across 
                regions in order to explore the regional exposure. This 
                can be a hierarchical view, depending on the regional 
                classification schema. Several levels of regions can be 
                supported.
                </p>
            </div>
);

export default PortfolioStrategy;