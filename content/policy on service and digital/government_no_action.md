---
uri: https://www.canada.ca/#government_no_action
title: Government no action
mermaid_layers: 3
entities:
- http://www.thesaurus.gc.ca/#policy
- https://schema.org/OrganizationRole
- https://www.canada.ca/#department_agency_ca
- https://www.canada.ca/#government
- https://www.canada.ca/#government_action
- https://www.canada.ca/#government_no_action
- https://www.canada.ca/#policy_instrument
- https://www.canada.ca/#public_servant
draft: false
---

## Related Links

- [[Government]]
- [[OrganizationRole]]
- [[department_agency_ca]]
- [[government]]
- [[government_action]]
- [[policy]]
- [[policy_instrument]]
- [[public_servant]]

## Semantic Connections

```mermaid
graph TD
  Government_no_action["Government no action<br>+ label: Government no action"]:::current-page-node
  Government_action["Government action<br>+ label: Government action"]
  Government_of_Canada["Government of Canada<br>+ label: Government of Canada"]
  Public_servant["Public servant<br>+ label: Public servant<br>+ comment: A role held by a person who is employed by the Government of Canada to carry out government duties and responsibilities."]
  Public_policy["Public policy<br>+ label: Public policy<br>+ comment: about what governments choose to do, or not do"]
  Government["Government"]
  Policy_instrument["Policy instrument<br>+ label: Policy instrument"]
  GC_Departments_or_Agencies["GC Departments or Agencies<br>+ label: GC Departments or Agencies"]
  OrganizationRole["OrganizationRole<br>+ label: OrganizationRole<br>+ comment: A subclass of Role used to describe roles within organizations."]
  Government_no_action-->|" subClassOf "|Government_action
  GC_Departments_or_Agencies-->|" employee "|Public_servant
  Government_action-->|" agent "|Government_of_Canada
  GC_Departments_or_Agencies-->|" subClassOf "|Government_of_Canada
  Policy_instrument-->|" subClassOf "|Public_policy
  Public_servant-->|" subClassOf "|OrganizationRole
  Public_policy-->|" author "|Government
  Public_policy-->|" potentialAction "|Government_action
  Government_action-->|" provider "|Public_servant
```
