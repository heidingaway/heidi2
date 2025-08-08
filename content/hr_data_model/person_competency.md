---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person_competency
title: Person Competency
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#competency_dictionary
- https://gcxgce.sharepoint.com/teams/10001579/#person
- https://gcxgce.sharepoint.com/teams/10001579/#person_competency
- https://gcxgce.sharepoint.com/teams/10001579/#position_competency
draft: false
---

## Related Links

- [[area_person]]
- [[competency_dictionary]]
- [[person]]
- [[person_competency]]
- [[position_competency]]

## Semantic Connections

```mermaid
graph TD
  Person_Competency["Person Competency"]:::current-page-node
  area_person["area_person"]
  competency_dictionary["competency_dictionary"]
  position_competency["position_competency"]
  person["person"]
  Person_Competency-->|" uses "|competency_dictionary
  Person_Competency-->|" subClassOf "|area_person
  person-->|" has "|Person_Competency
  Person_Competency-->|" uses "|position_competency
```
