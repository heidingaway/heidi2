---
uri: https://www.canada.ca/#government_no_action
title: Government no action
mermaid_layers: 3
entities:
- https://en.wikipedia.org/wiki/Government
- https://schema.org/OrganizationRole
- https://www.canada.ca/#department_agency_ca
- https://www.canada.ca/#government_action
- https://www.canada.ca/#government_no_action
- https://www.canada.ca/#policy
- https://www.canada.ca/#policy_suite
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
- [[public_servant]]

## Semantic Connections

```mermaid
graph TD
  Government_no_action["Government no action<br>+ label: Government no action"]:::current-page-node
  Government_action["Government action<br>+ label: Government action"]
  Government_of_Canada["Government of Canada<br>+ label: Government of Canada"]
  Public_servant["Public servant<br>+ label: Public servant<br>+ comment: A role held by a person who is employed by the Government of Canada to carry out government duties and responsibilities."]
  Public_policy["Public policy<br>+ label: Public policy<br>+ comment: about what governments choose to do, or not do"]
  OrganizationRole["OrganizationRole<br>+ label: OrganizationRole<br>+ comment: A subclass of Role used to describe roles within organizations."]
  GC_Departments_or_Agencies["GC Departments or Agencies<br>+ label: GC Departments or Agencies"]
  Government["Government"]
  policy_suite["policy_suite"]
  Public_policy-->|" author "|Government
  policy_suite-->|" hasPart "|Public_policy
  GC_Departments_or_Agencies-->|" subClassOf "|Government_of_Canada
  Public_policy-->|" potentialAction "|Government_action
  Government_action-->|" agent "|Government_of_Canada
  Government_action-->|" provider "|Public_servant
  Public_servant-->|" subClassOf "|OrganizationRole
  Government_no_action-->|" subClassOf "|Government_action
  GC_Departments_or_Agencies-->|" employee "|Public_servant
```
