---
uri: https://www.canada.ca/#department_agency_ca
title: GC Departments or Agencies
mermaid_layers: 3
entities:
- https://schema.org/OrganizationRole
- https://schema.org/Role
- https://www.canada.ca/#deliver_government_operations_services
- https://www.canada.ca/#department_agency_ca
- https://www.canada.ca/#government
- https://www.canada.ca/#government_operations_services
- https://www.canada.ca/#public_servant
draft: false
---

## Related Links

- [[OrganizationRole]]
- [[Role]]
- [[deliver_government_operations_services]]
- [[government]]
- [[government_operations_services]]
- [[public_servant]]

## Semantic Connections

```mermaid
graph TD
  GC_Departments_or_Agencies["GC Departments or Agencies<br>+ label: GC Departments or Agencies"]:::current-page-node
  Government_of_Canada["Government of Canada<br>+ label: Government of Canada"]
  Public_servant["Public servant<br>+ label: Public servant<br>+ comment: A role held by a person who is employed by the Government of Canada to carry out government duties and responsibilities."]
  Delivery_government_operations_and_services["Delivery government operations and services<br>+ label: Delivery government operations and services"]
  OrganizationRole["OrganizationRole<br>+ label: OrganizationRole<br>+ comment: A subclass of Role used to describe roles within organizations."]
  Government_operations_and_services["Government operations and services<br>+ label: Government operations and services"]
  Role["Role<br>+ label: Role<br>+ comment: //blog.schema.org/2014/06/introducing-role.html)."]
  OrganizationRole-->|" subClassOf "|Role
  GC_Departments_or_Agencies-->|" employee "|Public_servant
  GC_Departments_or_Agencies-->|" subClassOf "|Government_of_Canada
  GC_Departments_or_Agencies-->|" performs "|Delivery_government_operations_and_services
  Public_servant-->|" subClassOf "|OrganizationRole
  Delivery_government_operations_and_services-->|" object "|Government_operations_and_services
```
