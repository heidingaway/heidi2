---
uri: https://gcxgce.sharepoint.com/teams/10001579/#preference
title: Preference
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person_preference
- https://gcxgce.sharepoint.com/teams/10001579/#preference
draft: false
---

## Related Links

- [[area_person]]
- [[person_preference]]
- [[preference]]

## Semantic Connections

```mermaid
graph TD
  Preference["Preference"]:::current-page-node
  area_person["area_person"]
  person_preference["person_preference"]
  person_preference-->|" isFor "|Preference
  Preference-->|" subClassOf "|area_person
```
