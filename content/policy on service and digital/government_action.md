---
uri: https://www.canada.ca/#government_action
title: Government action
mermaid_layers: 3
entities:
- https://en.wikipedia.org/wiki/Government
- https://schema.org/OrganizationRole
- https://schema.org/Role
- https://www.canada.ca/#government_action
- https://www.canada.ca/#public_servant
draft: false
---

## Related Links

- [[OrganizationRole]]
- [[Role]]
- [[government]]
- [[public_servant]]

## Semantic Connections

```mermaid
graph TD
  Government_action["Government action<br>+ label: Government action"]:::current-page-node
  Government_of_Canada["Government of Canada<br>+ label: Government of Canada"]
  Public_servant["Public servant<br>+ label: Public servant<br>+ comment: A role held by a person who is employed by the Government of Canada to carry out government duties and responsibilities."]
  OrganizationRole["OrganizationRole<br>+ label: OrganizationRole<br>+ comment: A subclass of Role used to describe roles within organizations."]
  Role["Role<br>+ label: Role<br>+ comment: //blog.schema.org/2014/06/introducing-role.html)."]
  Government_action-->|" agent "|Government_of_Canada
  OrganizationRole-->|" subClassOf "|Role
  Government_action-->|" provider "|Public_servant
  Public_servant-->|" subClassOf "|OrganizationRole
```
