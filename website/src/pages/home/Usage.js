import React from 'react';
import styles from '../../css/scss/styles.module.scss';

function UsageSection() {
    return (
        <section className={styles.usageSection}>
            <h3 className={styles.howItWorks}>
                How The Glue Data Model Can Help You 
            </h3>
            <p>
                By implementing the GLUE Model, in your Institution, 
                will enable you to enhance your investment, portfolio, 
                order and client management tools and engagement services. 
                Scenarios, for a Wealth Manager, Client Advisor or CIO.
            </p>
            <div className={styles.exampleUseCases}>
                <UseCase className={styles.useCase} usecase={new Case(
                    `Prepare a Clients Portfolio Analysis`,
                    `View the mandate type of a client portfolio (e.g: Wealth Advisory,
                    Discretionary, Brokerage) and access the Portfolio Performance History,
                    to show current state vs target state. Knowing the drivers and reasons
                    for down performance, to prepare an Optimized Portfolio Proposal with 
                    recommended trades.`
                )}/>
                <UseCase className={styles.useCase} usecase={new Case(
                    `Create a Strategic Asset Allocation`,
                    `View the strategic asset allocation of the strategy that is currently 
                    linked to a client portfolio. Study the macroeconomic factors and review 
                    a client's portfolio performance and attribution. This enables you to 
                    introduce re-balancing and corrective actions to meet client goals.
                    `
                )}/>
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