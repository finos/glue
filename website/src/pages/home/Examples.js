import React from 'react';
import styles from '../../css/scss/styles.module.scss';

const services = [{
    title: "Portflio Health Monitoring Service Tool",
    images: [
        `../../../static/img/exampleusecases/glue_example_1.png`,
        `../../../static/img/exampleusecases/glue_example_3.png`,
        `../../../static/img/exampleusecases/glue_example_2.png`
    ],
    description: `
    This alerts Wealth Managers and Client Advisors about <strong>deviations</strong> between
    the current <strong>client portfolio</strong> and <strong>agreed investment</strong> instructions. Control
    <strong>dimensions</strong> monitored would be <strong>defined</strong> within the validation of an 
    <strong>investment proposition</strong>.
     
    Also, can be defined by a clients <strong>investment strategy</strong>, linked to the 
    <strong>mandate type</strong> or on specific <strong>client instruction</strong>. The <strong>service tool</strong> monitors
    the <strong>risk/return</strong> profile of a <strong>client portfolio</strong>. A flexible framework 
    enables you to <strong>set up & customize new types of restrictions</strong> e.g: asset 
    allocation, currency overlay, instrument concentration on ISIN level, 
    issuer concentration on parent issuer, product risk class and risk / return. 
    
    Also, the ability to use this <strong>service tool for real or simulated portfolios</strong>.    
    `
}, {
    title: "Asset Exposure Reporting Service Tool",
    images: [
        `../../../static/img/exampleusecases/glue_example_4.jpg`,
        `../../../static/img/exampleusecases/glue_example_5.jpg`,
        `../../../static/img/exampleusecases/glue_example_6.jpg`
    ],
    description: `
    Wealth Managers and Client Advisors can explore the <strong>aggregated portfolio holdings</strong>
    along <strong>multiple dimensions</strong> (e.g. asset class, currency, region, product type).
    This tool has a <strong>Wealth Aggregator to view client portfolios</strong>. Filter to view 
    <strong>single clients</strong> or across all for a <strong>client advisor book</strong>.
    
    Also, can view an entire bank with multiple booking centres.
    
    Apply <strong>combination of filters</strong> from <strong>different dimensions</strong> to get a
    specific view. E.g: change reference currency or filter to limit the results to specific mandate types,
    portfolio strategies, currencies, teams etc. Based on <strong>authorization level</strong> the views 
    can be <strong>hierarchical</strong> from an entire <strong>booking centre to single portfolios</strong>.
    <strong>Book Analysis Service</strong>: Clients and client advisor require <strong>full transparency on 
    holdings</strong> and underlying <strong>risk drivers</strong>. These <strong>drivers come from multiple 
    dimensions</strong>, e.g: asset classes, product types, regional, currency or industry exposure.
    This <strong>service allows for multidimensional exposure and book analytics</strong>.`
    }];


function ExamplesSection() {
    return (
        <section className={styles.examplesSection}>
            <h3>
                EXAMPLE SERVICES
            </h3>
            <Services services={services} />
        </section>
    );
}

const Services = ({ services }) => (
    <div>
        {services.map((service, index) => (<ExampleService key={index} service={service}></ExampleService>))}
    </div>
);

const ExampleService = ({ service }) => (
    <div>
        <h4>{ service.title }</h4>
        <ExampleCopyRightImages>
            <React.Fragment>
            {service.images.map((image, imgIndex) => (<ExampleCopyRightImage key={imgIndex} imgPath={image}></ExampleCopyRightImage>))}
            </React.Fragment>
        </ExampleCopyRightImages>
        <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
    </div>
);

const ExampleCopyRightImages = ({ children }) => (
    <div className={styles.imageContainer}>{children}</div>
);

const ExampleCopyRightImage = ({ imgPath, alt = "" }) => (
    <img className={styles.copyRightImage} src={imgPath} alt={alt} />
);

export default ExamplesSection;