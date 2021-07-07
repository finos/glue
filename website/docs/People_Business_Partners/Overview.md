---
id: Overview
title: Overview
hide_table_of_contents: true
---

<div className='overview-wrapper_src-css-scss-'>
<div className='overview-content_src-css-scss-'>

### People / Business Partners

**GLUE** is based on **Partner-centric** approach with 2 main components: the Person and the Business Relationship.

A **Person** can be a client, non-client, employee, etc. 
**Business Partner** exists when the Person has business relationship with our Organization. Thus, Person can exist in the system without having certain business relation with the Organization, but Business Partner can not exist without being associated to the Organization.

One Person can have multiple **Business Relationships/Job Responsibilities** with the Organization. Those 2 are separately modelled in GLUE. Through Bridge tables n-to-n relations between Person - Business Partner and Person - Bank Employee are maintained.

The **People/ Business Relationships** Domain is based on 33 tables, which include 9 PII tables designed to be maintained in dedicated DB ensuring clear separation of sensitive data.

#### Person can represent: 
Individual, Legal entity (Corporation, Limited Liability Company), Trust, Internal Business Unit, etc.

#### Business Partners can be:
**Clients:** Loan, Custodian Account, Deposit

**External:** Intermediary, Issuer, Authority

**Internal:** Internal Unit, Internal Custodian, Subsidiary

</div>

<img className='overview-img_src-css-scss-' src="../../img/people-business-relationships-overview.png" alt="People / Business Partners"/>

</div>

<img className='overview-img-center_src-css-scss-' src="../../img/people-business-relationships-overview-2.png" alt="People / Business Partners 2"/>
