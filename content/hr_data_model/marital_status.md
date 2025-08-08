---
uri: https://gcxgce.sharepoint.com/teams/10001579/#marital_status
title: marital_status
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#marital_status
- https://gcxgce.sharepoint.com/teams/10001579/#person
draft: false
---

## Related Links

- [[area_person]]
- [[marital_status]]
- [[person]]

## Semantic Connections

```mermaid
graph TD
  marital_status["marital_status"]:::current-page-node
  area_person["area_person"]
  person["person"]
  person-->|" has "|marital_status
  marital_status-->|" subClassOf "|area_person
```
