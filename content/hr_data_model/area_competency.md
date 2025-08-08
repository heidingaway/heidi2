---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_competency
title: Competency
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_competency
- https://gcxgce.sharepoint.com/teams/10001579/#competency_dictionary
- https://gcxgce.sharepoint.com/teams/10001579/#competency_indicator
- https://gcxgce.sharepoint.com/teams/10001579/#competency_proficiency_level
- https://gcxgce.sharepoint.com/teams/10001579/#competency_subtype
- https://gcxgce.sharepoint.com/teams/10001579/#competency_type
- https://gcxgce.sharepoint.com/teams/10001579/#core_workforce_data
draft: false
---

## Related Links

- [[area_competency]]
- [[competency_dictionary]]
- [[competency_indicator]]
- [[competency_proficiency_level]]
- [[competency_subtype]]
- [[competency_type]]
- [[core_workforce_data]]

## Semantic Connections

```mermaid
graph TD
  Competency["Competency"]:::current-page-node
  core_workforce_data["core_workforce_data"]
  competency_proficiency_level["competency_proficiency_level"]
  competency_subtype["competency_subtype"]
  competency_type["competency_type"]
  competency_indicator["competency_indicator"]
  competency_dictionary["competency_dictionary"]
  competency_indicator-->|" subClassOf "|Competency
  Competency-->|" subClassOf "|core_workforce_data
  competency_dictionary-->|" subClassOf "|Competency
  competency_proficiency_level-->|" subClassOf "|Competency
  competency_type-->|" subClassOf "|Competency
  competency_subtype-->|" subClassOf "|Competency
```
