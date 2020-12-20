import React from 'react';
import Layout from '@theme/Layout';
import TableList from './TableList';
import TransactionsTables from './TransactionsTables'
import styles from '../../css/scss/styles.module.scss';

function PropositionOrderTransactions() {
    return (
        <Layout>
            <h1>Positions / Transactions / Orders/ Investment Propositions</h1>
            <PropositionOrderTransactionsSummary></PropositionOrderTransactionsSummary>
            <div className={styles.imgContainer}>
                <img src="../../../static/img/transactions_relationships_connections.png" />
            </div>
            <TableList tablesList={TransactionsTables}></TableList>
        </Layout>
    );
}

const PropositionOrderTransactionsSummary = () => (
    <div className={styles.summaryContainer}>
        <p>
            An Investment proposal is created when a client advisor wants to; modify an existing client's portfolio, suggest new opportunities, simulate trades and investigate the impact upon client holdings. Your service tool should copy the existing (source) portfolio and create a simulated portfolio with the changes. Then compare to the source portfolio.
        </p>
        <p>
            Once the client approves the investment proposition, it generates an order in the related trading system.
            The portfolio manager may decide to rebalance the portfolio to the approved investment strategy (i.e: may want to buy stock X and sell stock Y).
        </p>
    </div >
);

export default PropositionOrderTransactions;