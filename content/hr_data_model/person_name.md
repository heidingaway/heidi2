---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person_name
title: Person Name
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person
- https://gcxgce.sharepoint.com/teams/10001579/#person_name
draft: false
---

## Related Links

- [[area_person]]
- [[person]]
- [[person_name]]

## Semantic Connections

```mermaid
graph TD
  Person_Name["Person Name"]:::current-page-node
  area_person["area_person"]
  person["person"]
  Person_Name-->|" subClassOf "|area_person
  person-->|" named "|Person_Name
```
