---
uri: https://gcxgce.sharepoint.com/teams/10001579/#position
title: Position
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_position
- https://gcxgce.sharepoint.com/teams/10001579/#budget
- https://gcxgce.sharepoint.com/teams/10001579/#calendar
- https://gcxgce.sharepoint.com/teams/10001579/#conditions_of_employment
- https://gcxgce.sharepoint.com/teams/10001579/#essential_service
- https://gcxgce.sharepoint.com/teams/10001579/#position
- https://gcxgce.sharepoint.com/teams/10001579/#position_competency
- https://gcxgce.sharepoint.com/teams/10001579/#position_language
- https://gcxgce.sharepoint.com/teams/10001579/#position_pay
- https://gcxgce.sharepoint.com/teams/10001579/#work_description
- https://schema.org/Organization
- https://schema.org/address
draft: false
---

## Related Links

- [[address]]
- [[area_position]]
- [[budget]]
- [[calendar]]
- [[conditions_of_employment]]
- [[essential_service]]
- [[organization]]
- [[position_competency]]
- [[position_language]]
- [[position_pay]]
- [[work_description]]

## Semantic Connections

```mermaid
graph TD
  Position["Position"]:::current-page-node
  area_position["area_position"]
  organization["organization"]
  essential_service["essential_service"]
  budget["budget"]
  address["address"]
  calendar["calendar"]
  position_language["position_language"]
  position_pay["position_pay"]
  work_description["work_description"]
  conditions_of_employment["conditions_of_employment"]
  position_competency["position_competency"]
  position_competency-->|" describes "|Position
  position_language-->|" qualifies "|Position
  Position-->|" subClassOf "|area_position
  budget-->|" funds "|Position
  Position-->|" has "|address
  Position-->|" belongsTo "|organization
  organization-->|" includes "|Position
  Position-->|" fundedBy "|budget
  Position-->|" has "|position_language
  Position-->|" includes "|position_pay
  conditions_of_employment-->|" requiredBy "|Position
  Position-->|" requires "|conditions_of_employment
  Position-->|" has "|calendar
  Position-->|" designated "|essential_service
  position_pay-->|" includedIn "|Position
  Position-->|" relatesTo "|work_description
```
