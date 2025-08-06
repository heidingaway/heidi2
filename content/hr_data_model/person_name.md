---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person_name
title: Person Name
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person_name
- https://schema.org/Person
draft: false
---

## Related Links

- [[area_person]]
- [[person]]

## Semantic Connections

```mermaid
graph TD
  Person_Name["Person Name"]:::current-page-node
  area_person["area_person"]
  person["person"]
  person-->|" named "|Person_Name
  Person_Name-->|" subClassOf "|area_person
```
