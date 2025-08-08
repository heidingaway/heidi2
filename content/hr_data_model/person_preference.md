---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person_preference
title: Person Preference
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person
- https://gcxgce.sharepoint.com/teams/10001579/#person_preference
- https://gcxgce.sharepoint.com/teams/10001579/#preference
draft: false
---

## Related Links

- [[area_person]]
- [[person]]
- [[person_preference]]
- [[preference]]

## Semantic Connections

```mermaid
graph TD
  Person_Preference["Person Preference"]:::current-page-node
  area_person["area_person"]
  preference["preference"]
  person["person"]
  person-->|" has "|Person_Preference
  Person_Preference-->|" subClassOf "|area_person
  Person_Preference-->|" isFor "|preference
```
