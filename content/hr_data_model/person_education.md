---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person_education
title: Person Education
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#education_institution
- https://gcxgce.sharepoint.com/teams/10001579/#person_education
- https://schema.org/Person
draft: false
---

## Related Links

- [[area_person]]
- [[education_institution]]
- [[person]]

## Semantic Connections

```mermaid
graph TD
  Person_Education["Person Education"]:::current-page-node
  area_person["area_person"]
  education_institution["education_institution"]
  person["person"]
  Person_Education-->|" has "|education_institution
  Person_Education-->|" subClassOf "|area_person
  person-->|" has "|Person_Education
```
