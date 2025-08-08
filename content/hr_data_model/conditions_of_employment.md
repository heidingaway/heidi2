---
uri: https://gcxgce.sharepoint.com/teams/10001579/#conditions_of_employment
title: Conditions of Employment
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_position
- https://gcxgce.sharepoint.com/teams/10001579/#conditions_of_employment
- https://gcxgce.sharepoint.com/teams/10001579/#job
- https://gcxgce.sharepoint.com/teams/10001579/#position
draft: false
---

## Related Links

- [[area_position]]
- [[conditions_of_employment]]
- [[job]]
- [[position]]

## Semantic Connections

```mermaid
graph TD
  Conditions_of_Employment["Conditions of Employment"]:::current-page-node
  area_position["area_position"]
  job["job"]
  position["position"]
  job-->|" requires "|Conditions_of_Employment
  position-->|" requires "|Conditions_of_Employment
  Conditions_of_Employment-->|" requiredBy "|job
  Conditions_of_Employment-->|" requiredBy "|position
  Conditions_of_Employment-->|" subClassOf "|area_position
```
