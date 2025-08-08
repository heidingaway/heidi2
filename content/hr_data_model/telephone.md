---
uri: https://gcxgce.sharepoint.com/teams/10001579/#telephone
title: Telephone
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person
- https://gcxgce.sharepoint.com/teams/10001579/#telephone
draft: false
---

## Related Links

- [[area_person]]
- [[person]]
- [[telephone]]

## Semantic Connections

```mermaid
graph TD
  Telephone["Telephone"]:::current-page-node
  area_person["area_person"]
  person["person"]
  person-->|" contactedAt "|Telephone
  Telephone-->|" subClassOf "|area_person
```
