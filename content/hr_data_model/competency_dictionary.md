---
uri: https://gcxgce.sharepoint.com/teams/10001579/#competency_dictionary
title: Competency Dictionary
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_competency
- https://gcxgce.sharepoint.com/teams/10001579/#competency_dictionary
- https://gcxgce.sharepoint.com/teams/10001579/#competency_indicator
- https://gcxgce.sharepoint.com/teams/10001579/#competency_proficiency_level
- https://gcxgce.sharepoint.com/teams/10001579/#competency_type
- https://gcxgce.sharepoint.com/teams/10001579/#person_competency
- https://gcxgce.sharepoint.com/teams/10001579/#position_competency
draft: false
---

## Related Links

- [[area_competency]]
- [[competency_indicator]]
- [[competency_proficiency_level]]
- [[competency_type]]
- [[person_competency]]
- [[position_competency]]

## Semantic Connections

```mermaid
graph TD
  Competency_Dictionary["Competency Dictionary"]:::current-page-node
  area_competency["area_competency"]
  competency_proficiency_level["competency_proficiency_level"]
  competency_type["competency_type"]
  competency_indicator["competency_indicator"]
  person_competency["person_competency"]
  position_competency["position_competency"]
  Competency_Dictionary-->|" subClassOf "|area_competency
  position_competency-->|" uses "|Competency_Dictionary
  competency_type-->|" includedIn "|Competency_Dictionary
  competency_proficiency_level-->|" includedIn "|Competency_Dictionary
  person_competency-->|" uses "|Competency_Dictionary
  competency_indicator-->|" includedIn "|Competency_Dictionary
```
