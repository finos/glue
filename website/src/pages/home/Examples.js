import React from 'react';
import styles from '../../css/scss/styles.module.scss';

const services = [{
    title: 'Investment Management',
    image: `../../img/exampleusecases/glue_example_1.png`,
    description: `
    A tool for the Chief Investment Office to manage strategies and model portfolios for discretionary and advisory mandates
    Based on vast series of market and economic risk factors (expected returns, regional biases, volatility, correlations, etc.) construct dependent strategies and portfolios under consideration of regional or client-specific requirements.
    <ul>
        <li>Set-up and maintain strategies and model portfolios</li>
        <li>Manage your investment universe and benchmarks</li>
        <li>Set-up and adjust house views with different methods</li>
        <li>Manage rules- or risk-based derivation</li>
        <li>Run risk analytics on market & economic risk factors</li>
        <li>Create historical & forward-looking stress test scenarios</li>
    </ul>
    `
}, {
    title: 'Portfolio Health Monitoring Tool',
    image: `../../img/exampleusecases/glue_example_2.png`,
    description: `
    A tool that alerts bank managers, client advisors and clients alike about deviations between the current client portfolio and agreed investment instructions. The flexible framework let you set up new types of restrictions easily and customize it for the bank. 

    <ul>
        <li>Tailored investment strategies can be build based on customizable <strong>restriction sets</strong> and <strong>capital market assumptions</strong> e.g: asset allocation, currency overlay, issuer concentration, product risk class, etc.</li>
        <li>The tool assesses the <strong>violations</strong> in the current <strong>client portfolio</strong> in comparison to the agreed investment strategy and specific client instructions</li>
        <li>The Wealth Manager/Client Advisor can easily prepare an <strong>investment proposition</strong> so that the violations can be resolved</li>
        <li>The tool can also be used to evaluate the investment proposition by creating <strong>simulated portfolio</strong> and comparing its attributes with the client investment strategy</li>
    </ul>
    `
},{
    title: 'Asset Exposure Reporting Tool',
    image: `../../img/exampleusecases/glue_example_3.png`,
    description: `
    Wealth Managers and Client Advisors can explore the <strong>aggregated portfolio holdings</strong> along <strong>multiple dimensions</strong> (e.g. asset class, currency, region, product type).  
    
    <ul>
        <li><strong>Authorization level hierarchical</strong> views can be built to display an entire <strong>booking centre</strong> to <strong>single client portfolios</strong></li>
        <li>Based on the flexible table structures in GLUE specific views can be built and multiple <strong>combinations</strong> of <strong>filters</strong> from different <strong>dimensions</strong> are supported, e.g: region, asset class, investment strategy, currency, responsible client advisor, etc</li>
    </ul>
    `
}];


function ExamplesSection() {
    return (
        <section className={styles.examplesSection}>
            <Services services={services} />
        </section>
    );
}

const Services = ({ services }) => (
    <div>
        {services.map((service, index) => (
            <div key={index} className={styles.exampleWrapper}>
                <div>
                    <h4>{ service.title }</h4>
                    <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                </div>
                <div>
                    <img src={ service.image }></img>
                </div>
            </div>
        ))}
    </div>
);

export default ExamplesSection;