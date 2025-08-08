---
uri: https://gcxgce.sharepoint.com/teams/10001579/#essential_service
title: essential_service
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_position
- https://gcxgce.sharepoint.com/teams/10001579/#essential_service
- https://gcxgce.sharepoint.com/teams/10001579/#position
draft: false
---

## Related Links

- [[area_position]]
- [[essential_service]]
- [[position]]

## Semantic Connections

```mermaid
graph TD
  essential_service["essential_service"]:::current-page-node
  area_position["area_position"]
  position["position"]
  essential_service-->|" subClassOf "|area_position
  position-->|" designated "|essential_service
```
