import React from 'react';
import styles from '../../css/scss/styles.module.scss';

function UsageSection() {
    return (
        <section className={styles.usageSection}>
            <div className={styles.howItWorks}>
                <h3>
                    How The Glue Data Model Can Help You 
                </h3>
            </div>
        </section>
    );
}

function Case(title, description ) {
    this.title = title;
    this.description = description;
};

const UseCase = ({usecase}) => (
    <div className={styles.useCase}>
        <h4>{usecase.title}</h4>
        <p>{usecase.description}</p>      
    </div>
);

export default UsageSection;