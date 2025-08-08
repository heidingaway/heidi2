---
uri: https://gcxgce.sharepoint.com/teams/10001579/#position_competency
title: Position Competency
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_position
- https://gcxgce.sharepoint.com/teams/10001579/#competency_dictionary
- https://gcxgce.sharepoint.com/teams/10001579/#job
- https://gcxgce.sharepoint.com/teams/10001579/#person_competency
- https://gcxgce.sharepoint.com/teams/10001579/#position
- https://gcxgce.sharepoint.com/teams/10001579/#position_competency
draft: false
---

## Related Links

- [[area_position]]
- [[competency_dictionary]]
- [[job]]
- [[person_competency]]
- [[position]]
- [[position_competency]]

## Semantic Connections

```mermaid
graph TD
  Position_Competency["Position Competency"]:::current-page-node
  area_position["area_position"]
  job["job"]
  position["position"]
  competency_dictionary["competency_dictionary"]
  person_competency["person_competency"]
  Position_Competency-->|" subClassOf "|area_position
  person_competency-->|" uses "|Position_Competency
  Position_Competency-->|" describes "|job
  Position_Competency-->|" uses "|competency_dictionary
  job-->|" describedBy "|Position_Competency
  Position_Competency-->|" describes "|position
```
