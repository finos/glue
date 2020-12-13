import React from 'react';
import styles from '../../css/scss/styles.module.scss';

const TableList = ({tablesList}) => (
    <ul className={styles.tableList}>
        {tablesList.map((table, index) => (<li className={styles.tableName} key={index}><a href={table.link}>{table.name}</a></li>))}   
    </ul>
);

export default TableList;