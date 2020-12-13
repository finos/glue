import React from 'react';
import Layout from '@theme/Layout';
import TableList from './TableList';
import InstrumentsTables from './InstrumentsTables'
import styles from '../../css/scss/styles.module.scss';

function Instruments() {
    return (
        <Layout>
            <h1>Domain Group for Asset Classifications/Instruments</h1>
            <InstrumentsSummary></InstrumentsSummary>
            <div className={styles.imgContainer}>
                <img src="../../../static/img/instruments_relationships_connections.png"/>
            </div>
            <TableList tablesList={InstrumentsTables}></TableList>
        </Layout>
    );
}

const InstrumentsSummary = () => (
    <div className={styles.instrumentsSummaryContainer}>
                <h3>Flexible Instrument Identifiers</h3>
                <p>
                    Your Institution will deal with multiple types (standard &amp; proprietary) of identifiers. These can be stored in the identifier tables in the Glue model.
                </p>
                <h3>Flexible Hierarchical Classifications</h3>
                <p>
                    There are dedicated tables to store the  instrument type classifications  (e.g: instrument_type to identify money account, cash, bonds, equities to counterbook trades.)  These are checked upon in the code: dedicated tables. e.g. required in Investment Proposition to identify money account to debit / credit buy and sells.
                </p>
                <p>
                    You could customise categories, to define Asset Allocation, for reporting, etc.  via hierarchy tables.
                </p>
            </div>
);

export default Instruments;
