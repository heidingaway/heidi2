---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person_email
title: Person Email
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person_email
- https://schema.org/Person
draft: false
---

## Related Links

- [[area_person]]
- [[person]]

## Semantic Connections

```mermaid
graph TD
  Person_Email["Person Email"]:::current-page-node
  area_person["area_person"]
  person["person"]
  person-->|" contactedAt "|Person_Email
  Person_Email-->|" subClassOf "|area_person
```
