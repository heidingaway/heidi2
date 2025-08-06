---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_position
title: Position
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_position
- https://gcxgce.sharepoint.com/teams/10001579/#conditions_of_employment
- https://gcxgce.sharepoint.com/teams/10001579/#core_workforce_data
- https://gcxgce.sharepoint.com/teams/10001579/#essential_service
- https://gcxgce.sharepoint.com/teams/10001579/#exclusion
- https://gcxgce.sharepoint.com/teams/10001579/#position
- https://gcxgce.sharepoint.com/teams/10001579/#position_competency
- https://gcxgce.sharepoint.com/teams/10001579/#position_language
- https://gcxgce.sharepoint.com/teams/10001579/#position_pay
- https://gcxgce.sharepoint.com/teams/10001579/#position_relationship
- https://gcxgce.sharepoint.com/teams/10001579/#position_status
draft: false
---

## Related Links

- [[conditions_of_employment]]
- [[core_workforce_data]]
- [[essential_service]]
- [[exclusion]]
- [[position]]
- [[position_competency]]
- [[position_language]]
- [[position_pay]]
- [[position_relationship]]
- [[position_status]]

## Semantic Connections

```mermaid
graph TD
  Position["Position"]:::current-page-node
  core_workforce_data["core_workforce_data"]
  exclusion["exclusion"]
  position_status["position_status"]
  conditions_of_employment["conditions_of_employment"]
  essential_service["essential_service"]
  position_relationship["position_relationship"]
  position_language["position_language"]
  position_competency["position_competency"]
  position_pay["position_pay"]
  position["position"]
  essential_service-->|" subClassOf "|Position
  position_competency-->|" subClassOf "|Position
  position_language-->|" subClassOf "|Position
  exclusion-->|" subClassOf "|Position
  position_status-->|" subClassOf "|Position
  Position-->|" subClassOf "|core_workforce_data
  position_pay-->|" subClassOf "|Position
  position-->|" subClassOf "|Position
  position_relationship-->|" subClassOf "|Position
  conditions_of_employment-->|" subClassOf "|Position
```
