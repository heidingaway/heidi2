---
uri: https://gcxgce.sharepoint.com/teams/10001579/#education_institution
title: Education Institution
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#education_institution
- https://gcxgce.sharepoint.com/teams/10001579/#person_education
- https://schema.org/address
draft: false
---

## Related Links

- [[address]]
- [[area_person]]
- [[person_education]]

## Semantic Connections

```mermaid
graph TD
  Education_Institution["Education Institution"]:::current-page-node
  area_person["area_person"]
  address["address"]
  person_education["person_education"]
  Education_Institution-->|" subClassOf "|area_person
  Education_Institution-->|" contactedAt "|address
  person_education-->|" has "|Education_Institution
```
